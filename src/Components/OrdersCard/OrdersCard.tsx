import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import ImageView from 'react-native-image-viewing';
import styles from './style';
import Button from '../Button/Button';
import { useTypedNavigation, w } from '../../utils/Helper/Helper';
import Colors from '../../utils/Colors/Colors';
import CustomDialog from '../CustomDialog/CustomDialog';
import ViewOrderHistory from '../ViewOrderHistory/ViewOrderHistory';

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
  const [visible, setIsVisible] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const imageData = item?.image
    ? [{ uri: Image.resolveAssetSource(item?.image as any).uri }]
    : [];

  return (
    <View style={styles.card}>
      {isPopUpOpen && (
        <CustomDialog visible={isPopUpOpen}>
          <ViewOrderHistory
            item={item}
            onClose={() => setIsPopUpOpen(false)}
            onImagePress={() => setIsVisible(true)}
          />
        </CustomDialog>
      )}
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {item?.title}
      </Text>

      <Pressable
        style={styles.innerView}
        onPress={() => {
          setIsVisible(true);
        }}
      >
        <View style={styles.imageView}>
          <Image source={item?.image} style={styles.image} />
        </View>
      </Pressable>

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
          onPressHandler={() => {
            setIsPopUpOpen(true);
          }}
          noShadow
        />
        <Button
          text="View Order Tracking"
          customButtonStyles={[
            styles.customButtonStyles,
            {
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
      <ImageView
        images={imageData}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
        presentationStyle="fullScreen"
        backgroundColor="#000000EE"
      />
    </View>
  );
};
export default OrderCard;
