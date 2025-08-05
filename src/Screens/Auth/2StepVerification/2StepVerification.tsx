import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './style';
import {
  formatTime,
  h,
  useTypedNavigation,
} from '../../../utils/Helper/Helper';
import OtpInputField from '../../../Components/Otp/Otp';
import Button from '../../../Components/Button/Button';
import Colors from '../../../utils/Colors/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../Store';
import { sendOtp, setCode, verifyOtp } from './actions';
import Header from '../../../Components/Header/Header';
import Toast from 'react-native-toast-message';
import CustomLoader from '../../../Components/LoaderModal/LoaderModal';

const TwoStepVerifiction: React.FC<any> = ({ route }) => {
  const navigation = useTypedNavigation();
  const userId = useSelector(
    (state: RootState) => state.registerReducer?.userData?.id,
  );
  const { token } = route?.params;
  const { email } = useSelector((state: RootState) => state?.registerReducer);
  const { code } = useSelector(
    (state: RootState) => state?.twoStepVerification,
  );
  ``;
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(30);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer === 0) return;
    const time = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    return () => clearInterval(time);
  }, [timer]);

  const createOtp = () => {
    dispatch(sendOtp(token))
      .then((res: any) => {
        if (res?.value?.status === 200) {
          Toast.show({
            type: 'success',
            text2: res?.value?.data,
          });
        }
      })
      .catch((error: string) => {
        Toast.show({
          type: 'error',
          text2: error,
        });
      });
  };

  useEffect(() => {
    if (token) {
      createOtp();
    }
  }, [token]);

  const handleTwoStepAuthentication = () => {
    if (code?.length !== 6) {
      Toast.show({
        type: 'error',
        text2: 'Please enter the complete 6-digit OTP.',
      });
      return;
    }
    setLoading(true);
    const body = {
      otp_code: code,
    };
    dispatch(verifyOtp(body, token))
      .then((res: any) => {
        if (res?.payload?.status === 200) {
          Toast.show({
            type: 'success',
            text2: res?.payload?.data,
          });
          navigation.navigate('SelectState');
          dispatch(setCode(''));
        } else {
          Toast.show({
            type: 'error',
            text2: 'Unexpected response from server',
          });
        }
        setLoading(false);
      })
      .catch((err: string) => {
        setLoading(false);
        Toast.show({
          type: 'error',
          text2: err,
        });
      });
  };

  useEffect(() => {
    dispatch(setCode(''));
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomLoader visible={loading} />
      <Header />
      <Image
        source={require('../../../Assets/Images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Two-step authentication</Text>
        <Text style={styles.title1}>
          Enter the verification code sent to your email{' '}
          <Text style={styles.email}>{email}</Text>
        </Text>

        <OtpInputField
          onChange={(number: string) => dispatch(setCode(number))}
        />

        <Button
          text="Continue"
          customButtonStyles={styles.button}
          customTextStyles={styles.btnText}
          noShadow
          onPressHandler={() => {
            handleTwoStepAuthentication();
          }}
        />
        <Text
          style={[
            styles.timerText,
            { color: timer > 0 ? Colors.APP_COLOR : Colors.GRAY },
          ]}
        >
          {`Time : ${formatTime(timer)}`}
        </Text>

        <Text style={styles.text}>
          I didn't receive any code{' '}
          <TouchableWithoutFeedback disabled={timer > 0}>
            <Text
              style={[
                styles.resend,
                { color: timer > 0 ? Colors.GRAY : Colors.APP_COLOR },
              ]}
              onPress={() => {
                createOtp();
                setTimer(30);
              }}
            >
              Resend.
            </Text>
          </TouchableWithoutFeedback>
        </Text>
        <Text style={[styles.text, { marginTop: h(10) }]}>
          If you require any assistance, please feel free to{' '}
          <Text style={styles.resend}>contact us.</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default TwoStepVerifiction;
