import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import styles from './style';
import Button from '../Button/Button';
import { useTypedNavigation, w } from '../../utils/Helper/Helper';
import Colors from '../../utils/Colors/Colors';

interface ProductItem {
  id?: number;
  image?: ImageSourcePropType;
  title?: string;
  orderNumber?: string;
  nextOrderDate?: string;
  orderDate?: string;
  shippingAddress?: string;
  totalAmount?: string;
}

interface Props {
  item?: ProductItem;
}

const OrderCard: React.FC<Props> = ({ item }) => {
  const navigation = useTypedNavigation();
  return (
    <View style={styles.card}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {item?.title}
      </Text>

      <View style={styles.innerView}>
        <View style={styles.imageView}>
          <Image source={item?.image} style={styles.image} />
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Order Date :</Text>
        <Text style={styles.value}>{item?.orderDate}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Order Number :</Text>
        <Text style={styles.value}>{`# ${item?.orderNumber}`}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Shipping Address :</Text>
        <Text style={styles.value}>{item?.shippingAddress}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Total Amount :</Text>
        <Text style={styles.value}>{`$${item?.totalAmount}`}</Text>
      </View>

      <View style={styles.buttonView}>
        <Button
          text="View Order History"
          customButtonStyles={styles.customButtonStyles}
          customTextStyles={styles.customTextStyles}
          noShadow
        />
        <Button
          text="View Order Tracking"
          customButtonStyles={[
            styles.customButtonStyles,
            {
              marginRight: w(20),
              backgroundColor: Colors.WHITE,
              borderWidth: 1,
              borderColor: Colors.APP_COLOR,
            },
          ]}
          customTextStyles={[
            styles.customTextStyles,
            { color: Colors.APP_COLOR },
          ]}
          noShadow
          onPressHandler={() => {
            navigation.navigate('OrderTracking', { item });
          }}
        />
      </View>
    </View>
  );
};

export default OrderCard;
