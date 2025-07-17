import React from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';

const PersonalInformation: React.FC<any> = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Personal Information" />
      <View style={styles.mainContainer}></View>
    </SafeAreaView>
  );
};
export default PersonalInformation;
