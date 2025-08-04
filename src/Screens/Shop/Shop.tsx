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
} from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import { h, useTypedNavigation } from '../../utils/Helper/Helper';
import Colors from '../../utils/Colors/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { getServiceId, getServiceListing, getServices } from './actions';
import { RootState } from '../../Store';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';
import { weightLossUrl } from '../../utils/Constants/Constants';
import Icon from 'react-native-vector-icons/Feather';

const Shop: React.FC<any> = () => {
  const { services } = useSelector((state: RootState) => state.shopReducer);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useTypedNavigation();
  const dispatch = useDispatch();

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
            navigation.navigate('DecidingQuestions');
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
        {/* <Button
        text={
          item?.description
            ? 'Learn More'
            : item?.active
            ? 'Already Active'
            : 'Get Started'
        }
        customButtonStyles={[
          styles.customButtonStyles,
          {
            backgroundColor: item?.active
              ? Colors.PLACEHOLDER
              : Colors.APP_COLOR,
          },
        ]}
        customTextStyles={styles.customTextStyles}
        onPressHandler={() => {
          if(index === 2){
              Linking.openURL(weightLossUrl)
          }else{
            navigation.navigate('DecidingQuestions',{serviceId:item?.id})
          }
        }}
        noShadow
      /> */}
      </Pressable>
    );
  };

  const fetchServices = async () => {
    setLoading(true);
    try {
      await dispatch(getServices()).then((res: any) => {
        const response = res?.value?.data;
        console.log(response);
        
        dispatch(getServiceListing(response));
      }).catch((error)=>{
        console.log(error,'error')
      })
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomLoader visible={!refreshing && loading} />
      <Header title="Shop" />
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

          {services?.length > 0 && (
            <FlatList
              data={services}
              renderItem={renderItem}
              refreshControl={
                <RefreshControl
                  colors={[Colors.APP_COLOR]}
                  refreshing={refreshing}
                  onRefresh={async () => {
                    setRefreshing(true);
                    await fetchServices();
                    setRefreshing(false);
                  }}
                />
              }
              keyExtractor={item => item.id.toString()}
              // columnWrapperStyle={{ justifyContent: 'space-between' }}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: h(10), marginTop: h(20) }}
              style={{ flexGrow: 1 }}
            />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Shop;
