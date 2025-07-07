import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import styles from './style';
import { formatTime, h, useTypedNavigation } from '../../../utils/Helper/Helper';
import OtpInputField from '../../../Components/Otp/Otp';
import Button from '../../../Components/Button/Button';
import Colors from '../../../utils/Colors/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../Store';
import { setCode } from './actions';

const TwoStepVerifiction: React.FC<any> = () => {
  const { code } = useSelector(
    (state: RootState) => state?.twoStepVerification,
  );
  ``;
  const navigation = useTypedNavigation();
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return;
    const time = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    return () => clearInterval(time);
  }, [timer]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image
        source={require('../../../Assets/Images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Two-step authentication</Text>
        <Text style={styles.title1}>
          Enter the verification code sent to your email{' '}
          <Text style={styles.email}>suleman@codekhalaq.com</Text>
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
             navigation.navigate('Login')
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
