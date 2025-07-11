import React from 'react';
import { TextInput, View, Text, TextInputProps, Image } from 'react-native';
import styles from './style';
import Colors from '../../utils/Colors/Colors';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: object;
  customInputStyles?: object;
  customLabelStyles?: object;
  customErrorStyles?: object;
  customInputWrapper?: object;
  leftImage?: any;
  rightImage?: any;
}

const CustomTextInput: React.FC<Props> = ({
  label,
  error,
  containerStyle,
  customInputStyles,
  customLabelStyles,
  customErrorStyles,
  leftImage,
  rightImage,
  customInputWrapper,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, customLabelStyles]}>{label}</Text>}

      <View
        style={[
          styles.inputWrapper,
          customInputWrapper,
          error && styles.inputError,
        ]}
      >
        {leftImage && (
          <Image
            source={leftImage}
            style={styles.leftIcon}
            resizeMode="contain"
          />
        )}
        <TextInput
          style={[styles.input, customInputStyles]}
          placeholderTextColor={Colors.GRAY}
          {...rest}
        />
        {rightImage && <View style={styles.leftIcon}>{rightImage}</View>}
      </View>

      {error && <Text style={[styles.error, customErrorStyles]}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;
