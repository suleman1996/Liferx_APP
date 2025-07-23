import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import { h, useTypedNavigation, w } from '../../utils/Helper/Helper';
import Button from '../../Components/Button/Button';
import Colors from '../../utils/Colors/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from './actions';
import { RootState } from '../../Store';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';

const servicesData = [
  {
    title: 'Regrow Hair',
    icon: require('../../Assets/Images/Hair.png'),
    active: false,
  },
  {
    title: 'Better Sex',
    icon: require('../../Assets/Images/MinoxiBlend.png'),
    active: true,
  },
  {
    title: 'Weight Loss',
    description: 'Clinical support meets real results.',
    active: false,
  },
];

const Shop: React.FC<any> = () => {
  const { services } = useSelector((state: RootState) => state.shopReducer);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useTypedNavigation();
  const dispatch = useDispatch();

  const renderItem = ({ item }: any) => (
    <View style={styles.container}>
      <Text
        style={[
          styles.status,
          item?.active
            ? { backgroundColor: Colors.LIGHT_GREEN }
            : { opacity: 0 },
        ]}
      >
        Active
      </Text>

      {item?.image ? (
        <Image source={{ uri: item?.image }} style={styles.image} />
      ) : (
        <View style={[{ opacity: 0 }]} />
      )}
      <Text style={styles.text}>{item?.name}</Text>
      {item?.description && (
        <Text style={styles.descrption}>{item?.description}</Text>
      )}
      <Button
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
        onPressHandler={() => navigation.navigate('DecidingQuestions')}
        noShadow
      />
    </View>
  );

  const fetchServices = async () => {
    setLoading(true);
    try {
      await dispatch(getServices());
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
        <Text style={styles.title}>Services</Text>

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
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: h(10), marginTop: h(20) }}
          style={{ flexGrow: 1 }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Shop;
