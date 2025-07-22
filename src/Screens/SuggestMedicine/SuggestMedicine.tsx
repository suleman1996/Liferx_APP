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
import { h, useTypedNavigation, w } from '../../utils/Helper/Helper';
import SuggetedMedicine from '../../utils/SuggestedProducts.json';
import SelectMedicineCard from '../../Components/SelectMedicineCard/SelectMedicineCard';
import Button from '../../Components/Button/Button';

const SuggestMedicine: React.FC<any> = () => {
  const navigation = useTypedNavigation();
  const [selectProduct, setSelectProduct] = useState<string | null>(null);
  const rawData = SuggetedMedicine?.suggested_products;

  const sortedMedArray = [
    ...rawData?.sort((a, b) => {
      if (a?.is_suggested) return -1;
      if (b?.is_suggested) return 1;
      return 0;
    }),
  ];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Medicine" />
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
            <Text style={styles.heading}>Select a medicine</Text>

            <FlatList
              data={sortedMedArray}
              keyExtractor={item => item?.id?.toString()}
              renderItem={({ item, index }) => {
                return (
                  <SelectMedicineCard
                    item={item}
                    index={index}
                    selectProduct={selectProduct}
                    setSelectProduct={setSelectProduct}
                  />
                );
              }}
              contentContainerStyle={[{ marginBottom: h(20) }]}
              ItemSeparatorComponent={() => <View style={{ height: h(5) }} />}
            />
            <Button
              text="Continue"
              noShadow
              onPressHandler={() => {
                navigation.navigate('SelectDosage');
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default SuggestMedicine;
