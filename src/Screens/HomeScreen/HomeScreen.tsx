import React from 'react';
import { SafeAreaView, Text, View, Image, Alert } from 'react-native';
import styles from './style';
import DrawerHeaderBar from '../../Components/DrawerHeader/DrawerHeader';
import { useTypedNavigation } from '../../utils/Helper/Helper';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import CustomTextInput from '../../Components/TextInput/TextInput';
import Colors from '../../utils/Colors/Colors';

const HomeScreen: React.FC<any> = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainContainer}>
        <DrawerHeaderBar
          name="Suleman Amjad"
          country="USA"
          handleMenuPress={() =>
            navigation.dispatch(DrawerActions.openDrawer())
          }
        />

        <CustomTextInput
          customInputWrapper={styles.wrapper}
          customInputStyles={styles.inputStyle}
          placeholder="Search doctor..."
          placeholderTextColor={Colors.PLACEHOLDER}
          leftImage={require('../../Assets/Images/searchIcon.png')}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
