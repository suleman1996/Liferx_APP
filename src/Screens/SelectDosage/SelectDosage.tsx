import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Image,
  FlatList,
} from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import { h, useTypedNavigation } from '../../utils/Helper/Helper';
import SelectDosageCard from '../../Components/SelectDosage/SelectDosage';
import Button from '../../Components/Button/Button';

const SelectDosage: React.FC<any> = () => {
  const [selectDosage, setSelectDosage] = useState<string | null>(null);
  const navigation = useTypedNavigation();

  const Dosages = [
    {
      id: 214,
      dosage: '100 mg',
      starting_price: 67.5,
    },
    {
      id: 194,
      dosage: '20 mg',
      starting_price: 57.5,
    },
    {
      id: 204,
      dosage: '50 mg',
      starting_price: 57.5,
    },
  ];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Dosage" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 100}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.mainContainer}>
            <Image
              source={require('../../Assets/Images/logo.png')}
              style={styles.logo}
            />
            <Text style={styles.heading}>Select your dosage</Text>

            <FlatList
              data={Dosages}
              keyExtractor={item => item?.id?.toString()}
              renderItem={({ item, index }) => {
                return (
                  <SelectDosageCard
                    item={item}
                    index={index}
                    selectDosage={selectDosage}
                    setSelectDosage={setSelectDosage}
                  />
                );
              }}
              contentContainerStyle={[{ marginBottom: h(20) }]}
              ItemSeparatorComponent={() => <View style={{ height: h(5) }} />}
            />
            <Button text="Continue" noShadow />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default SelectDosage;
