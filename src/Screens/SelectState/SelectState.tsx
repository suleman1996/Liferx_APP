import React, { useState } from 'react';
import { Image, Keyboard, Text, View, SafeAreaView } from 'react-native';
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
  const { selectedState } = useSelector(
    (state: RootState) => state.selectYourState,
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
    <SafeAreaView
      style={styles.safeAreaView}
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();
        return false;
      }}
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
            dispatch(setState(text));
          }}
          selectedItem={selectedState}
          setSearch={setSearch}
          search={search}
        />

        <View>
          <Button
            text="Continue"
            onPressHandler={() => handleContinue()}
            customButtonStyles={styles.customButtonStyles}
            customTextStyles={styles.customTextStyles}
            noShadow
          />
        </View>
        <Text style={styles.bottomText}>
          Your location helps us provide state-specific information and comply
          with local regulations. This information is kept private and secure.
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default SelectState;
