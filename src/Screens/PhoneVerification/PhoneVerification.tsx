import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { sendPhoneNumber, setError, setPhoneNumber } from './actions';
import Colors from '../../utils/Colors/Colors';
import Toast from 'react-native-toast-message';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';

const PhoneVerification: React.FC<any> = () => {
  const userId = useSelector((state: RootState) => state.login?.userData?.id);
  const phoneNumber = useSelector(
    (state: RootState) => state.phoneVerifyReducer.phoneNumber?.[userId] || '',
  );
  const { error } = useSelector((state: RootState) => state.phoneVerifyReducer);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useTypedNavigation();

  const handleVerification = () => {
    if (!phoneNumber) {
      dispatch(setError('phoneNumber'));
      Toast.show({
        type: 'error',
        text2: 'Phone number must be required.',
      });
      return;
    } else if (phoneNumber?.length < 10) {
      Toast.show({
        type: 'error',
        text2: 'Phone number is in correct',
      });
      return;
    }
    setLoading(true);
    dispatch(sendPhoneNumber(phoneNumber))
      .then((response: any) => {
        if (response?.value?.status === 200) {
          Toast.show({
            type: 'success',
            text2: response?.value?.data,
          });
          navigation.navigate('OtpPhoneVerify');
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
            <Text style={styles.heading}>Phone Verification</Text>
            <Text style={styles.description}>
              Please enter your phone number to receive a verification code.
            </Text>

            <PhoneNumberInput
              label="Phone Number"
              labelStyle={styles.label}
              value={formatPhoneNumber(phoneNumber || '')}
              onChangeText={text => {
                const raw = text?.replace(/\D/g, '');
                dispatch(setPhoneNumber(raw, userId));
                dispatch(setError(''));
              }}
              containerStyle={{
                borderColor:
                  error === 'phoneNumber' ? Colors.error : Colors.APP_COLOR,
              }}
              placeholderTextColor={
                error === 'phoneNumber' ? Colors.error : Colors.GRAY
              }
            />

            <Button
              text="Send Verification Code"
              noShadow
              customButtonStyles={styles.customButtonStyles}
              onPressHandler={() => {
                handleVerification();
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
