import React from 'react';
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './style';
import Header from '../../../Components/Header/Header';
import OrderTimeline from '../../../Components/OrderTimeLine/OrderTimeLine';

const OrderTracking: React.FC<any> = ({}) => {
  const route = useRoute();
  const { item }: any = route?.params || {};

  const steps = [
    {
      label: 'Dispatched',
      icon: require('../../../Assets/Images/tickMark.png'),
      isActive: false,
    },
    {
      label: 'Ready To Ship',
      icon: require('../../../Assets/Images/truck.png'),
      isActive: true,
    },
    {
      label: 'Order Approved',
      icon: require('../../../Assets/Images/routing.png'),
      isActive: true,
    },
    {
      label: 'Doctor Reviewed The Order',
      icon: require('../../../Assets/Images/truck.png'),
      isActive: true,
    },
    {
      label: 'Your Order Is Placed',
      icon: require('../../../Assets/Images/orderPlaced.png'),
      isActive: true,
    },
  ];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Tracking" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={styles.mainContainer}>
          <View style={styles.card}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              Daily Tadalafil Oral Tablets
            </Text>

            <View style={styles.innerView}>
              <View style={styles.imageView}>
                <Image source={item?.image} style={styles.image} />
              </View>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Order Number :</Text>
              <Text style={styles.value}>{`# ${item?.orderNumber}`}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Shipping Address :</Text>
              <Text style={styles.value}>{item?.shippingAddress}</Text>
            </View>

            <OrderTimeline steps={steps} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default OrderTracking;
