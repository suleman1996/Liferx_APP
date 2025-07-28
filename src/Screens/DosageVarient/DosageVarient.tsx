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
import { RootState } from '../../Store';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';
import Toast from 'react-native-toast-message';
import {
  getDosageVarients,
  getDosageVarientsListing,
  setSelectedDosageVarients,
} from './action';

const DosageVarient: React.FC<any> = () => {
  const route = useRoute();
  const { selectedDosageItem, productId } = route?.params;
  const userId = useSelector((state: RootState) => state.login?.userData?.id);
  const { doasgeVarientList } = useSelector(
    (state: RootState) => state.dosageVarientReducers,
  );
  const selectedDosageVarient = useSelector(
    (state: RootState) =>
      state.dosageVarientReducers.selectDosageVarient?.[userId]?.[productId] ||
      '',
  );
  const [loading, setLoading] = useState(false);
  const navigation = useTypedNavigation();
  const dispatch = useDispatch();

  const fetchDosageVarients = async () => {
    setLoading(true);
    await dispatch(getDosageVarients(productId, selectedDosageItem?.dosage))
      .then((res: any) => {
        if (res?.value?.status === 200) {
          dispatch(getDosageVarientsListing(res?.value?.data?.usage_variants));
        }
        setLoading(false);
      })
      .catch((error: string) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDosageVarients();
  }, []);

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
            <Text style={styles.heading}>Select the uses of medicine</Text>

            {!loading && (
              <>
                <FlatList
                  data={doasgeVarientList}
                  keyExtractor={item => item?.id?.toString()}
                  renderItem={({ item, index }) => {
                    return (
                      <SelectDosageCard
                        item={item}
                        index={index}
                        selectDosage={selectedDosageVarient}
                        setSelectDosage={(dosageId: any) => {
                          dispatch(
                            setSelectedDosageVarients(
                              dosageId,
                              userId,
                              productId,
                            ),
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
                    if (!selectedDosageVarient) {
                      Toast.show({
                        type: 'error',
                        text2: 'Please select your dosage',
                      });
                      return;
                    }
                    console.log(selectedDosageVarient, 'selectedDosageVarient');
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
export default DosageVarient;
