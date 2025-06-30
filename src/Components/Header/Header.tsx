import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleProp,
  Text,
  View,
} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  imageSource?: ImageSourcePropType;
  customStyle?: StyleProp<ImageStyle>;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ imageSource, customStyle, title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {title && (
        <View style={styles.arrowView}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require('../../Assets/Images/leftArrow.png')}
              style={styles.arrowIcon}
            />
          </Pressable>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      {imageSource && (
        <Image source={imageSource} style={[styles.headerImage, customStyle]} />
      )}
    </View>
  );
};

export default Header;
