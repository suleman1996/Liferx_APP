import React, { useEffect, useState } from 'react';
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
import {
  ageValidation,
  h,
  useTypedNavigation,
} from '../../utils/Helper/Helper';
import Button from '../../Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import {
  addUserDetails,
  getAddress,
  getAddressList,
  getUserData,
  getUserDetails,
  setAddress,
  setDob,
  setError,
  setFirstName,
  setGender,
  setLastName,
} from './actions';
import Toast from 'react-native-toast-message';
import CustomDropdown from '../../Components/CustomDropdown/CustomDropdown';
import {
  genderOptions,
  stateAbbreviations,
} from '../../utils/Constants/Constants';
import StreetAddressDropdown from '../../Components/StreetAddressDropdown/StreetAddressDropdown';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';

const PersonalInformation: React.FC<any> = () => {
  const dispatch = useDispatch();
  const navigation = useTypedNavigation();
  const { userDetail } = useSelector(
    (state: RootState) => state.personalInfoReducer,
  );
  const userId = useSelector(
    (state: RootState) => state.registerReducer?.userData?.data?.id,
  );  
  const { error, addressListing } = useSelector(
    (state: RootState) => state?.personalInfoReducer,
  );
  const selectedState = useSelector(
    (state: RootState) => state.selectYourState?.selectedState?.[userId],
  );
  const personalInfo = useSelector((state: RootState) => ({
    firstName: state.personalInfoReducer.firstName?.[userId] || '',
    lastName: state.personalInfoReducer.lastName?.[userId] || '',
    dateOfBirth: state.personalInfoReducer.dateOfBirth?.[userId] || '',
    gender: state.personalInfoReducer.gender?.[userId] || '',
    address: state.personalInfoReducer.address?.[userId] || null,
  }));
  const [loading, setLoading] = useState(false);
  const [typedAddress, setTypedAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const selectedStateAbbrevation = stateAbbreviations[selectedState?.name];

  const personalInfoHandler = () => {
    if (!personalInfo?.firstName) {
      dispatch(setError('firstName'));
      return;
    } else if (!personalInfo?.lastName) {
      dispatch(setError('lastName'));
      return;
    } else if (!personalInfo?.dateOfBirth) {
      dispatch(setError('dateOfBirth'));
      return;
    } else if (!ageValidation(personalInfo?.dateOfBirth)) {
      Toast.show({
        type: 'error',
        text2: 'You must be at least 18 years old',
      });
      dispatch(setError('dateOfBirth'));
      return;
    } else if (!personalInfo?.gender) {
      dispatch(setError('gender'));
      return;
    } else if (
      !personalInfo?.address?.street_line ||
      !personalInfo?.address?.city ||
      !personalInfo?.address?.state ||
      !personalInfo?.address?.zipcode
    ) {
      dispatch(setError('address'));
      return;
    }
    const body = {
      apt_suite: selectedStateAbbrevation,
      city: personalInfo?.address?.city,
      date_of_birth: personalInfo?.dateOfBirth,

      first_name: personalInfo?.firstName,
      gender: personalInfo?.gender,
      last_name: personalInfo?.lastName,
      state: selectedState?.name,
      street_address: personalInfo?.address?.street_line,
      zip_code: personalInfo?.address?.zipcode,
    };
    setLoading(true);
    dispatch(addUserDetails(body))
      .then((response: any) => {
        if (response) {
          navigation.navigate('PhoneVerification');
        }
        setLoading(false);
      })
      .catch((err: any) => {
        setLoading(false);
        Toast.show({
          type: 'error',
          text2: err,
        });
      });
  };

  const getStreetAddress = async (query: string) => {
    const body = {
      query: query,
      include_only_states: selectedStateAbbrevation,
    };
    setIsLoading(true);
    await dispatch(getAddress(body))
      .then((response: any) => {
        if (response?.payload?.status === 200) {
          dispatch(getAddressList(response?.payload?.data?.suggestions));
        }
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  const getUser = async () => {
    setLoading(true);
    await dispatch(getUserDetails())
      .then((response: any) => {
        if (response?.payload?.status === 200) {
          const data = response?.payload?.data;
          dispatch(getUserData(data));
          dispatch(setFirstName(data?.first_name || '', userId));
          dispatch(setLastName(data?.last_name || '', userId));
          dispatch(setDob(data?.date_of_birth, userId));
          dispatch(setGender(data.gender || '', userId));
          dispatch(
            setAddress(
              {
                street_line: data.street_address || '',
                city: data.city || '',
                state: data.state || '',
                zipcode: data.zip_code || '',
              },
              userId,
            ),
          );
        }
        setLoading(false);
      })
      .catch((err: string) => {
        Toast.show({
          type: 'error',
          text2: err,
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (!typedAddress || typedAddress.length < 3) {
      dispatch(getAddressList([]));
      return;
    }
    const timeout = setTimeout(() => {
      getStreetAddress(typedAddress);
    }, 500);

    return () => clearTimeout(timeout);
  }, [typedAddress]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Personal Information" />
      <CustomLoader visible={loading} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 120}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={{
          //   paddingBottom: Platform.select({
          //     ios: h(30),
          //     android: h(100),
          //   }),
          // }}
        >
          <View style={styles.mainContainer}>
            <Text style={styles.heading}>Personal Information</Text>

            <CustomTextInput
              label="First Name"
              customLabelStyles={styles.customLabelStyles}
              value={personalInfo?.firstName}
              customInputWrapper={[
                styles.customInputStyle,
                {
                  borderColor:
                    error === 'firstName'
                      ? Colors.error
                      : personalInfo?.firstName?.length > 0
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
                dispatch(setFirstName(text, userId));
                dispatch(setError(''));
              }}
              customInputStyles={styles.customInputStyles}
            />
            <CustomTextInput
              label="Last Name"
              value={personalInfo?.lastName}
              customLabelStyles={styles.customLabelStyles}
              customInputWrapper={[
                styles.customInputStyle,
                {
                  borderColor:
                    error === 'lastName'
                      ? Colors.error
                      : personalInfo?.lastName?.length > 0
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
                dispatch(setLastName(text, userId));
                dispatch(setError(''));
              }}
              customInputStyles={styles.customInputStyles}
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
                      : personalInfo?.dateOfBirth?.length > 0
                      ? Colors.APP_COLOR
                      : Colors.GRAY,
                },
              ]}
              customInputTextStyle={{
                color:
                  error === 'dateOfBirth' ? Colors.error : Colors.APP_COLOR,
              }}
              value={personalInfo?.dateOfBirth}
              onChange={text => {
                dispatch(setDob(text, userId));
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
              selectedValue={personalInfo?.gender}
              onChange={selected => {
                dispatch(setGender(selected, userId));
                dispatch(setError(''));
              }}
              placeholder="Select Gender"
              style={{
                marginTop: 0,
                borderColor:
                  error === 'gender'
                    ? Colors.error
                    : personalInfo?.gender?.length > 0
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

            <StreetAddressDropdown
              label="Street Address"
              data={addressListing}
              selected={personalInfo?.address}
              onSelect={(text: any) => {
                dispatch(setAddress(text, userId));
                dispatch(setError(''));
              }}
              onInputChange={(text: string) => {
                setTypedAddress(text);
                if (text?.trim().length === 0) {
                  dispatch(setAddress({}, userId));
                }
                dispatch(setError(''));
              }}
              isLoading={isLoading}
              customLabelStyles={[styles.customLabelStyles]}
              customInputWrapperStyle={{
                borderColor:
                  error === 'address'
                    ? Colors.error
                    : personalInfo?.address?.street_line?.length > 0
                    ? Colors.APP_COLOR
                    : Colors.GRAY,
              }}
              placeholderTextColor={
                error === 'address' ? Colors.error : Colors.APP_COLOR
              }
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
              value={selectedState?.name || userDetail?.data?.state}
              placeholderTextColor={Colors.APP_COLOR}
              selectionColor={Colors.APP_COLOR}
              editable={false}
              customInputStyles={styles.customInputStyles}
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
