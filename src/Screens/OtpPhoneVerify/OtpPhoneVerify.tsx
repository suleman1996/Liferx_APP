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
import { formatTime, useTypedNavigation } from '../../utils/Helper/Helper';
import { Pressable } from 'react-native';
import Colors from '../../utils/Colors/Colors';

const OtpPhoneVerify: React.FC<any> = () => {
  const navigation = useTypedNavigation();
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return;
    const time = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    return () => clearInterval(time);
  }, [timer]);

  return (
    <SafeAreaView
      style={styles.safeAreaView}
      onTouchStart={() => Keyboard.dismiss()}
    >
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
              <Text style={styles.givenNumber}>(121) 212-1212</Text>
            </Text>

            <OtpInputField onChange={(number: string) => setCode(number)} />

            <Button
              text="Verify Code"
              noShadow
              customButtonStyles={styles.customButtonStyles}
              onPressHandler={() => navigation.navigate('SuggestMedicine')}
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
