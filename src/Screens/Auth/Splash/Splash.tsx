import React, { useEffect } from 'react';
import { ImageBackground, View } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash: React.FC<any> = ({ navigation }) => {
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.replace('BottomTab');
      } else {
        navigation.replace('Login');
      }
    };
    const timeout = setTimeout(checkToken, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.safeAreaView}>
      <ImageBackground
        source={require('../../../Assets/Images/Splash.png')}
        style={styles.image}
      />
    </View>
  );
};
export default Splash;
