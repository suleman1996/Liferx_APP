import React from 'react';
import { View, Text, Pressable } from 'react-native';
import RadioIcon from 'react-native-vector-icons/Fontisto';
import styles from './style';
import Colors from '../../utils/Colors/Colors';
import { w } from '../../utils/Helper/Helper';

interface ProductItem {
  id?: string;
  variant_id?: string;
  quantity?: string;
  plan_total_price?: number;
  plan_duration?: number;
}

interface Props {
  item?: ProductItem;
  index?: number;
  selectDosage?: string | null;
  setSelectDosage?: (id: string | null) => void;
}

const SelectPaymentPlanCard: React.FC<Props> = ({
  item,
  selectDosage,
  setSelectDosage,
}) => {
  const isSelected = item?.variant_id === selectDosage;

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
      onPress={() => handleSelector(item?.variant_id)}
    >
      <View style={styles.iconView2}>
        <View style={styles.iconView3}>
          <RadioIcon
            name={isSelected ? 'radio-btn-active' : 'radio-btn-passive'}
            size={20}
            color={Colors.APP_COLOR}
          />
          <View>
            <Text style={styles.startPrice}>
              {`Billed Every ${item?.plan_duration}`}
            </Text>
            <Text style={[styles.startPrice, { fontSize: w(14) }]}>
              {`${item?.quantity} uses/month`}
            </Text>
          </View>
        </View>
        <Text style={styles.price}>
          {item?.plan_total_price && item?.plan_duration
            ? `$${(
                item?.plan_total_price / item?.plan_duration?.match(/\d+/)
              ).toFixed(2)}/mo*`
            : '--'}
        </Text>
      </View>
    </Pressable>
  );
};
export default SelectPaymentPlanCard;
