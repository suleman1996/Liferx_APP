import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import styles from './style';
import { w } from '../../utils/Helper/Helper';

interface Props {
  text?: string;
  name?: string;
  role?: string;
  avatar?: ImageSourcePropType;
  highlightColor?: string;
  index?: number;
}

const CommunityCard: React.FC<Props> = ({
  text,
  name,
  role,
  avatar,
  highlightColor,
  index,
}) => {
  return (
    <View
      style={[
        styles.card,
        {
          borderTopColor: highlightColor,
          marginLeft: index === 0 ? w(3) : w(20),
        },
      ]}
    >
      <Text style={styles.text}>{text}</Text>
      <View style={styles.footer}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.name}>
          <Text style={styles.bold} numberOfLines={1} ellipsizeMode="tail">
            {name},{' '}
          </Text>
          <Text style={styles.role}>{role}</Text>
        </View>
      </View>
    </View>
  );
};

export default CommunityCard;
