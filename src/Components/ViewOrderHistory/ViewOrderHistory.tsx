import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import ImageView from 'react-native-image-viewing';
import styles from './style';
import moment from 'moment';

const ViewOrderHistory: React.FC<any> = ({ item, onClose }) => {
  const [visible, setIsVisible] = useState(false);
  const rawImage = item?.orders?.[0]?.product_variant?.image;

  const imageUri =
    typeof rawImage === 'number'
      ? Image.resolveAssetSource(rawImage).uri
      : typeof rawImage === 'string'
      ? rawImage
      : undefined;

  const imageData = imageUri ? [{ uri: imageUri }] : [];

  return (
    <View style={{ marginVertical: 10 }}>
      <Pressable onPress={onClose}>
        <Image
          source={require('../../Assets/Images/close.png')}
          style={styles.closeIcon}
        />
      </Pressable>
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {item?.orders?.[0]?.product_variant?.product?.name}
      </Text>
      <Pressable
        style={styles.innerView}
        onPress={() => {
          setIsVisible(true);
        }}
      >
        <View style={[styles.imageView, { width: '100%' }]}>
          <Image source={{ uri: rawImage }} style={styles.image} />
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
export default ViewOrderHistory;
