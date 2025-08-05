import React from 'react';
import { View, Text, Image, Pressable, Alert, Linking } from 'react-native';
import styles from './style';
import { useTypedNavigation, w } from '../../utils/Helper/Helper';
import { weightLossUrl } from '../../utils/Constants/Constants';
import { useDispatch } from 'react-redux';
import { getServiceId } from '../../Screens/Shop/actions';

interface ProductItem {
  id: number;
  image: any;
  text: string;
  month: string;
  serviceID: string;
}

interface Props {
  item: ProductItem;
  index: number;
}

const ProductCard: React.FC<Props> = ({ item, index }) => {
  const navigation = useTypedNavigation();
  const dispatch = useDispatch();
  return (
    <Pressable
      style={[styles.card, index > 0 && { marginLeft: w(20) }]}
      onPress={() => {
        if (index === 2) {
          Linking.openURL(weightLossUrl);
        } else {
          dispatch(getServiceId(item?.serviceID));

          navigation.navigate('DecidingQuestions');
        }
      }}
    >
      <Image source={item?.image} style={styles.image} resizeMode="cover" />

      <View style={styles.innerCard}>
        <Text style={styles.title}>{item?.text}</Text>
        <Text style={styles.month}>$17/month</Text>
      </View>

      {/* <View style={styles.innerCard3}>
        <Text style={styles.text}>Starting at</Text>
      </View> */}
    </Pressable>
  );
};

export default ProductCard;
