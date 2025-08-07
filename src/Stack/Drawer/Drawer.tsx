import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import { w } from '../../utils/Helper/Helper';
import Order from '../../Screens/Order/Order';
import CustomDrawerContent from '../../Components/CustomDrawer/CustomDrawer';
import Shop from '../../Screens/Shop/Shop';
import Profile from '../../Screens/Profile/Profile';

type DrawerParamList = {
  DrawerHome?: undefined;
  Home?: undefined;
  Order?: undefined;
  Shop?: undefined;
  Profile?: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerStack: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        swipeEnabled: false,
        drawerStyle: {
          width: w('70%'),
        },
        drawerType: 'slide',
      }}
    >
      {/* <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      /> */}
      <Drawer.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Shop"
        component={Shop}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
