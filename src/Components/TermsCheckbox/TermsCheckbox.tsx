import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utils/Colors/Colors';
import styles from './style';

interface TermsCheckboxProps {
  value: boolean;
  onChange: (checked: boolean) => void;
  onPress: () => void;
}

const TermsCheckbox: React.FC<TermsCheckboxProps> = ({
  value,
  onChange,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.row} onPress={() => onChange(!value)}>
        <Ionicons
          name={value ? 'checkbox' : 'square-outline'}
          size={24}
          color={value ? Colors.APP_COLOR : Colors.GRAY}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>I accept the Terms & Conditions</Text>
          <Text style={styles.descriptionText}>
            By checking this box, I agree to the subscription terms and
            authorize LifeRx.md to store and charge my card.{' '}
            <Text style={styles.linkText} onPress={onPress}>
              View Terms
            </Text>
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default TermsCheckbox;
