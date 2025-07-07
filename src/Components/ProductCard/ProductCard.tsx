import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import { w } from '../../utils/Helper/Helper';

interface ProductItem {
  id: number;
  image: any;
  text: string;
  month: string;
}

interface Props {
  item: ProductItem;
  index: number;
}

const ProductCard: React.FC<Props> = ({ item, index }) => {
  return (
    <View style={[styles.card, index > 0 && { marginLeft: w(20) }]}>
      <Image source={item?.image} style={styles.image} resizeMode="cover" />

      <View style={styles.innerCard}>
        <Text style={styles.title}>{item?.text}</Text>
        <Text style={styles.month}>$17/month</Text>
      </View>

      {/* <View style={styles.innerCard3}>
        <Text style={styles.text}>Starting at</Text>
      </View> */}
    </View>
  );
};

export default ProductCard;
