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
  getPaymentPlans,
  getPaymentPlansListing,
  setSelectedPaymentPlan,
} from './action';
import SelectPaymentPlanCard from '../../Components/SelectPaymentPlanCard/SelectPaymentPlanCard';

const SelectPlans: React.FC<any> = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useTypedNavigation();
  const { selectedDosageVarientByList, productId, selectedDosageItem } =
    route?.params;
  const userId = useSelector((state: RootState) => state.login?.userData?.id);
  const { plansListing } = useSelector(
    (state: RootState) => state.paymentPlansReducers,
  );
  const selectedPaymentPlanId = useSelector(
    (state: RootState) =>
      state.paymentPlansReducers.selectedPaymentPlan?.[userId]?.[productId] ||
      '',
  );
  const selectedPaymentPlan =
    plansListing.find((plan: any) => plan?.variant_id === selectedPaymentPlanId)
      ?.variant_id || '';
  const [loading, setLoading] = useState(false);

  const fetchPlans = async () => {
    setLoading(true);
    await dispatch(
      getPaymentPlans(
        productId,
        selectedDosageItem?.dosage,
        selectedDosageVarientByList?.quantity,
      ),
    )
      .then((response: any) => {
        if (response?.value?.status === 200) {
          dispatch(
            getPaymentPlansListing(response?.value?.data?.plan_variants),
          );
        }
        setLoading(false);
      })
      .catch((error: string) => {
        Toast.show({
          type: 'error',
          text2: error,
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPlans();
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
            <Text style={styles.heading}>
              {selectedDosageVarientByList?.product_name}
            </Text>
            <Text style={styles.subHeading}>
              {selectedDosageVarientByList?.active_ingredient}
            </Text>

            <Text style={[styles.heading, { marginTop: h(40) }]}>
              Select payment plan
            </Text>

            {!loading && (
              <>
                <FlatList
                  data={plansListing}
                  keyExtractor={item => item?.id?.toString()}
                  renderItem={({ item, index }) => {
                    return (
                      <SelectPaymentPlanCard
                        item={item}
                        index={index}
                        selectDosage={selectedPaymentPlan}
                        setSelectDosage={(id: any) => {
                          dispatch(
                            setSelectedPaymentPlan(id, userId, productId),
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
                    const matchedPaymentPlan = plansListing?.find(
                      (i: any) =>
                        i?.variant_id?.toString() ===
                        selectedPaymentPlan?.toString(),
                    );
                    if (!selectedPaymentPlan || !matchedPaymentPlan) {
                      Toast.show({
                        type: 'error',
                        text2: 'Please select your payment plan',
                      });
                      return;
                    }
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
export default SelectPlans;
