import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import styles from './style';
import CustomTextInput from '../../../Components/TextInput/TextInput';
import Colors from '../../../utils/Colors/Colors';
import Button from '../../../Components/Button/Button';
import { FONTS } from '../../../Assets/Fonts/Fonts';
import { h, useTypedNavigation } from '../../../utils/Helper/Helper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../Store';
import { setEmail, setError, setPassword } from './actions';

const Login: React.FC<any> = () => {
  const dispatch = useDispatch();
  const { email, password, error } = useSelector(
    (state: RootState) => state?.login,
  );
  const navigation = useTypedNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image
        source={require('../../../Assets/Images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Hi, Welcome Back!</Text>
        <Text style={styles.title1}>Hope you’re doing fine.</Text>

        <CustomTextInput
          customInputStyles={[
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
        />

        <CustomTextInput
          customInputStyles={[
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
        />

        <Button
          text="Sign In"
          customButtonStyles={styles.button}
          customTextStyles={styles.btnText}
          noShadow
          onPressHandler={() => {
            if (!email) {
              dispatch(setError('email'));
              return;
            } else if (!password) {
              dispatch(setError('password'));
              return;
            }
          }}
        />

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
      </View>
    </SafeAreaView>
  );
};
export default Login;
