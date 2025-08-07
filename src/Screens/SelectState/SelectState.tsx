import React, { useState } from 'react';
import {
  Image,
  Keyboard,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import SearchDropDown from '../../Components/SearchDropDown/SearchDropDown';
import Button from '../../Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { setState } from './actions';
import {
  usePreviousRouteName,
  useTypedNavigation,
} from '../../utils/Helper/Helper';
import Toast from 'react-native-toast-message';
import { usStates } from '../../utils/Constants/Constants';
import { useNavigationState } from '@react-navigation/native';
import LogoutModal from '../../Components/LogoutModal/LogoutModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getToken } from '../Auth/Register/actions';
import { clearDecidingAnswer } from '../DecidingQuestions/actions';

const SelectState: React.FC<any> = () => {
  const prevRouteName = usePreviousRouteName();
  const navigation = useTypedNavigation();
  const dispatch = useDispatch();
  const { token, userData } = useSelector(
    (state: RootState) => state.registerReducer,
  );
  const userId = useSelector(
    (state: RootState) => state.registerReducer?.userData?.data?.id,
  );
  const selectedState = useSelector(
    (state: RootState) => state.selectYourState?.selectedState?.[userId],
  );
  const [search, setSearch] = useState(selectedState?.name || '');
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleContinue = () => {
    if (!selectedState) {
      Toast.show({
        type: 'error',
        text2: 'Please select your state',
      });
      return;
    }
    navigation.navigate('Questionaire');
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(getToken(''));
    dispatch(clearDecidingAnswer());
    setShowLogoutModal(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'BottomTab' }],
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
        onTouchStart={() => {
          Keyboard.dismiss();
        }}
      >
        <LogoutModal
          visible={showLogoutModal}
          onCancel={() => setShowLogoutModal(false)}
          onLogout={handleLogout}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <Header
              title="State"
              // onBackPress={() => {
              //   if (prevRouteName === 'Login' && token) {
              //     setShowLogoutModal(true);
              //   }
              // }}
            />
            <View style={styles.mainContainer}>
              <Image
                source={require('../../Assets/Images/logo.png')}
                style={styles.logo}
              />

              <Text style={styles.title}>Please select your state</Text>
              <Text style={styles.description}>
                We'll customize your experience based on your location.
              </Text>

              <SearchDropDown
                placeholder="Search for your state.."
                flatlistData={usStates.filter(data =>
                  data?.name?.toLowerCase().includes(search.toLowerCase()),
                )}
                setSelectedItem={text => {
                  dispatch(setState(text, userId));
                }}
                selectedItem={selectedState}
                setSearch={setSearch}
                search={search}
                customContainerStyle={{ marginHorizontal: 20 }}
              />

              <View>
                <Button
                  text="Continue"
                  onPressHandler={handleContinue}
                  customButtonStyles={styles.customButtonStyles}
                  customTextStyles={styles.customTextStyles}
                  noShadow
                />
              </View>

              <Text style={styles.bottomText}>
                Your location helps us provide state-specific information and
                comply with local regulations. This information is kept private
                and secure.
              </Text>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SelectState;
