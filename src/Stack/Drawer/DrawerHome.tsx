import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

const DrawerHome = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inside Drawer UI</Text>
      <Button title="Open Drawer" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
    </View>
  );
};

export default DrawerHome;
