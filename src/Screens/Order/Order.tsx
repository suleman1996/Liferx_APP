import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { getOrderListing, getOrdersList } from './action';
import Toast from 'react-native-toast-message';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';

const Order: React.FC<any> = () => {
  const dispatch = useDispatch();
  const { ordersList } = useSelector((state: RootState) => state.ordersReducer);
  const [loading, setloading] = useState(false);

  const getOrderList = async () => {
    setloading(true);
    await dispatch(getOrderListing())
      .then((response: any) => {
        dispatch(getOrdersList(response?.payload?.data?.results));
        setloading(false);
      })
      .catch((error: any) => {
        setloading(false);
        Toast.show({
          type: 'error',
          text2: error,
        });
      });
  };

  useEffect(() => {
    getOrderList();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Orders" hideBackButton />
      <CustomLoader visible={loading} />
      <View style={styles.mainContainer}>
        <FlatList
          data={ordersList}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item?.id.toString()}
          renderItem={({ item }) => <OrderCard item={item} setImageLoading={setloading}/>}
          contentContainerStyle={{
            paddingHorizontal: w(5),
            paddingBottom: Platform.select({
              ios: h(100),
              android: h(120),
            }),
          }}
          ItemSeparatorComponent={() => <View style={{ height: h(2) }} />}
        />
      </View>
    </SafeAreaView>
  );
};
export default Order;
