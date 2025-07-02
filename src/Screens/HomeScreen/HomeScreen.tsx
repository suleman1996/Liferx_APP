import React from 'react';
import { SafeAreaView, Text, View, Image, Alert } from 'react-native';
import styles from './style';
import DrawerHeaderBar from '../../Components/DrawerHeader/DrawerHeader';

const HomeScreen: React.FC<any> = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainContainer}>
        <DrawerHeaderBar
          name="Suleman Amjad"
          country="USA"
          handleMenuPress={() => Alert.alert('djkjdkjdkjd')}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
