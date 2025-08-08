import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import ImageView from 'react-native-image-viewing';
import { RouteProp, useRoute } from '@react-navigation/native';
import styles from './style';
import Header from '../../../Components/Header/Header';
import OrderTimeline from '../../../Components/OrderTimeLine/OrderTimeLine';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderTracking, getOrderTrackingData } from './action';
import { h, useTypedNavigation } from '../../../utils/Helper/Helper';
import Colors from '../../../utils/Colors/Colors';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import CustomLoader from '../../../Components/LoaderModal/LoaderModal';
import Toast from 'react-native-toast-message';
import { RootState } from '../../../Store';

type OrderTrackingRouteProp = RouteProp<
  {
    params: {
      orderId: number;
    };
  },
  'params'
>;

const OrderTracking: React.FC<any> = ({}) => {
  const { orderTrackingData } = useSelector(
    (state: RootState) => state?.orderTrackingReducer,
  );
  const navigation = useTypedNavigation();
  const dispatch = useDispatch();
  const route = useRoute<OrderTrackingRouteProp>();
  const { orderId } = route?.params || {};
  const [loading, setLoading] = useState(false);
  const [visible, setIsVisible] = useState(false);
  const tracking = orderTrackingData?.data;
  const rawImage = tracking?.product_details?.image;

  const imageUri =
    typeof rawImage === 'number'
      ? Image.resolveAssetSource(rawImage).uri
      : typeof rawImage === 'string'
      ? rawImage
      : undefined;
  const imageData = imageUri ? [{ uri: imageUri }] : [];

  const steps = [
    {
      label: 'Your order is placed',
      icon: require('../../../Assets/Images/orderPlaced.png'),
      isActive: Boolean(tracking?.step_timestamps?.step_1_created_at),
    },
    {
      label: 'Doctor Reviewed the Order',
      icon: require('../../../Assets/Images/truck.png'),
      isActive: Boolean(tracking?.step_timestamps?.step_2_doctor_approved_at),
    },
    {
      label: 'Order Approved',
      icon: require('../../../Assets/Images/routing.png'),
      isActive: Boolean(tracking?.step_timestamps?.step_3_order_approved_at),
    },
    {
      label: 'In Transit',
      icon: require('../../../Assets/Images/truck.png'),
      isActive: Boolean(tracking?.step_timestamps?.step_4_in_transit_at),
    },
  ];

  const orderTracking = async () => {
    setLoading(true);
    await dispatch(getOrderTracking(orderId))
      .then((response: any) => {
        dispatch(getOrderTrackingData(response?.payload?.data));
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
    orderTracking();
  }, []);

  const customTabBarStyle: BottomTabNavigationOptions['tabBarStyle'] = {
    height: h(90),
    paddingTop: h(10),
    backgroundColor: Colors.APP_COLOR,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  };
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: customTabBarStyle,
      });
    };
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        title="Tracking"
      />
      <CustomLoader visible={loading} />

      {!tracking ? null : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        >
          <View style={styles.mainContainer}>
            <View style={styles.card}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                {tracking?.product_details?.product?.name}
              </Text>

              <Pressable
                style={styles.innerView}
                onPress={() => {
                  setIsVisible(true);
                }}
              >
                <View style={styles.imageView}>
                  <Image
                    source={{ uri: tracking?.product_details?.image }}
                    style={styles.image}
                  />
                </View>
              </Pressable>

              <View style={styles.row}>
                <Text style={styles.label}>Order Number :</Text>
                <Text style={styles.value}>{`# ${tracking?.order_id}`}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Shipping Address :</Text>
                <Text style={styles.value}>
                  {`${tracking?.shipping_address?.street_address || ''}, ${
                    tracking?.shipping_address?.city || ''
                  }, ${tracking?.shipping_address?.state || ''}, ${
                    tracking.shipping_address?.zip_code || ''
                  }, ${tracking?.shipping_address?.country || ''}`}
                </Text>
              </View>

              <OrderTimeline steps={steps} />
            </View>
          </View>

          <ImageView
            images={imageData}
            imageIndex={0}
            visible={visible}
            onRequestClose={() => setIsVisible(false)}
            presentationStyle="fullScreen"
            backgroundColor="#000000EE"
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
export default OrderTracking;
