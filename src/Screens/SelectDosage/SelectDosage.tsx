import React, { useEffect, useState } from 'react';
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
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getDosage, getDosageListing, setSelectedDosage } from './action';
import { RootState } from '../../Store';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';
import Toast from 'react-native-toast-message';

const SelectDosage: React.FC<any> = () => {
  const dispatch = useDispatch();
  const navigation = useTypedNavigation();
  const route = useRoute();
  const { productId } = route?.params;
  const userId = useSelector((state: RootState) => state.login?.userData?.id);
  const selectedDosage = useSelector(
    (state: RootState) =>
      state.dosageReducers.selectDosage?.[userId]?.[productId] || '',
  );
  const { doasgeList } = useSelector(
    (state: RootState) => state.dosageReducers,
  );
  const [loading, setLoading] = useState(false);

  const fetchDosage = async () => {
    setLoading(true);
    await dispatch(getDosage(productId))
      .then((res: any) => {
        if (res?.value?.status === 200) {
          dispatch(getDosageListing(res?.value?.data?.dosages));
        }
        setLoading(false);
      })
      .catch((error: string) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (productId) {
      fetchDosage();
    }
  }, [productId]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomLoader visible={loading} />
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

            {!loading && (
              <>
                <FlatList
                  data={doasgeList}
                  keyExtractor={item => item?.id?.toString()}
                  renderItem={({ item, index }) => {
                    return (
                      <SelectDosageCard
                        item={item}
                        index={index}
                        selectDosage={selectedDosage}
                        setSelectDosage={(dosageId: any) => {
                          dispatch(
                            setSelectedDosage(dosageId, userId, productId),
                          );
                        }}
                      />
                    );
                  }}
                  contentContainerStyle={[{ marginBottom: h(20) }]}
                  ItemSeparatorComponent={() => (
                    <View style={{ height: h(5) }} />
                  )}
                />

                <Button
                  text="Continue"
                  noShadow
                  onPressHandler={() => {
                    const selectedDosageItem = doasgeList.find(
                      (item: any) => item?.id.toString() === selectedDosage?.toString(),
                    );
                    if (!selectedDosage || !selectedDosageItem) {
                      Toast.show({
                        type: 'error',
                        text2: 'Please select your dosage',
                      });
                      return;
                    }
                    navigation.navigate('DosageVarient', {
                      selectedDosageItem,
                      productId,
                    });
                  }}
                />
              </>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default SelectDosage;
