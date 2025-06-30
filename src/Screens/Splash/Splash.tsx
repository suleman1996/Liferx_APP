import React, { useEffect } from 'react';
import { Image, SafeAreaView } from 'react-native';
import styles from './style';

const Splash: React.FC<any> = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation?.replace('HomeScreen');
    }, 2000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image
        source={require('../../Assets/Images/Logo.png')}
        style={styles.image}
      />
    </SafeAreaView>
  );
};
export default Splash;
