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
import { h, useTypedNavigation, w } from '../../utils/Helper/Helper';
import SelectDosageCard from '../../Components/SelectDosage/SelectDosage';
import Button from '../../Components/Button/Button';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';
import Toast from 'react-native-toast-message';
import SelectPaymentPlanCard from '../../Components/SelectPaymentPlanCard/SelectPaymentPlanCard';

const AddPaymentMethod: React.FC<any> = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useTypedNavigation();
  const { matchedPaymentPlan } = route?.params;
  const { userData } = useSelector((state: RootState) => state?.login);
  const [loading, setLoading] = useState(false);

  console.log(matchedPaymentPlan, 'matchedPaymentPlan');

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomLoader visible={loading} />
      <Header title="Payment" />
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
            <Text style={styles.heading}>Finish your visit</Text>
            <Text style={styles.subHeading}>Your treatment if prescribed</Text>

            <View style={styles.row}>
              <View>
                <Text
                  style={styles.rowText}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {`${userData?.first_name} ${userData?.last_name} ${matchedPaymentPlan?.product_name}`}
                </Text>
                <Text
                  style={[styles.rowText, { fontSize: w(14) }]}
                >{`${matchedPaymentPlan?.plan_duration} Plan`}</Text>
              </View>
              <Text style={styles.rowTex2}>${matchedPaymentPlan?.price}</Text>
            </View>
            <View style={styles.row}>
              <Text
                style={styles.rowText}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                Shipping Fee{' '}
              </Text>
              <Text style={styles.rowTex2}>
                ${matchedPaymentPlan?.shipping_price}
              </Text>
            </View>
            <View style={styles.row}>
              <Text
                style={styles.rowText}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                Total price
              </Text>
              <Text style={styles.rowTex2}>
                ${matchedPaymentPlan?.plan_total_price}
              </Text>
            </View>
            <View style={styles.row}>
              <Text
                style={styles.rowText}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                Due Now
              </Text>
              <Text style={styles.rowTex2}>${0}</Text>
            </View>

            <Text style={[styles.heading, { marginTop: h(30) }]}>Pay With</Text>
            <Text style={[styles.subHeading, { fontSize: w(16) }]}>
              Credit or Debit Card
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default AddPaymentMethod;
