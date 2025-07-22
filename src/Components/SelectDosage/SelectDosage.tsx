import React from 'react';
import { View, Text, Pressable } from 'react-native';
import RadioIcon from 'react-native-vector-icons/Fontisto';
import styles from './style';
import Colors from '../../utils/Colors/Colors';

interface ProductItem {
  id?: string;
  dosage?: string;
  starting_price?: number;
}

interface Props {
  item?: ProductItem;
  index?: number;
  selectDosage?: string | null;
  setSelectDosage?: (id: string | null) => void;
}

const SelectDosageCard: React.FC<Props> = ({
  item,
  selectDosage,
  setSelectDosage,
}) => {
  const isSelected = item?.id === selectDosage;

  const handleSelector = (id?: string) => {
    if (setSelectDosage) {
      setSelectDosage(id ?? null);
    }
  };

  return (
    <Pressable
      style={[
        styles.card,
        { borderColor: isSelected ? Colors.APP_COLOR : Colors.GRAY },
      ]}
      onPress={() => handleSelector(item?.id)}
    >
      <View style={styles.iconView2}>
        <View style={styles.iconView3}>
          <RadioIcon
            name={isSelected ? 'radio-btn-active' : 'radio-btn-passive'}
            size={20}
            color={Colors.APP_COLOR}
          />
          <Text style={styles.startPrice}>{item?.dosage}</Text>
        </View>
        <Text style={styles.price}>
          {`starting at $${item?.starting_price}/mo*`}
        </Text>
      </View>
    </Pressable>
  );
};

export default SelectDosageCard;
