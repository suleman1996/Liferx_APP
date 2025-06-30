import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import CustomTextInput from '../../Components/TextInput/TextInput';
import Colors from '../../utils/Colors/Colors';
import Button from '../../Components/Button/Button';
import CustomDialog from '../../Components/CustomDialog/CustomDialog';
import Toast from 'react-native-toast-message';

const Login: React.FC<any> = () => {
  const [email, setEmail] = useState('');
  const [accountName, setAccountName] = useState('');
  const [openPopUp, setOpenPopUp] = useState(false);
  const [error, setError] = useState('');


  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title={`Join Founder's Club`} />

      <CustomDialog visible={openPopUp} onDismiss={() => setOpenPopUp(false)}>
        <Image
          source={require('../../Assets/Images/Thanks.png')}
          style={styles.thanksLogo}
        />
        <Text style={styles.thanksText}>Thank You!</Text>
        <Text style={styles.description}>
          Thank you for joining the Founders Club!
        </Text>
        <Text style={styles.description2}>
          Please check your email for the next steps in the joining process.
        </Text>
      </CustomDialog>

      <View style={styles.mainContainer}>
        <CustomTextInput
          label="Email"
          customInputStyles={[
            styles.customInputStyle,
            {
              borderColor: email?.length > 0 ? Colors?.APP_COLOR : Colors.GRAY,
            },
          ]}
          customLabelStyles={styles.customLabelStyle}
          placeholder="Email"
          value={email}
          onChangeText={text => {
            setEmail(text);
            setError('');
          }}
          error={error === 'email' ? 'Please enter your email' : ''}
          customErrorStyles={styles.customErrorStyle}
        />

        <CustomTextInput
          label="Daraz Account Name"
          customInputStyles={[
            styles.customInputStyle,
            {
              borderColor:
                accountName?.length > 0 ? Colors?.APP_COLOR : Colors.GRAY,
            },
          ]}
          customLabelStyles={styles.customLabelStyle}
          placeholder="Daraz Account Name"
          value={accountName}
          onChangeText={text => {
            setAccountName(text);
            setError('');
          }}
          error={
            error === 'accountName' ? 'Please enter your account name' : ''
          }
          customErrorStyles={styles.customErrorStyle}
        />

        <Button
          text="Join Founder's Club"
          customButtonStyles={styles.button}
          customTextStyles={[styles.googleText, { color: Colors.WHITE }]}
          noShadow
          onPressHandler={() => {
            if (!email) {
              setError('email');
              return;
            } else if (!accountName) {
              setError('accountName');
              return;
            }
            if (email && accountName) {
              // setOpenPopUp(true);
              Toast.show({
                type: 'info',
                text1: 'Coming Soon',
              });
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Login;
