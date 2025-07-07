import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const Order: React.FC<any> = () => {
  const navigation = useNavigation();

  // const route = useRoute();
  // const { fromDrawer, timestamp } = route?.params || {};

  // useEffect(() => {
  //   if (fromDrawer) {
  //     Alert.alert('hi g');
  //   }
  // }, [timestamp]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>on click</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Order;
