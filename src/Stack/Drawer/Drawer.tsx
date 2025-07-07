import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import { w } from '../../utils/Helper/Helper';
import Order from '../../Screens/Order/Order';
import CustomDrawerContent from '../../Components/CustomDrawer/CustomDrawer';

type DrawerParamList = {
  DrawerHome?: undefined;
  Home?: undefined;
  Order?: undefined;
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
          width: w(320),
        },
        drawerType: 'slide',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
