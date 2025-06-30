import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  View,
  ViewStyle,
  Text,
  Pressable,
  ImageStyle,
  TextStyle,
} from 'react-native';
import styles from './style';

interface HeaderProps {
  text: string;
  imageSource?: ImageSourcePropType;
  leftIconSource?:ImageSourcePropType;
  imageStyles?: ImageStyle;
  customButtonStyles?: StyleProp<ViewStyle>;
  customTextStyles?: StyleProp<TextStyle>;
  onPressHandler?: () => void;
  noShadow?: boolean; 
}

const Button: React.FC<HeaderProps> = ({
  text,
  imageSource,
  customButtonStyles,
  imageStyles,
  customTextStyles,
  leftIconSource,
  noShadow,
  onPressHandler,
}) => {
  return (
    <Pressable
      style={[styles.buttonView,!noShadow && styles.shadow, customButtonStyles]}
      onPress={onPressHandler}
    >
      {leftIconSource && <Image source={leftIconSource} style={imageStyles} />}
      <Text style={[styles.text, customTextStyles]}>{text}</Text>
      {imageSource && <Image source={imageSource} style={imageStyles} />}
    </Pressable>
  );
};

export default Button;
