import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import Colors from '../../utils/Colors/Colors';
import CustomTextInput from '../../Components/TextInput/TextInput';
import CustomDatePicker from '../../Components/CustomDatePicker/CustomDatePicker';
import SearchDropDown from '../../Components/SearchDropDown/SearchDropDown';
import { h } from '../../utils/Helper/Helper';

const PersonalInformation: React.FC<any> = () => {
  const [search, setSearch] = useState('');
  const [selectedState, setselectedState] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('');

  const stateArray = [
    { id: 1, name: 'State 1' },
    { id: 2, name: 'State 2' },
    { id: 3, name: 'State 3' },
    { id: 4, name: 'State 4' },
    { id: 5, name: 'State 5' },
    { id: 6, name: 'State 6' },
    { id: 7, name: 'State 7' },
    { id: 8, name: 'State 8' },
    { id: 9, name: 'State 9' },
    { id: 10, name: 'State 10' },
  ];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Personal Information" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 100}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.mainContainer}>
            <Text style={styles.heading}>Personal Information</Text>

            <CustomTextInput
              label="First Name"
              customLabelStyles={styles.customLabelStyles}
              customInputWrapper={[
                styles.customInputStyle,
                {
                  borderColor: Colors.GRAY,
                },
              ]}
              placeholder="Enter your first name"
              // customErrorStyles={styles.customErrorStyle}
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
                  borderColor: Colors.GRAY,
                },
              ]}
              placeholder="Enter your first name"
              // customErrorStyles={styles.customErrorStyle}
              placeholderTextColor={Colors.APP_COLOR}
              selectionColor={Colors.APP_COLOR}
            />

            <CustomDatePicker
              label="Date of Birth"
              customContainerStyle={styles.customContainerStyle}
              customLabelStyles={styles.customLabelStyles}
              customDatePickerInput={styles.customDatePickerInput}
              value={selectedDate}
              onChange={setSelectedDate}
              minimumDate={new Date(1900, 0, 1)}
              maximumDate={new Date()}
            />
            <Text style={[styles.heading, { marginTop: h(30) }]}>
              Shipping Address
            </Text>

            <SearchDropDown
              placeholder="Enter your street address"
              flatlistData={stateArray.filter(data =>
                data?.name?.toLowerCase().includes(search.toLowerCase()),
              )}
              setSelectedItem={setselectedState}
              selectedItem={selectedState}
              setSearch={setSearch}
              search={search}
              customSearchDropDownContainer={
                styles.customSearchDropDownContainer
              }
              label="Street Address"
              customLabelStyles={[
                styles.customLabelStyles,
                { paddingTop: h(25) },
              ]}
              customContainerStyle={styles.customAddressContainerStyle}
            />
            <CustomTextInput
              label="State"
              customLabelStyles={[
                styles.customLabelStyles,
                { paddingTop: h(20) },
              ]}
              customInputWrapper={[
                styles.customInputStyle,
                {
                  borderColor: Colors.GRAY,
                },
              ]}
              placeholder="State 1"
              placeholderTextColor={Colors.APP_COLOR}
              selectionColor={Colors.APP_COLOR}
              editable={false}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default PersonalInformation;
