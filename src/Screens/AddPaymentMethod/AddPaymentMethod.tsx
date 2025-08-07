import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import { h, useTypedNavigation, w } from '../../utils/Helper/Helper';
import Button from '../../Components/Button/Button';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';
import Toast from 'react-native-toast-message';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import {
  createOrder,
  getClientSecretKey,
} from './action';
import Colors from '../../utils/Colors/Colors';
import TermsCheckbox from '../../Components/TermsCheckbox/TermsCheckbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDialog from '../../Components/CustomDialog/CustomDialog';
import { setIsProfileCompleted } from '../Auth/Register/actions';

const AddPaymentMethod: React.FC<any> = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useTypedNavigation();
  const { matchedPaymentPlan } = route?.params;
  const userData = useSelector(
    (state: RootState) => state?.registerReducer?.userData?.data,
  );
  const { shippingAddress } = useSelector(
    (state: RootState) => state?.personalInfoReducer,
  );
  const [loading, setLoading] = useState(false);
  const [cardDetails, setCardDetails] = useState(null);
  const [isCardFocused, setIsCardFocused] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const { confirmSetupIntent } = useStripe();

  const handlePayPress = async () => {
                navigation.replace('BottomTab')

    // if (!cardDetails?.complete) {
    //   Toast.show({
    //     type: 'error',
    //     text2: 'Incomplete Card Details,Please enter all card details',
    //   });
    //   return;
    // } else if (cardDetails?.complete && !agreed) {
    //   Toast.show({
    //     type: 'error',
    //     text2: 'Terms & condition required',
    //   });
    //   return;
    // }
    // try {
    //   setLoading(true);
    //   const body = {
    //     make_default: 'false',
    //     patient_id: userData?.id,
    //   };
    //   const response: any = await dispatch(getClientSecretKey(body));
    //   const clientSecret = response?.payload?.data?.client_secret;
    //   if (!clientSecret) {
    //     throw new Error('Client secret not received from backend');
    //   }
    //   // ✅ No useStripe here anymore
    //   const { setupIntent, error } = await confirmSetupIntent(clientSecret, {
    //     paymentMethodType: 'Card',
    //     paymentMethodData: {
    //       billingDetails: {
    //         name: 'User Name',
    //       },
    //     },
    //   });
    //   if (error) {
    //     Toast.show({
    //       type: 'error',
    //       text2: error.message,
    //     });
    //   } else if (setupIntent?.status === 'Succeeded') {
    //     const body = {
    //       patient: userData?.id,
    //       product_variant_id: matchedPaymentPlan?.variant_id,
    //       shipping_address_id: shippingAddress?.data?.id,
    //       shipping_price: matchedPaymentPlan?.shipping_price,
    //       total_price: matchedPaymentPlan?.plan_total_price,
    //     };
    //     dispatch(createOrder(body)).then((response: any) => {          
    //       if (response?.payload?.status === 201) {
    //         dispatch(setIsProfileCompleted());
    //         navigation.navigate('BottomTab')
    //       }
    //     });
    //   } else {
    //     Toast.show({
    //       type: 'error',
    //       text2: 'Failed,Card saving failed',
    //     });
    //   }
    // } catch (err: any) {
    //   console.log('Error:', err);
    // } finally {
    //   setLoading(false);
    // }
  };  

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
          contentContainerStyle={{
            paddingBottom: Platform.select({
              ios: h(150),
              android: h(80),
            }),
          }}
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

            <View
              style={[
                {
                  borderColor: isCardFocused ? Colors.APP_COLOR : Colors.GRAY,
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: h(15),
                  marginBottom: h(15),
                },
              ]}
            >
              <CardField
                postalCodeEnabled={false}
                placeholders={{
                  number: 'Card number',
                }}
                cardStyle={styles.cardStyle}
                style={[
                  styles.cardContainer,
                  {
                    borderColor: isCardFocused ? Colors.APP_COLOR : Colors.GRAY,
                  },
                ]}
                onCardChange={(cardDetails: any) => {
                  setCardDetails(cardDetails);
                }}
                onFocus={() => setIsCardFocused(true)}
                onBlur={() => setIsCardFocused(false)}
              />
            </View>
            <TermsCheckbox
              value={agreed}
              onChange={setAgreed}
              onPress={() => {
                setOpenTerms(true);
              }}
            />
            <Button
              text="$0 Due Now"
              onPressHandler={handlePayPress}
              customTextStyles={styles.customTextStyles}
              customButtonStyles={styles.customButtonStyles}
            />

            <CustomDialog
              visible={openTerms}
              onDismiss={() => setOpenTerms(false)}
              icon
            >
              <Text style={styles.dialogHeading}>
                Important Subscription Information
              </Text>
              <Text style={styles.dialogSubHeading}>
                By signing up, you agree to our terms and conditions and the
                following:
              </Text>

              {[
                'If you are prescribed medication, your card will be charged immediately.',
                'If a different medication is prescribed, you will be notified for approval before being charged.',
                'This is a recurring subscription based on your selected shipping frequency (e.g., 1, 3, or 5 months).',
                'You will receive two reminders before each refill charge.',
                'You may cancel or delay any refill before the scheduled charge.',
                'Taxes and shipping costs may apply.',
              ].map((item, index) => (
                <View key={index} style={styles.listView}>
                  <Ionicons
                    name="checkmark-circle"
                    size={20}
                    color={Colors.APP_COLOR}
                  />
                  <Text style={styles.listText}>{item}</Text>
                </View>
              ))}

              <Text style={styles.dialogSubHeading}>
                Estimated Shipping Cost: $10 – $20
              </Text>

              <Text
                style={[
                  styles.listText,
                  { marginLeft: 0, width: '100%', paddingTop: h(10) },
                ]}
              >
                You may cancel anytime from your patient portal or by contacting
                us via email or SMS.
              </Text>

              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: Colors.GRAY,
                  marginTop: 16,
                }}
              />

              <Text style={styles.dialogSubHeading}>
                By confirming your subscription, you allow LifeRx.md to charge
                you for future payments in accordance with their terms.
              </Text>
            </CustomDialog>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default AddPaymentMethod;
