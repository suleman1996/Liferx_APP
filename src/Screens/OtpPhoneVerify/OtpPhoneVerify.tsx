import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  Image,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import { ScrollView } from 'react-native';
import OtpInputField from '../../Components/Otp/Otp';
import Button from '../../Components/Button/Button';
import {
  formatPhoneNumber,
  formatTime,
  useTypedNavigation,
} from '../../utils/Helper/Helper';
import Colors from '../../utils/Colors/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { sendPhoneOtp, setVerificationCode } from './action';
import Toast from 'react-native-toast-message';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';
import { verifyOtp } from '../Auth/2StepVerification/actions';

const OtpPhoneVerify: React.FC<any> = () => {
  const dispatch = useDispatch();
  const navigation = useTypedNavigation();
  const userId = useSelector((state: RootState) => state.login?.userData?.id);
  const verificationCode = useSelector(
    (state: RootState) =>
      state.verificationCodeReducer.verificationCode?.[userId] || '',
  );
  const phoneNumber = useSelector(
    (state: RootState) => state.phoneVerifyReducer.phoneNumber?.[userId] || '',
  );
  const [timer, setTimer] = useState(30);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer === 0) return;
    const time = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    return () => clearInterval(time);
  }, [timer]);

  useEffect(() => {
    fetchOtpCode();
    dispatch(setVerificationCode('', userId));
  }, []);

  const fetchOtpCode = async () => {
    const body = {
      phone: phoneNumber,
    };
    setLoading(true);
    await dispatch(sendPhoneOtp(body))
      .then((res: any) => {
        if (res?.value?.status === 200) {
          Toast.show({
            type: 'success',
            text2: res?.value?.data,
          });
        }
        setLoading(false);
      })
      .catch((error: string) => {
        setLoading(false);
        Toast.show({
          type: 'error',
          text2: error,
        });
      });
  };

  const verificationCodeHandler = () => {
    if (!verificationCode || verificationCode.length !== 6) {
      Toast.show({
        type: 'error',
        text2: 'Please enter the complete 6-digit OTP.',
      });
      return;
    }
    setLoading(true);
    const body = {
      otp_code: verificationCode,
    };
    dispatch(verifyOtp(body, ''))
      .then((res: any) => {
        if (res?.value?.status === 200) {
          Toast.show({
            type: 'success',
            text2: res?.value?.data,
          });
          navigation.navigate('SuggestMedicine');
          dispatch(setVerificationCode('', ''));
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

  return (
    <SafeAreaView
      style={styles.safeAreaView}
      onTouchStart={() => Keyboard.dismiss()}
    >
      <CustomLoader visible={loading} />
      <Header title="Phone Verification" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 100}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.mainContainer}>
            <Image
              source={require('../../Assets/Images/logo.png')}
              style={styles.logo}
            />
            <Text style={styles.heading}>Enter Verification Code</Text>
            <Text style={styles.description}>
              We've sent a 6-digit code to{' '}
              <Text style={styles.givenNumber}>
                {formatPhoneNumber(phoneNumber)}
              </Text>
            </Text>

            <OtpInputField
              onChange={(number: string) => {
                dispatch(setVerificationCode(number, userId));
              }}
              customFocusColor={Colors.APP_COLOR}
            />

            <Button
              text="Verify Code"
              noShadow
              customButtonStyles={styles.customButtonStyles}
              onPressHandler={() => verificationCodeHandler()}
            />

            <Text
              style={[
                styles.timerText,
                { color: timer > 0 ? Colors.APP_COLOR : Colors.GRAY },
              ]}
            >
              {`Time : ${formatTime(timer)}`}
            </Text>

            <Text
              style={styles.phoneNumberText}
              onPress={() => navigation.goBack()}
            >
              Change Phone Number
            </Text>

            <Text style={styles.text}>
              Didn't receive the code?{' '}
              <TouchableWithoutFeedback
                disabled={timer > 0}
                onPress={() => fetchOtpCode()}
              >
                <Text
                  style={[
                    styles.resend,
                    { color: timer > 0 ? Colors.GRAY : Colors.APP_COLOR },
                  ]}
                  onPress={() => {
                    setTimer(30);
                  }}
                >
                  Send Again.
                </Text>
              </TouchableWithoutFeedback>
            </Text>

            <Text style={styles.text2}>
              © 2025 LifeRx Portal {`\n`} Secure verification system
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default OtpPhoneVerify;
