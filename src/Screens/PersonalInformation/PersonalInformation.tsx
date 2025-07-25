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
import {
  ageValidation,
  h,
  useTypedNavigation,
} from '../../utils/Helper/Helper';
import Button from '../../Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import {
  setDob,
  setError,
  setFirstName,
  setGender,
  setLastName,
} from './actions';
import Toast from 'react-native-toast-message';
import CustomDropdown from '../../Components/CustomDropdown/CustomDropdown';
import { genderOptions } from '../../utils/Constants/Constants';

const PersonalInformation: React.FC<any> = () => {
  const dispatch = useDispatch();
  const navigation = useTypedNavigation();
  const { selectedState } = useSelector(
    (state: RootState) => state.selectYourState,
  );
  const { firstName, lastName, dateOfBirth, error, gender } = useSelector(
    (state: RootState) => state.personalInfoReducer,
  );
  const [search, setSearch] = useState('');
  // const [selectedState, setselectedState] = useState<any>(null);
  // const [selectedDate, setSelectedDate] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const personalInfoHandler = () => {
    if (!firstName) {
      dispatch(setError('firstName'));
      return;
    } else if (!lastName) {
      dispatch(setError('lastName'));
      return;
    } else if (!dateOfBirth) {
      dispatch(setError('dateOfBirth'));
      return;
    } else if (!ageValidation(dateOfBirth)) {
      Toast.show({
        type: 'error',
        text2: 'You must be at least 18 years old',
      });
      dispatch(setError('dateOfBirth'));
      return;
    } else if (!gender) {
      dispatch(setError('gender'));
      return;
    }
    navigation.navigate('PhoneVerification');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Personal Information" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 100}
      >
        <ScrollView
          contentContainerStyle={{
            paddingBottom: isDropdownOpen ? h(300) : h(60),
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.mainContainer}>
            <Text style={styles.heading}>Personal Information</Text>

            <CustomTextInput
              label="First Name"
              customLabelStyles={styles.customLabelStyles}
              value={firstName}
              customInputWrapper={[
                styles.customInputStyle,
                {
                  borderColor:
                    error === 'firstName'
                      ? Colors.error
                      : firstName?.length > 0
                      ? Colors.APP_COLOR
                      : Colors.GRAY,
                },
              ]}
              placeholder="Enter your first name"
              // customErrorStyles={styles.customErrorStyle}
              placeholderTextColor={
                error === 'firstName' ? Colors.error : Colors.APP_COLOR
              }
              selectionColor={Colors.APP_COLOR}
              containerStyle={styles.inputContainer}
              onChangeText={text => {
                dispatch(setFirstName(text));
                dispatch(setError(''));
              }}
            />
            <CustomTextInput
              label="Last Name"
              value={lastName}
              customLabelStyles={styles.customLabelStyles}
              customInputWrapper={[
                styles.customInputStyle,
                {
                  borderColor:
                    error === 'lastName'
                      ? Colors.error
                      : lastName?.length > 0
                      ? Colors.APP_COLOR
                      : Colors.GRAY,
                },
              ]}
              placeholder="Enter your last name"
              // customErrorStyles={styles.customErrorStyle}
              placeholderTextColor={
                error === 'lastName' ? Colors.error : Colors.APP_COLOR
              }
              selectionColor={Colors.APP_COLOR}
              onChangeText={text => {
                dispatch(setLastName(text));
                dispatch(setError(''));
              }}
            />

            <CustomDatePicker
              label="Date of Birth"
              customContainerStyle={styles.customContainerStyle}
              customLabelStyles={styles.customLabelStyles}
              customDatePickerInput={[
                styles.customDatePickerInput,
                {
                  borderColor:
                    error === 'dateOfBirth'
                      ? Colors.error
                      : dateOfBirth?.length > 0
                      ? Colors.APP_COLOR
                      : Colors.GRAY,
                },
              ]}
              customInputTextStyle={{
                color:
                  error === 'dateOfBirth' ? Colors.error : Colors.APP_COLOR,
              }}
              value={dateOfBirth}
              onChange={text => {
                dispatch(setDob(text));
                dispatch(setError(''));
              }}
              minimumDate={new Date(1900, 0, 1)}
              maximumDate={new Date()}
            />
            <CustomDropdown
              label="Gender assigned at birth"
              customLabelStyles={[
                styles.customLabelStyles,
                { marginTop: h(15) },
              ]}
              items={genderOptions}
              selectedValue={gender}
              onChange={text => {
                dispatch(setGender(text));
                dispatch(setError(''))
              }}
              placeholder="Select Gender"
              style={{
                marginTop: 0,
                borderColor:
                  error === 'gender'
                    ? Colors.error
                    : gender?.length > 0
                    ? Colors.APP_COLOR
                    : Colors.GRAY,
              }}
              placeholderStyle={{
                color: error === 'gender' ? Colors.error : Colors.APP_COLOR,
              }}
            />
            <Text style={[styles.heading, { marginTop: h(30) }]}>
              Shipping Address
            </Text>

            <SearchDropDown
              placeholder="Enter your street address"
              flatlistData={stateArray.filter(data =>
                data?.name?.toLowerCase().includes(search.toLowerCase()),
              )}
              // setSelectedItem={setselectedState}
              // selectedItem={selectedState}
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
              onToggleDropdown={setIsDropdownOpen}
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
              value={selectedState?.name}
              placeholderTextColor={Colors.APP_COLOR}
              selectionColor={Colors.APP_COLOR}
              editable={false}
            />
            <Button
              text="Continue"
              onPressHandler={() => {
                personalInfoHandler();
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default PersonalInformation;
