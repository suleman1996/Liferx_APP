import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  SafeAreaView,
  RefreshControl,
  Linking,
  Pressable,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import { h, useTypedNavigation } from '../../utils/Helper/Helper';
import Colors from '../../utils/Colors/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';
import { weightLossUrl } from '../../utils/Constants/Constants';
import LogoutIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getToken } from '../Auth/Register/actions';
import { getServiceId } from '../Shop/actions';

const ShopNow: React.FC<any> = ({route}) => {
  const { fromHome } = route?.params || {};  
  const { services } = useSelector((state: RootState) => state.shopReducer);
  const navigation = useTypedNavigation();
  const dispatch = useDispatch();


  const productData = [
    {
      id: 1,
      image: require('../../Assets/Images/Product1.png'),
      // text: 'Generic Sildenafil1',
      text: 'Fight Hair Loss',
      month: '$17/month',
      serviceID: 2,
    },
    {
      id: 2,
      image: require('../../Assets/Images/Product2.png'),
      text: 'Boost Sex Performance',
      // text: 'Viagra',
      month: '$17/month',
      serviceID: 3,
    },
    {
      id: 3,
      image: require('../../Assets/Images/Product3.png'),
      text: 'Weight Loss',
      // text: 'Generic Tadalfil',
      month: '$17/month',
    },
  ];

  const getImages = (index: number) => {
    switch (index) {
      case 0:
        return require('../../Assets/Images/weightloss.png');
      case 1:
        return require('../../Assets/Images/hairloss.png');
      default:
        return require('../../Assets/Images/half-med.png');
    }
  };

  const getText = (index: number) => {
    switch (index) {
      case 0:
        return 'Weight Loss';
      case 1:
        return 'Regrow Hair';
      default:
        return 'Better Sex';
    }
  };

  const renderItem = ({ item, index }: any) => {
    return (
      <Pressable
        style={styles.container}
        onPress={() => {
          if (index === 0) {
            Linking.openURL(weightLossUrl);
          } else {
            dispatch(getServiceId(item?.id));
            navigation.navigate('DecidingQuestions',{fromHome});
          }
        }}
      >
        <Text style={styles.text}>{getText(index)}</Text>
        {item?.image ? (
          <View style={styles.imageView}>
            <View style={styles.arrowIcon}>
              <Icon
                name={index === 0 ? 'arrow-up-right' : 'arrow-down'}
                color={Colors.WHITE}
                size={16}
              />
            </View>
            <Image source={getImages(index)} style={styles.image} />
          </View>
        ) : (
          <View style={[{ opacity: 0 }]} />
        )}
        {item?.description && (
          <Text style={styles.descrption}>{item?.description}</Text>
        )}
      </Pressable>
    );
  };


  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        title="Shop"
      />
      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: Platform.select({
              ios: h(100),
              android: h(80),
            }),
          }}
        >
          <Text style={styles.title}>Services</Text>

            <FlatList
              data={productData}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: h(10), marginTop: h(20) }}
              style={{ flexGrow: 1 }}
            />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default ShopNow;
