import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import Header from '../../Components/Header/Header';

const SelectState: React.FC<any> = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />
      <View style={styles.mainContainer}></View>
    </SafeAreaView>
  );
};
export default SelectState;
