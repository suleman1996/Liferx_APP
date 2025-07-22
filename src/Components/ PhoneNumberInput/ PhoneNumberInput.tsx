import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Colors from '../../utils/Colors/Colors';
import styles from './style';

interface Props {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

const PhoneNumberInput: React.FC<Props> = ({
  label,
  value,
  onChangeText,
  placeholder = '(555) 123-4567',
  containerStyle,
  labelStyle,
}) => {
  return (
    <View style={containerStyle}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      <View
        style={[
          styles.phoneContainer,
          {
            borderColor: value?.length > 0 ? Colors.APP_COLOR : Colors.GRAY,
          },
        ]}
      >
        <View
          style={[
            styles.flagView,
            {
              borderColor: value?.length > 0 ? Colors.APP_COLOR : Colors.GRAY,
            },
          ]}
        >
          <Image
            source={require('../../Assets/Images/UsaFlag.png')}
            style={styles.flag}
          />
          <Text style={styles.number}>+1</Text>
        </View>

        <TextInput
          value={value}
          onChangeText={onChangeText}
          keyboardType="number-pad"
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={Colors.GRAY}
          maxLength={14} // formatted length: (123) 456-7890
        />
      </View>
    </View>
  );
};

export default PhoneNumberInput;
