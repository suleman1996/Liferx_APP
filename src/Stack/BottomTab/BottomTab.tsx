import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import ProfileIcon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import Profile from '../../Screens/Profile/Profile';
import { h } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';
import Colors from '../../utils/Colors/Colors';
import Shop from '../../Screens/Shop/Shop';
import Order from '../../Screens/Order/Order';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { Pressable } from 'react-native';

type TabParamList = {
  Home?: undefined;
  Profile?: undefined;
  Shop?: undefined;
  Order?: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabs: React.FC = () => {
  const token = useSelector((state: RootState) => state.registerReducer?.token);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: h(12),
          fontFamily: FONTS.MONTSERRAT_MEDIUM,
          marginTop: h(2),
        },
        tabBarStyle: {
          height: h(90),
          paddingTop: h(10),
          backgroundColor: Colors.APP_COLOR,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 8,
        },
        tabBarActiveTintColor: Colors.WHITE,
        tabBarInactiveTintColor: Colors.GRAY,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon name="person" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon name="person" size={25} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon name="person" size={28} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabs;
