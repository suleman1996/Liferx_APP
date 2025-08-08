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
  skipOnBoarding,
  usePreviousRouteName,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createToken, getToken, getUserData } from '../Register/actions';
import { clearDecidingAnswer } from '../../DecidingQuestions/actions';
import LogoutModal from '../../../Components/LogoutModal/LogoutModal';
import { setOnBoarding } from '../Onboarding/action';

const TwoStepVerifiction: React.FC<any> = ({ route }) => {
  const prevRouteName = usePreviousRouteName();
  const navigation = useTypedNavigation();
  const { token } = route?.params || {};
  const {fromHome} = route?.params || {};
  const { email, password } = useSelector(
    (state: RootState) => state?.registerReducer,
  );
  const { email: loginEmail } = useSelector((state: RootState) => state?.login);
  const { code } = useSelector(
    (state: RootState) => state?.twoStepVerification,
  );
  ``;
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(30);
  const [loading, setLoading] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

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
        if (res?.payload?.status === 200) {
          Toast.show({
            type: 'success',
            text2: res?.payload?.data,
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


  console.log(fromHome);
  

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
          dispatch(
            createToken({
              username: email || loginEmail,
              password,
            }),
          ).then((res: any) => {
            console.log(res, 'normal res');
            const user = res?.payload?.data?.user;
            dispatch(getUserData(user));
            if (
              token &&
              user?.is_profile_completed === false &&
              user?.is_email_verified === true &&
              fromHome === false
            ) {
              console.log('else if matched');
              dispatch(clearDecidingAnswer());
              navigation.navigate('ShopNow', { fromHome });
            } else if (token && user?.is_email_verified === true) {
              console.log('first if matched');
              skipOnBoarding(dispatch);
              navigation.navigate('SelectState');
            }

            dispatch(setCode(''));
          });
          Toast.show({
            type: 'success',
            text2: res?.payload?.data,
          });
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

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(getToken(''));
    dispatch(clearDecidingAnswer());
    setShowLogoutModal(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'BottomTab' }],
    });
  };

  useEffect(() => {
    dispatch(setCode(''));
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomLoader visible={loading} />
      <Header
      // onBackPress={() => {
      //   if (prevRouteName === 'Login' && token) {
      //     setShowLogoutModal(true);
      //   }
      // }}
      />

      <LogoutModal
        visible={showLogoutModal}
        onCancel={() => setShowLogoutModal(false)}
        onLogout={handleLogout}
      />
      <Image
        source={require('../../../Assets/Images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Two-step authentication</Text>
        <Text style={styles.title1}>
          Enter the verification code sent to your email{' '}
          <Text style={styles.email}>{email || loginEmail}</Text>
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
