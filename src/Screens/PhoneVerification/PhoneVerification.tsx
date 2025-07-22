import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  Image,
  Keyboard,
  Platform,
} from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import {
  formatPhoneNumber,
  useTypedNavigation,
} from '../../utils/Helper/Helper';
import Button from '../../Components/Button/Button';
import PhoneNumberInput from '../../Components/ PhoneNumberInput/ PhoneNumberInput';
import { ScrollView } from 'react-native';

const PhoneVerification: React.FC<any> = () => {
  const navigation = useTypedNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');

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
            <Text style={styles.heading}>Phone Verification</Text>
            <Text style={styles.description}>
              Please enter your phone number to receive a verification code.
            </Text>

            <PhoneNumberInput
              label="Phone Number"
              labelStyle={styles.label}
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(formatPhoneNumber(text))}
            />

            <Button
              text="Send Verification Code"
              noShadow
              customButtonStyles={styles.customButtonStyles}
              onPressHandler={() => {
                navigation.navigate('OtpPhoneVerify');
              }}
            />
            <Text style={styles.text}>
              © 2025 LifeRx Portal {`\n`} Secure verification system
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default PhoneVerification;
