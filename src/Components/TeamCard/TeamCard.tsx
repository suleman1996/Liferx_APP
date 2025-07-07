import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

interface ProductItem {
  id: number;
  image: any;
  name?: string;
  profession?: string;
  location?: string;
}

interface Props {
  item: ProductItem;
}

const TeamCard: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.mainView}>
        <View>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.profession}>{item?.profession}</Text>
          <View style={styles.locationView}>
            <Image
              source={require('../../Assets/Images/location.png')}
              style={styles.locationIcon}
            />
            <Text style={styles.location}>{item?.location}</Text>
          </View>
        </View>

        <View>
            <Image source={item?.image} style={styles.docImage}/>
        </View>
      </View>
    </View>
  );
};

export default TeamCard;
