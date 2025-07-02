import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import styles from './style';
import CustomTextInput from '../../../Components/TextInput/TextInput';
import Colors from '../../../utils/Colors/Colors';
import Button from '../../../Components/Button/Button';
import { FONTS } from '../../../Assets/Fonts/Fonts';
import { h, useTypedNavigation } from '../../../utils/Helper/Helper';

const Register: React.FC<any> = () => {
  const navigation = useTypedNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image
        source={require('../../../Assets/Images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          Register Yourself for eligibility of treatment
        </Text>
        <Text style={styles.title1}>
          See your personalized treatment options. Private and 100% online.ent
        </Text>

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
            setEmail(text);
            setError('');
          }}
          customErrorStyles={styles.customErrorStyle}
          placeholderTextColor={
            error === 'email' ? Colors.error : Colors.APP_COLOR
          }
          selectionColor={Colors.APP_COLOR}
        />

        {email?.length > 0 && (
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
              setPassword(text);
              setError('');
            }}
            customErrorStyles={styles.customErrorStyle}
            placeholderTextColor={
              error === 'password' ? Colors.error : Colors.APP_COLOR
            }
            selectionColor={Colors.APP_COLOR}
          />
        )}

        <Button
          text="Sign Up"
          customButtonStyles={styles.button}
          customTextStyles={styles.btnText}
          noShadow
          onPressHandler={() => {
            if (!email) {
              setError('email');
              return;
            } else if (!password) {
              setError('password');
              return;
            }
            if (email && password) {
              navigation.navigate('TwoStepVerifiction');
            }
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
    </SafeAreaView>
  );
};
export default Register;
