import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import Header from '../../../Components/Header/Header';
import { View } from 'react-native';
import CustomTextInput from '../../../Components/TextInput/TextInput';
import { h, useTypedNavigation } from '../../../utils/Helper/Helper';
import Colors from '../../../utils/Colors/Colors';
import CustomDropdown from '../../../Components/CustomDropdown/CustomDropdown';
import CustomDatePicker from '../../../Components/CustomDatePicker/CustomDatePicker';
import moment from 'moment';
import Button from '../../../Components/Button/Button';

const UpdateAccountDetail: React.FC<any> = () => {
  const navigation = useTypedNavigation();
  const [selectedDate, setSelectedDate] = useState('');
  const [gender, setGender] = useState<string | null>(null);

  const fruitOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
  ];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Update Account" />
      <View style={styles.mainContainer}>
        <CustomTextInput
          label="First Name"
          customLabelStyles={styles.customLabelStyles}
          customInputWrapper={[
            styles.customInputStyle,
            {
              marginTop: h(5),
            },
          ]}
          placeholder="Enter your first name"
          placeholderTextColor={Colors.APP_COLOR}
          selectionColor={Colors.APP_COLOR}
          containerStyle={styles.inputContainer}
        />
        <CustomTextInput
          label="Last Name"
          customLabelStyles={styles.customLabelStyles}
          customInputWrapper={[
            styles.customInputStyle,
            {
              marginTop: h(5),
            },
          ]}
          placeholder="Enter your last name"
          placeholderTextColor={Colors.APP_COLOR}
          selectionColor={Colors.APP_COLOR}
          containerStyle={[styles.inputContainer, { marginTop: 0 }]}
        />
        <CustomDropdown
          label="Gender"
          customLabelStyles={styles.customLabelStyles}
          items={fruitOptions}
          selectedValue={gender}
          onChange={setGender}
          placeholder="Select Gender"
        />
        <CustomDatePicker
          label="Date of Birth"
          customLabelStyles={styles.customLabelStyles}
          value={selectedDate}
          onChange={setSelectedDate}
          minimumDate={new Date(1900, 0, 1)}
          maximumDate={new Date()}
        />

        <Button
          text="Save"
          customButtonStyles={styles.customButtonStyles}
          customTextStyles={styles.customTextStyles}
          noShadow
        />
      </View>
    </SafeAreaView>
  );
};
export default UpdateAccountDetail;
