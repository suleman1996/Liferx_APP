import React, { useState } from 'react';
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
import { h, useTypedNavigation } from '../../../utils/Helper/Helper';
import EyeIcon from 'react-native-vector-icons/Entypo';

const Register: React.FC<any> = () => {
  const navigation = useTypedNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
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
                    setPassword(text);
                    setError('');
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
                  navigation.navigate('TwoStepVerifiction');
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
