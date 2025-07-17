import React, { useState } from 'react';
import { Image, Keyboard, Text, View, SafeAreaView } from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import SearchDropDown from '../../Components/SearchDropDown/SearchDropDown';
import Button from '../../Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { addState } from './actions';
import { useTypedNavigation } from '../../utils/Helper/Helper';
import Toast from 'react-native-toast-message';

const SelectState: React.FC<any> = () => {
  const navigation = useTypedNavigation();
  const dispatch = useDispatch();
  const { states } = useSelector((state: RootState) => state.selectYourState);
  const { answers } = useSelector(
    (state: RootState) => state.decidingQuestionAnswer,
  );
  const [selectedState, setselectedState] = useState<any>(null);
  const [search, setSearch] = useState('');
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

  const handleContinue = () => {
    if (!selectedState) {
      Toast.show({
        type: 'error',
        text2: 'Please select your state',
      });
      return;
    }
    navigation.navigate('Questionaire');
    // dispatch(addState(selectedState?.name));
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
          flatlistData={stateArray.filter(data =>
            data?.name?.toLowerCase().includes(search.toLowerCase()),
          )}
          setSelectedItem={setselectedState}
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
