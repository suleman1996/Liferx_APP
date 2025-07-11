import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
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
        <Pressable
          style={style.drawerItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={style.drawerText}>Profile</Text>
        </Pressable>

        <Pressable
          style={style.drawerItem}
          onPress={() => {
            navigation.navigate('Order', {
              fromDrawer: true,
              timestamp: Date.now(),
            });
          }}
        >
          <Text style={style.drawerText}>Order</Text>
        </Pressable>

        <Pressable
          style={style.drawerItem}
          onPress={() => {
            navigation.navigate('Shop', {
              fromDrawer: true,
              timestamp: Date.now(),
            });
          }}
        >
          <Text style={style.drawerText}>Shop</Text>
        </Pressable>
      </View>

      <View style={style.logoutWrapper}>
        <Pressable
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }}
        >
          <Text style={style.logoutText}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomDrawerContent;
