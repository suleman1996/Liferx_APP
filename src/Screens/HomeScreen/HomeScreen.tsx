import React, { useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import DrawerHeaderBar from '../../Components/DrawerHeader/DrawerHeader';
import LogoutIcon from 'react-native-vector-icons/AntDesign';
import { DrawerActions } from '@react-navigation/native';
import CustomTextInput from '../../Components/TextInput/TextInput';
import Colors from '../../utils/Colors/Colors';
import CustomCarousel from '../../Components/Carousel/Carousel';
import ProductCard from '../../Components/ProductCard/ProductCard';
import TeamCard from '../../Components/TeamCard/TeamCard';
import { h, useTypedNavigation, w } from '../../utils/Helper/Helper';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';
import styles from './style';
import Header from '../../Components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistor, RootState } from '../../Store';
import { getToken } from '../Auth/Login/actions';

const HomeScreen: React.FC<any> = () => {
  // const { token, userData } = useSelector((state: RootState) => state.login);
  const navigation = useTypedNavigation();
  const dispatch = useDispatch();

  const images = [
    { id: '1', image: require('../../Assets/Images/Banner.png') },
    { id: '2', image: 'https://picsum.photos/id/1016/600/300' },
    { id: '3', image: 'https://picsum.photos/id/1018/600/300' },
  ];
  const productData = [
    {
      id: 1,
      image: require('../../Assets/Images/Product1.png'),
      text: 'Generic Sildenafil1',
      month: '$17/month',
    },
    {
      id: 2,
      image: require('../../Assets/Images/Product2.png'),
      text: 'Viagra',
      month: '$17/month',
    },
    {
      id: 3,
      image: require('../../Assets/Images/Product3.png'),
      text: 'Generic Tadalfil',
      month: '$17/month',
    },
    {
      id: 3,
      image: require('../../Assets/Images/Product3.png'),
      text: 'Generic Tadalfil',
      month: '$17/month',
    },
  ];

  const teamData = [
    {
      id: 1,
      name: 'Dr. Hameed Q. Ali',
      profession: 'D.O., S.F.H.M. Medical Director',
      location: 'Elite Ortho Clinic, USA',
      image: require('../../Assets/Images/Doc.png'),
    },
    {
      id: 2,
      name: 'Dr. Hameed Q. Ali',
      profession: 'D.O., S.F.H.M. Medical Director',
      location: 'Elite Ortho Clinic, USA',
      image: require('../../Assets/Images/Doc2.png'),
    },
    {
      id: 3,
      name: 'Dr. Hameed Q. Ali',
      profession: 'D.O., S.F.H.M. Medical Director',
      location: 'Elite Ortho Clinic, USA',
      image: require('../../Assets/Images/Doc3.png'),
    },
  ];

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await AsyncStorage.removeItem('token');
            dispatch(getToken(''));
            navigation.replace('Login');
          },
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        title="Home"
        leftImage={require('../../Assets/Images/DefaultIcon.png')}
        leftImageStyle={styles.leftImageStyle}
        rightImage={
          <LogoutIcon
            name={'logout'}
            size={20}
            color={Colors.APP_COLOR}
            style={styles.logoutIcon}
            onPress={() => handleLogout()}
          />
        }
        profileImageHandler={() => navigation.navigate('Profile')}
      />

      <View style={styles.mainContainer}>
        {/* <DrawerHeaderBar
          name="Suleman Amjad"
          country="USA"
          handleMenuPress={() =>
            navigation.dispatch(DrawerActions.openDrawer())
          }
        /> */}

        <CustomTextInput
          customInputWrapper={styles.wrapper}
          customInputStyles={styles.inputStyle}
          placeholder="Search doctor..."
          placeholderTextColor={Colors.PLACEHOLDER}
          leftImage={require('../../Assets/Images/searchIcon.png')}
          selectionColor={Colors.APP_COLOR}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: Platform.select({
              ios: h(150),
              android: h(200),
            }),
          }}
        >
          <CustomCarousel data={images} />
          <View style={styles.productView}>
            <Text style={styles.text}>Our Products</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>

          <FlatList
            data={productData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => (
              <ProductCard item={item} index={index} />
            )}
            contentContainerStyle={[
              styles.contentContainer,
              { marginBottom: h(20), paddingHorizontal: w(5) },
            ]}
          />
          <Text style={styles.text1}>Meet our Team</Text>

          <FlatList
            data={teamData}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <TeamCard item={item} />}
            contentContainerStyle={[
              styles.contentContainer,
              { marginBottom: h(20), paddingHorizontal: w(5) },
            ]}
            ItemSeparatorComponent={() => <View style={{ height: h(25) }} />}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
