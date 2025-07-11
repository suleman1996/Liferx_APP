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
  imageSource?: ImageSourcePropType;
  customStyle?: StyleProp<ImageStyle>;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.arrowView}>
        <Pressable onPress={() => navigation.goBack()}>
          <BackArrowIcon
            name="arrow-left-long"
            size={25}
            color={Colors.APP_COLOR}
            style={styles.arrowIcon}
          />
        </Pressable>
      </View>
      <View style={styles.center}>
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
    </View>
  );
};

export default Header;
