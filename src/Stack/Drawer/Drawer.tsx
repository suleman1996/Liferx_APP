import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View, Text, Button, Image } from 'react-native';
import DrawerHome from './DrawerHome';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import { h, w } from '../../utils/Helper/Helper';
import Colors from '../../utils/Colors/Colors';
import { FONTS } from '../../Assets/Fonts/Fonts';

type DrawerParamList = {
  DrawerHome?: undefined;
  Home?: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerStack: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => {
        return (
          <DrawerContentScrollView
            {...props}
            contentContainerStyle={{ flex: 1, backgroundColor: Colors.WHITE }}
          >
            <View style={{ padding: 20 }}>
              <Image
                source={require('../../Assets/Images/logo.png')}
                style={{
                  height: h(53),
                  width: w(160),
                  alignSelf: 'center',
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.WHITE,
              }}
            >
              <DrawerItemList {...props} />
            </View>
          </DrawerContentScrollView>
        );
      }}
      screenOptions={{
        drawerItemStyle: {
          borderRadius: 10,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontFamily: FONTS.MONTSERRAT_MEDIUM,
          color: Colors.WHITE,
        },
        drawerActiveTintColor: Colors.BLACK,
        drawerActiveBackgroundColor: Colors.APP_COLOR,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {/* <Drawer.Screen
        name="DrawerHome"
        component={DrawerHome}
        options={{ headerShown: false }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerStack;
