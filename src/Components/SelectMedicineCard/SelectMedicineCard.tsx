import React from 'react';
import { View, Text, Pressable } from 'react-native';
import RadioIcon from 'react-native-vector-icons/Fontisto';
import styles from './style';
import Colors from '../../utils/Colors/Colors';
import ImageWithLoader from '../ImageWithLoader/ImageWithLoader';

interface ProductVariant {
  image?: string;
  image_urls?: string;
}

interface ProductItem {
  id?: string;
  name?: string;
  type?: string;
  is_suggested?: boolean;
  starting_price?: string;
  product_variants?: ProductVariant[];
}

interface Props {
  item?: ProductItem;
  index: number;
  selectProduct?: string | null;
  setSelectProduct?: (id: string | null) => void;
}

const SelectMedicineCard: React.FC<Props> = ({
  item,
  index,
  selectProduct,
  setSelectProduct,
}) => {
  const productImageUri = item?.product_variants?.[0]?.image;
  const isSelected = item?.id === selectProduct;

  const handleSelector = (id?: string) => {
    if (setSelectProduct) {
      setSelectProduct(id ?? null);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.card,
          { borderColor: isSelected ? Colors.APP_COLOR : Colors.GRAY },
        ]}
      >
        {index === 0 && (
          <View style={styles.cardHeader}>
            <Text style={styles.recommended}>Recommended</Text>
          </View>
        )}

        <Pressable
          style={styles.iconView}
          onPress={() => handleSelector(item?.id)}
        >
          <View style={styles.iconView2}>
            <RadioIcon
              name={isSelected ? 'radio-btn-active' : 'radio-btn-passive'}
              size={20}
              color={Colors.APP_COLOR}
            />
            <View>
              <Text
                style={styles.medName}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item?.name}
              </Text>

              <Text
                style={styles.price}
              >{`starting at $${item?.starting_price}/mo*`}</Text>
            </View>
          </View>
          <ImageWithLoader
            imageSource={{ uri: productImageUri }}
            style={styles.productImage}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default SelectMedicineCard;
