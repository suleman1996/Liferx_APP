import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import style from './style';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = ({
  navigation,
}) => {
  return (
    <View style={style.container}>
      <View style={style.logoWrapper}>
        <Image
          source={require('../../Assets/Images/logo.png')}
          style={style.logo}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Pressable
          style={style.drawerItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={style.drawerText}>Home</Text>
        </Pressable>

        <TouchableOpacity
          style={style.drawerItem}
          onPress={() => {
            navigation.navigate('Order', {
              fromDrawer: true,
              timestamp: Date.now(),
            });
          }}
        >
          <Text style={style.drawerText}>Order</Text>
        </TouchableOpacity>
      </View>

      <View style={style.logoutWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }}
        >
          <Text style={style.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default CustomDrawerContent;
