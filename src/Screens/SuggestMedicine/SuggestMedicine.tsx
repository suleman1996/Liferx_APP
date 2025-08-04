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
import SelectMedicineCard from '../../Components/SelectMedicineCard/SelectMedicineCard';
import Button from '../../Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import {
  getSuggestedProducts,
  getSuggestedProductsList,
  setSelectedMedicine,
} from './action';
import Toast from 'react-native-toast-message';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';

const SuggestMedicine: React.FC<any> = () => {
  const navigation = useTypedNavigation();
  const dispatch = useDispatch();
  const { serviceId } = useSelector((state: RootState) => state?.shopReducer);
  const userId = useSelector((state: RootState) => state.login?.userData?.id);
  const { sessionId } = useSelector(
    (state: RootState) => state.decidingQuestionAnswer,
  );
  const { suggestedProducts } = useSelector(
    (state: RootState) => state.productMedicineReducer,
  );
  const productId = useSelector(
    (state: RootState) =>
      state.productMedicineReducer.productId?.[userId]?.[serviceId] || '',
  );
  const rawData = suggestedProducts?.[userId]?.[serviceId] || [];
  const [loading, setLoading] = useState(false);
  const sortedMedArray = (rawData || []).sort((a: any, b: any) => {
    if (a?.is_suggested) return -1;
    if (b?.is_suggested) return 1;
    return 0;
  });

  const fetchSuggestedProducts = async () => {
    const body = {
      session_id: sessionId,
    };
    setLoading(true);
    await dispatch(getSuggestedProducts(body))
      .then((response: any) => {
        const data = response?.value?.data?.suggested_products;
        dispatch(getSuggestedProductsList(data, userId, serviceId));
        setLoading(false);
      })
      .catch((error: any) => {
        setLoading(false);
        Toast.show({
          type: 'error',
          text2: error,
        });
      });
  };

  useEffect(() => {
    if (sessionId && userId && serviceId) {
      fetchSuggestedProducts();
    }
  }, [sessionId, userId, serviceId]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomLoader visible={loading} />
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

            {!loading && (
              <>
                <FlatList
                  data={sortedMedArray}
                  keyExtractor={item => item?.id?.toString()}
                  renderItem={({ item, index }) => {
                    return (
                      <SelectMedicineCard
                        item={item}
                        index={index}
                        selectProduct={productId}
                        setSelectProduct={medId => {
                          dispatch(
                            setSelectedMedicine(medId, userId, serviceId),
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
                    const matchedProduct = sortedMedArray.find(
                      (item: any) =>
                        item?.id?.toString() === productId?.toString(),
                    );
                    if (!productId || !matchedProduct) {
                      Toast.show({
                        type: 'error',
                        text2: 'Please select atleast 1 product',
                      });
                      return;
                    }
                    navigation.navigate('SelectDosage', { productId });
                  }}
                  customButtonStyles={styles.customButtonStyles}
                />
              </>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default SuggestMedicine;
