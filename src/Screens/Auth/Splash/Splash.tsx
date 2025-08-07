import React, { useEffect } from 'react';
import { ImageBackground, View } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store';

const Splash: React.FC<any> = ({ navigation }) => {
  const { userData } = useSelector(
    (state: RootState) => state?.registerReducer,
  );

  console.log(JSON.stringify(userData),'userdata splash');
  

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      const onBoard = await AsyncStorage.getItem('onBoard');

      console.log(onBoard,'onBoard');
      
      if (onBoard === 'true') {
        if (token) {
          navigation.replace('HomeScreen');
        } else {
          navigation.replace('Login');
        }
      } else {
        navigation.replace('Oboarding');
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
