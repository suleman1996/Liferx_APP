import React from 'react';
import {
  FlatList,
  Platform,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import { h, w } from '../../utils/Helper/Helper';
import OrderCard from '../../Components/OrdersCard/OrdersCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';

const Order: React.FC<any> = () => {  
  const orderItems = [
    {
      id: 1,
      image: require('../../Assets/Images/SildenafilOralTablets.png'),
      title: 'Better Sex treatment',
      orderDate: 'July 4, 2025',
      orderNumber: '37',
      shippingAddress: '101 1/2 N 5th St, Williams, AZ, 86046, United States',
      totalAmount: '74.5',
      nextOrderDate: '-',
    },
    {
      id: 2,
      image: require('../../Assets/Images/sprayLotion.png'),
      title: 'Regrow Hair treatment',
      orderDate: 'July 4, 2025',
      orderNumber: '36',
      shippingAddress: '123 2nd St, Juneau, Alaska, 99801, United States',
      totalAmount: '83.05',
      nextOrderDate: '-',
    },
  ];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Orders" hideBackButton/>
      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: Platform.select({
              ios: h(150),
              android: h(100),
            }),
          }}
        >
          <FlatList
            data={orderItems}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <OrderCard item={item} />}
            contentContainerStyle={{
              paddingHorizontal: w(5),
              paddingBottom: Platform.select({
                ios: h(100),
                android: h(20),
              }),
            }}
            ItemSeparatorComponent={() => <View style={{ height: h(2) }} />}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Order;
