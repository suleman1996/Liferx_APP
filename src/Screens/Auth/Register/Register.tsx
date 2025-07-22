import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from './style';
import CustomTextInput from '../../../Components/TextInput/TextInput';
import Colors from '../../../utils/Colors/Colors';
import Button from '../../../Components/Button/Button';
import { FONTS } from '../../../Assets/Fonts/Fonts';
import {
  getPasswordValidation,
  h,
  useTypedNavigation,
} from '../../../utils/Helper/Helper';
import EyeIcon from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../Store';
import {
  createToken,
  createUser,
  setEmail,
  setError,
  setPassword,
  setToken,
} from './actions';
import Toast from 'react-native-toast-message';
import CustomLoader from '../../../Components/LoaderModal/LoaderModal';
import PasswordValidationFeedback from '../../../Components/PasswordValidationFeedback/PasswordValidationFeedback';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register: React.FC<any> = () => {
  const navigation = useTypedNavigation();
  const dispatch = useDispatch();
  const { email, password, error } = useSelector(
    (state: RootState) => state.registerReducer,
  );
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const [loading, setLoading] = useState(false);

  const createUserHandler = () => {
    const isValidPassword = Object.values(passwordValidation).every(Boolean);
    if (!email) {
      dispatch(setError('email'));
      return;
    } else if (!password) {
      dispatch(setError('password'));
      return;
    }
    if (!isValidPassword) {
      Toast.show({
        type: 'error',
        text2:
          'Please ensure your password meets all the security requirements.',
      });
      return;
    }
    setLoading(true);
    const body = { email, password };
    dispatch(createUser(body))
      .payload.then(res => {
        if (res?.status === 200) {
          const tokenBody = {
            username: email,
            password,
          };
          dispatch(createToken(tokenBody))
            .payload.then(async res => {
              const token = res?.data?.token?.access;
              if (token) {
                await AsyncStorage.setItem('token', token);
                dispatch(setToken(token));
              }
            })
            .catch(error => {
              console.log(error, 'token error');
            });

          navigation.navigate('TwoStepVerifiction');
          Toast.show({
            type: 'success',
            text2: 'Your account is registered',
          });
        } else {
          Toast.show({
            type: 'error',
            text2: 'Unexpected response from server',
          });
        }
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        Toast.show({
          type: 'error',
          text2: err,
        });
      });
  };

  useEffect(() => {
    dispatch(setEmail(''));
    dispatch(setPassword(''));
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomLoader visible={loading} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <Image
              source={require('../../../Assets/Images/logo.png')}
              style={styles.logo}
            />
            <View style={styles.mainContainer}>
              <Text style={styles.title}>
                Register Yourself for eligibility of treatment
              </Text>
              <Text style={styles.title1}>
                See your personalized treatment options. Private and 100%
                online.ent
              </Text>

              <CustomTextInput
                customInputWrapper={[
                  styles.customInputStyle,
                  {
                    borderColor:
                      error === 'email'
                        ? Colors.error
                        : email?.length > 0
                        ? Colors.APP_COLOR
                        : Colors.GRAY,
                  },
                ]}
                containerStyle={styles.inputContainer}
                placeholder="Enter your email address"
                value={email}
                onChangeText={text => {
                  dispatch(setEmail(text));
                  dispatch(setError(''));
                }}
                customErrorStyles={styles.customErrorStyle}
                placeholderTextColor={
                  error === 'email' ? Colors.error : Colors.APP_COLOR
                }
                selectionColor={Colors.APP_COLOR}
              />

              {email?.length > 0 && (
                <CustomTextInput
                  customInputWrapper={[
                    styles.customInputStyle,
                    {
                      borderColor:
                        error === 'password'
                          ? Colors.error
                          : password?.length > 0
                          ? Colors.APP_COLOR
                          : Colors.GRAY,
                      marginTop: h(5),
                    },
                  ]}
                  placeholder="Enter your Password"
                  value={password}
                  onChangeText={text => {
                    dispatch(setPassword(text));
                    setPasswordValidation(getPasswordValidation(text));
                    dispatch(setError(''));
                  }}
                  customErrorStyles={styles.customErrorStyle}
                  placeholderTextColor={
                    error === 'password' ? Colors.error : Colors.APP_COLOR
                  }
                  selectionColor={Colors.APP_COLOR}
                  secureTextEntry={!isPasswordVisible}
                  rightImage={
                    <EyeIcon
                      name={isPasswordVisible ? 'eye-with-line' : 'eye'}
                      size={20}
                      color={Colors.APP_COLOR}
                      style={styles.eyeIcon}
                      onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    />
                  }
                />
              )}

              {password?.length > 0 && (
                <PasswordValidationFeedback validation={passwordValidation} />
              )}

              <Button
                text="Sign Up"
                customButtonStyles={styles.button}
                customTextStyles={styles.btnText}
                noShadow
                onPressHandler={() => {
                  createUserHandler();
                }}
              />

              <Text style={styles.text}>
                Already have an account?{' '}
                <Text
                  style={[styles.text, { fontFamily: FONTS.MONTSERRAT_BOLD }]}
                  onPress={() => navigation.navigate('Login')}
                >
                  Log in
                </Text>
              </Text>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Register;
