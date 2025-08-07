import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  Text,
  Pressable,
  ImageStyle,
  TextStyle,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Colors from '../../utils/Colors/Colors';

interface HeaderProps {
  text: string;
  imageSource?: ImageSourcePropType;
  leftIconSource?: ImageSourcePropType;
  imageStyles?: ImageStyle;
  customButtonStyles?: StyleProp<ViewStyle>;
  customTextStyles?: StyleProp<TextStyle>;
  onPressHandler?: () => void;
  noShadow?: boolean;
  loading?: boolean;
  disabled?: boolean
}

const Button: React.FC<HeaderProps> = ({
  text,
  imageSource,
  customButtonStyles,
  imageStyles,
  customTextStyles,
  leftIconSource,
  noShadow,
  loading,
  disabled,
  onPressHandler,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonView,
        !noShadow && styles.shadow,
        customButtonStyles,
      ]}
      onPress={onPressHandler}
      disabled={disabled}
    >
      {leftIconSource && !loading && (
        <Image source={leftIconSource} style={imageStyles} />
      )}

      {loading ? (
        <ActivityIndicator
          color={Colors.WHITE}
          style={{ marginHorizontal: 8 }}
          size="small"
        />
      ) : (
        <Text style={[styles.text, customTextStyles]}>{text}</Text>
      )}

      {imageSource && !loading && (
        <Image source={imageSource} style={imageStyles} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
