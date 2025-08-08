import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ImageSourcePropType,
} from 'react-native';
import ImageView from 'react-native-image-viewing';
import styles from './style';
import Button from '../Button/Button';
import { useTypedNavigation } from '../../utils/Helper/Helper';
import Colors from '../../utils/Colors/Colors';
import CustomDialog from '../CustomDialog/CustomDialog';
import ViewOrderHistory from '../ViewOrderHistory/ViewOrderHistory';
import moment from 'moment';
import ImageWithLoader from '../ImageWithLoader/ImageWithLoader';

// Types for product
interface Product {
  name?: string;
  image?: string;
}

// Types for product variant
interface ProductVariant {
  image?: string;
  product?: Product;
}

// Types for order
interface Order {
  total_price?: string;
  product_variant?: ProductVariant;
}

// Types for shipping address
interface ShippingAddress {
  street_address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  country?: string;
  created_at?: string;
}

// Types for latest order (just need id and shipping_address)
interface LatestOrder {
  id?: number;
  shipping_address?: ShippingAddress;
}

// Full item type
interface ProductItem {
  id?: number;
  image?: ImageSourcePropType;
  orders?: Order[];
  latest_order?: LatestOrder;
}

interface Props {
  item?: ProductItem;
  setImageLoading?: any;
}

const OrderCard: React.FC<Props> = ({ item, setImageLoading }) => {
  const navigation = useTypedNavigation();
  const [visible, setIsVisible] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const rawImage = item?.orders?.[0]?.product_variant?.image;

  const imageUri =
    typeof rawImage === 'number'
      ? Image.resolveAssetSource(rawImage).uri
      : typeof rawImage === 'string'
      ? rawImage
      : undefined;

  const imageData = imageUri ? [{ uri: imageUri }] : [];

  return (
    <View style={styles.card}>
      {isPopUpOpen && (
        <CustomDialog visible={isPopUpOpen}>
          <ViewOrderHistory item={item} onClose={() => setIsPopUpOpen(false)} />
        </CustomDialog>
      )}

      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {item?.orders?.[0]?.product_variant?.product?.name}
      </Text>

      <Pressable
        style={styles.innerView}
        onPress={() => {
          setIsVisible(true);
        }}
      >
        <View style={styles.imageView}>
          <ImageWithLoader
            imageSource={{ uri: rawImage }}
            style={styles.image}
          />
        </View>
      </Pressable>

      <View style={styles.row}>
        <Text style={styles.label}>Order Date :</Text>
        <Text style={styles.value}>
          {moment(item?.latest_order?.shipping_address?.created_at).format(
            'MM-DD-YYYY',
          )}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Order Number :</Text>
        <Text style={styles.value}>{`# ${item?.latest_order?.id}`}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Shipping Address :</Text>
        <Text style={styles.value}>
          {`${item?.latest_order?.shipping_address?.street_address || ''}, ${
            item?.latest_order?.shipping_address?.city || ''
          }, ${item?.latest_order?.shipping_address?.state || ''}, ${
            item?.latest_order?.shipping_address?.zip_code || ''
          }, ${item?.latest_order?.shipping_address?.country || ''}`}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Total Amount :</Text>
        <Text style={styles.value}>{`$${item?.orders?.[0]?.total_price}`}</Text>
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
            navigation.navigate('OrderTracking', {
              orderId: item?.latest_order?.id,
            });
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
