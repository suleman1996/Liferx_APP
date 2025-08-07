import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  Alert,
} from 'react-native';
import styles from './style';
import CustomTextInput from '../../../Components/TextInput/TextInput';
import Colors from '../../../utils/Colors/Colors';
import Button from '../../../Components/Button/Button';
import { FONTS } from '../../../Assets/Fonts/Fonts';
import { h, useTypedNavigation } from '../../../utils/Helper/Helper';
import { useDispatch, useSelector } from 'react-redux';
import store, { persistor, RootState } from '../../../Store';
import { createLogin, setEmail, setError, setPassword } from './actions';
import EyeIcon from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-toast-message';
import CustomLoader from '../../../Components/LoaderModal/LoaderModal';
import {
  getSessionId,
  saveDecidingAnswers,
  setStartSession,
} from '../../DecidingQuestions/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getToken, getUserData } from '../Register/actions';
import Header from '../../../Components/Header/Header';

const Login: React.FC<any> = ({route}) => {
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { userData, token } = useSelector(
    (state: RootState) => state?.registerReducer,
  );
  const [loading, setLoading] = useState(false);
  const { serviceId } = useSelector((state: RootState) => state?.shopReducer);
  const userId = store.getState().registerReducer?.userData?.id;
  const { email, password, error } = useSelector(
    (state: RootState) => state?.login,
  );
  const { decidingQuestions } = useSelector(
    (state: RootState) => state?.decidingQuestionAnswer,
  );
  const navigation = useTypedNavigation();
  const {fromHome} = route?.params || {};

  const addDecidingAnswers = async () => {
    const session_id = await fetchSessionID();
    if (!session_id) {
      return;
    }
    const updatedSelectedAnswer =
      store?.getState()?.decidingQuestionAnswer?.selectedAnswer?.[userId]?.[
        serviceId
      ];
    const updatedDecidingAnswers = {
      answers: updatedSelectedAnswer?.map(
        ({ serviceId, userId, ...rest }) => rest,
      ),
      session_id,
    };    
    dispatch(saveDecidingAnswers(updatedDecidingAnswers))
      .then((response: any) => {
        if (response?.payload?.status === 200) {
          console.log(response, 'save answers of deciding');
          Toast.show({
            type: 'success',
            text2: response?.payload?.data?.message,
          });
        }
      })
      .catch((err: string) => {
        Toast.show({
          type: 'error',
          text2: err,
        });
      });
  };

  const handleLogin = () => {
    if (!email) {
      dispatch(setError('email'));
      return;
    } else if (!password) {
      dispatch(setError('password'));
      return;
    }
    setLoading(true);
    const body = {
      username: email,
      password,
    };
    dispatch(createLogin(body))
      .then(async (res: any) => {
        const response = res?.payload;
        const token = response?.data?.token?.access;
        const user = response?.data?.user;
        await AsyncStorage.setItem('token', token);
        dispatch(getToken(token));
        dispatch(getUserData(user));
        if (response?.status === 200) {
          if (
            token &&
            user?.is_email_verified === true &&
            user?.is_profile_completed === true
          ) {
            Alert.alert('comming soon');
            //  navigation.reset({
            //     index: 0,
            //     routes: [{ name: 'DrawerStack' }],
            //   });
          } else if (
            token &&
            user?.is_email_verified === true &&
            user?.is_profile_completed === false
          ) {
            addDecidingAnswers();
            navigation.navigate('SelectState');
          } else if (
            token &&
            user?.is_email_verified === false &&
            user?.is_profile_completed === false
          ) {
            addDecidingAnswers();
            navigation.navigate('TwoStepVerifiction', { token });
          }
          // navigation.navigate('BottomTab');
          Toast.show({
            type: 'success',
            text2: 'Login successfully',
          });
        } else {
          Toast.show({
            type: 'error',
            text2: 'Unexpected response from server',
          });
        }
        setLoading(false);
      })
      .catch((error: any) => {
        setLoading(false);
        Toast.show({
          type: 'error',
          text2: error,
        });
      });
  };

  const fetchSessionID = async () => {
    const body = {
      questionnaire_id: decidingQuestions?.questionnaire_id,
    };
    try {
      const response = await dispatch(setStartSession(body));
      console.log(response, 'fetch session');
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

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header/>
      <CustomLoader visible={loading} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            source={require('../../../Assets/Images/logo.png')}
            style={styles.logo}
          />
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Hi, Welcome Back!</Text>
            <Text style={styles.title1}>Hope you’re doing fine.</Text>

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
              containerStyle={styles.inputContainer}
            />

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

            <Button
              text="Sign In"
              customButtonStyles={styles.button}
              customTextStyles={styles.btnText}
              noShadow
              onPressHandler={() => {
                handleLogin();
              }}
            />

            {fromHome && (
              <Text style={styles.text}>
                If you don't have an account?{' '}
                <Text
                  style={[styles.text, { fontFamily: FONTS.MONTSERRAT_BOLD }]}
                  onPress={() => {
                    dispatch(setEmail(''));
                    dispatch(setPassword(''));
                    dispatch(setError(''));
                    navigation.navigate('Register');
                  }}
                >
                  Sign up
                </Text>
              </Text>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Login;
