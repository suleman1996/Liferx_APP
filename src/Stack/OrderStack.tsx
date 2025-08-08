import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Order from '../Screens/Order/Order';
import OrderTracking from '../Screens/Order/OrderTracking/OrderTracking';

const Stack = createNativeStackNavigator();

const OrderStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OrderScreen" component={Order} />
      <Stack.Screen
        name="OrderTracking"
        component={OrderTracking}
        options={{
          presentation: 'card', // optional
          animation: 'slide_from_right', // optional
          tabBarStyle: { display: 'none' },
        }}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;
