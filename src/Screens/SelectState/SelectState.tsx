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
} from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import SearchDropDown from '../../Components/SearchDropDown/SearchDropDown';
import Button from '../../Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { setState } from './actions';
import { useTypedNavigation } from '../../utils/Helper/Helper';
import Toast from 'react-native-toast-message';
import { usStates } from '../../utils/Constants/Constants';

const SelectState: React.FC<any> = () => {
  const navigation = useTypedNavigation();
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.registerReducer?.userData?.id);  
  const selectedState = useSelector(
    (state: RootState) => state.selectYourState?.selectedState?.[userId],
  );
  const { serviceId } = useSelector((state: RootState) => state?.shopReducer);
  const { selectedAnswer, decidingQuestions, sessionId } = useSelector(
    (state: RootState) => state.decidingQuestionAnswer,
  );
  const [search, setSearch] = useState(selectedState?.name || '');

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

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
        onTouchStart={()=>{
          Keyboard.dismiss()
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <Header title="State" />
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
                customContainerStyle={{marginHorizontal:20}}
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
