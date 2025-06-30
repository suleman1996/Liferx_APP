import React from 'react';
import { TextInput, View, Text, TextInputProps } from 'react-native';
import styles from './style';
import Colors from '../../utils/Colors/Colors';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: object;
  customInputStyles? : object;
  customLabelStyles? : object;
  customErrorStyles? : object;
}

const CustomTextInput: React.FC<Props> = ({
  label,
  error,
  containerStyle,
  customInputStyles,
  customLabelStyles,
  customErrorStyles,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label,customLabelStyles]}>{label}</Text>}
      <TextInput
        style={[styles.input,customInputStyles, error && styles.inputError]}
        placeholderTextColor={Colors.GRAY}
        {...rest}
      />
      {error && <Text style={[styles.error,customErrorStyles]}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;
