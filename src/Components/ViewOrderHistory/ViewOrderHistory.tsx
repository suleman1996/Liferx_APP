import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './style';

const ViewOrderHistory: React.FC<any> = ({ item, onClose, onImagePress }) => {
  const imageData = item?.image
    ? [{ uri: Image.resolveAssetSource(item?.image as any).uri }]
    : [];

  return (
    <View style={{ marginVertical: 10 }}>
      <Pressable onPress={onClose}>
        <Image
          source={require('../../Assets/Images/close.png')}
          style={styles.closeIcon}
        />
      </Pressable>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {item?.title}
      </Text>
      <Pressable style={styles.innerView} onPress={onImagePress}>
        <View style={[styles.imageView, { width: '100%' }]}>
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
    </View>
  );
};
export default ViewOrderHistory;
