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
import BackArrowIcon from 'react-native-vector-icons/FontAwesome6';
import Colors from '../../utils/Colors/Colors';

interface HeaderProps {
  title?: string;
  leftImage?: ImageSourcePropType;
  rightImage?: ImageSourcePropType;
  leftImageStyle?: StyleProp<ImageStyle>;
  rightImageStyle?: StyleProp<ImageStyle>;
  onRightImagePress?: () => void;
  profileImageHandler?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  leftImage,
  rightImage,
  leftImageStyle,
  rightImageStyle,
  profileImageHandler,
  onRightImagePress,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        {leftImage ? (
          <Pressable onPress={profileImageHandler}>
            <Image source={leftImage} style={[styles.image, leftImageStyle]} />
          </Pressable>
        ) : (
          <Pressable onPress={() => navigation.goBack()}>
            <BackArrowIcon
              name="arrow-left-long"
              size={25}
              color={Colors.APP_COLOR}
              style={styles.arrowIcon}
            />
          </Pressable>
        )}
      </View>

      <View style={styles.center}>
        {title && <Text style={styles.title}>{title}</Text>}
      </View>

      <View style={styles.rightSection}>
        {rightImage && (
          <Pressable onPress={onRightImagePress}>
            <Image
              source={rightImage}
              style={[styles.image, rightImageStyle]}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Header;
