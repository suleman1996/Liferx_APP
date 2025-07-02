import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './style';

interface HeaderBarProps {
  name?: string;
  country?: string;
  handleMenuPress?: () => void;
}

const DrawerHeaderBar: React.FC<HeaderBarProps> = ({
  name,
  country,
  handleMenuPress,
}) => {
  return (
    <View style={styles.headerView}>
      <Pressable style={styles.menuView} onPress={handleMenuPress}>
        <Image
          source={require('../../Assets/Images/MenuIcon.png')}
          style={styles.menuIcon}
        />
      </Pressable>

      <View style={styles.centerView}>
        <Text style={styles.headerName}>{name}</Text>
        <View style={styles.locationView}>
          <Image
            source={require('../../Assets/Images/location.png')}
            style={styles.locationIcon}
          />
          <Text style={styles.countryName}>{country}</Text>
        </View>
      </View>

      <View style={styles.menuView}>
        <Image
          source={require('../../Assets/Images/NotificationIcon.png')}
          style={styles.menuIcon}
        />
      </View>
    </View>
  );
};

export default DrawerHeaderBar;
