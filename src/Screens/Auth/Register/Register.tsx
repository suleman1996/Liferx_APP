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
import store, { RootState } from '../../../Store';
import {
  createToken,
  createUser,
  getUserData,
  setEmail,
  setError,
  setPassword,
} from './actions';
import Toast from 'react-native-toast-message';
import CustomLoader from '../../../Components/LoaderModal/LoaderModal';
import PasswordValidationFeedback from '../../../Components/PasswordValidationFeedback/PasswordValidationFeedback';
import Header from '../../../Components/Header/Header';
import {
  getSessionId,
  saveDecidingAnswers,
  setStartSession,
} from '../../DecidingQuestions/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register: React.FC<any> = ({ route }) => {
  const navigation = useTypedNavigation();
  const dispatch = useDispatch();
  const { serviceId } = useSelector((state: RootState) => state?.shopReducer);
  const userId = store.getState().registerReducer?.userData?.id;
  const { email, password, error } = useSelector(
    (state: RootState) => state.registerReducer,
  );
  const { decidingQuestions } = useSelector(
    (state: RootState) => state?.decidingQuestionAnswer,
  );
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

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
      .then(async (res: any) => {
        if (res?.payload?.status === 200) {
          const tokenBody = {
            username: email,
            password,
          };
          dispatch(createToken(tokenBody))
            .then(async (res: any) => {
              const token = res?.payload?.data?.token?.access;
              await AsyncStorage.setItem('token', token);
              const session_id = await fetchSessionID();
              if (!session_id) {
                return;
              }
              if (res?.payload?.status === 200) {
                dispatch(getUserData(res?.payload?.data?.user));
                const updatedSelectedAnswer =
                  store?.getState()?.decidingQuestionAnswer?.selectedAnswer?.[
                    userId
                  ]?.[serviceId];
                const updatedDecidingAnswers = {
                  answers: updatedSelectedAnswer?.map(
                    ({ serviceId, userId, ...rest }) => rest,
                  ),
                  session_id,
                };
                dispatch(saveDecidingAnswers(updatedDecidingAnswers))
                  .then((response: any) => {
                    if (response?.payload?.status === 200) {
                      Toast.show({
                        type: 'success',
                        text2: response?.payload?.data?.message,
                      });
                      navigation?.navigate('TwoStepVerifiction', { token });
                    }
                  })
                  .catch((err: string) => {
                    Toast.show({
                      type: 'error',
                      text2: err,
                    });
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
      .catch((err: string) => {
        setLoading(false);
        Toast.show({
          type: 'error',
          text2: err,
        });
      });
  };

  const fetchSessionID = async () => {
    const body = {
      questionnaire_id: decidingQuestions?.questionnaire_id,
    };
    try {
      const response = await dispatch(setStartSession(body));
      console.log(response, 'resssponseeee');
      if (response?.payload?.status === 200) {
        const id = response?.payload?.data?.session_id;
        dispatch(getSessionId(id));
        return id;
      }
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text2: error,
      });
    }
    return null;
  };

  useEffect(() => {
    dispatch(setEmail(''));
    dispatch(setPassword(''));
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomLoader visible={loading} />
      <Header />
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
