import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Alert } from 'react-native';
import { h } from '../utils/Helper/Helper';
import Colors from '../utils/Colors/Colors';
import HomeScreen from '../Components/Homescreen/Homescreen';
import { FONTS } from '../Assets/Fonts/Fonts';

const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors.APP_COLOR,
        tabBarInactiveTintColor: Colors.BLACK,
        tabBarIcon: () => null,
        tabBarLabelStyle: {
          fontSize: h('2%'),
          fontFamily: FONTS.HIND_SEMIBOLD,
          bottom: 10,
        },
        tabBarStyle: {
          height: h('8%'),
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 10,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="LogOut"
        component={() => null}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            Alert.alert(
              'Log out',
              'Are you sure you want to log out?',
              [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {
                  text: 'Log Out',
                  style: 'destructive',
                  onPress: () => {
                    console.log('User logged out');
                    // navigation.navigate('Login')
                  },
                },
              ],
              { cancelable: false },
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
