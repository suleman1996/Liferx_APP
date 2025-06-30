import React from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';
import styles from './style';

interface CardProps {
  title: string;
  imageSource?: ImageSourcePropType;
  description?: string | React.ReactNode;
  customImageStyle?: StyleProp<ImageStyle>;
}

const HomePageCard: React.FC<CardProps> = ({
  title,
  imageSource,
  description,
  customImageStyle,
}) => {
  return (
    <View style={styles.cardView}>
      <Text style={styles.text}>{title}</Text>
      <Image source={imageSource} style={[styles.image, customImageStyle]} />
      <Text style={styles.description}>{description}</Text>
      <Pressable style={styles.arrowIconView}>
        <Text style={styles.text2}>Learn More</Text>
        <Image
          source={require('../../Assets/Images/leftArrow.png')}
          style={styles.arrowIcon}
        />
      </Pressable>
    </View>
  );
};
export default HomePageCard;
