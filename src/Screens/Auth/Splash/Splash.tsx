import React, { useEffect } from 'react';
import { ImageBackground, View } from 'react-native';
import styles from './style';

const Splash: React.FC<any> = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation?.replace('Login');
    }, 2000);
    return () => clearTimeout(timeout);
  }, [navigation]);

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
