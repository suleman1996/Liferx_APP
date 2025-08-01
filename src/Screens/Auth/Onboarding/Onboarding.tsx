import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native';
import styles from './style';
import { h, useTypedNavigation, w } from '../../../utils/Helper/Helper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../utils/Colors/Colors';
import Button from '../../../Components/Button/Button';
import { FONTS } from '../../../Assets/Fonts/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setOnBoarding } from './action';
import { RootState } from '../../../Store';

const Oboarding: React.FC<any> = () => {
  const dispatch = useDispatch();
  const navigation = useTypedNavigation();
  const { token } = useSelector((state: RootState) => state?.login);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = React.useRef<FlatList>(null);

  const slides = [
    {
      id: '1',
      title: 'Getting Prescriptions Just Got Easier',
      image: require('../../../Assets/Images/onBoard2.png'),
      backgroundColor: Colors.PARROT_GREEN,
      textColor: Colors.APP_COLOR,
    },
    {
      id: '2',
      title: 'Access your Prescriptions and Orders in One Place',
      image: require('../../../Assets/Images/onBoard4.png'),
      backgroundColor: Colors.SEA_GREEN,
      textColor: Colors.WHITE,
    },
    {
      id: '3',
      title: 'Allow Notifications to stay up-to-date',
      image: require('../../../Assets/Images/onBoard3.png'),
      backgroundColor: Colors.LIGHT_BROWN,
      showNotificationButtons: true,
      textColor: Colors.WHITE,
    },
    {
      id: '4',
      title: 'Start your health journey today',
      image: require('../../../Assets/Images/onBoard1.png'),
      backgroundColor: Colors.SKY_BLUE,
      textColor: Colors.WHITE,
      showFinalButtons: true,
    },
  ];

  const goToNextSlide = async () => {
    if (currentIndex < slides?.length - 1) {
      await AsyncStorage.getItem('onBoard');
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      flatListRef?.current?.scrollToIndex({ index: newIndex, animated: true });
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={[styles.slide, { backgroundColor: item?.backgroundColor }]}>
      <View style={{ width: '70%', alignSelf: 'center' }}>
        <Text style={[styles.title, { color: item?.textColor }]}>
          {item?.title}
        </Text>
      </View>

      {item?.showNotificationButtons && (
        <View style={styles.buttonGroup}>
          <Button
            text="Allow Notifications"
            noShadow
            customButtonStyles={styles.notiButtonStyles}
            customTextStyles={styles.customTextStyles}
            onPressHandler={goToNextSlide}
          />
          <Pressable onPress={goToNextSlide}>
            <Text style={styles.linkText}>Not Allow</Text>
          </Pressable>
        </View>
      )}

      <View style={[styles.imageWrapper, { flex: currentIndex === 3 ? 0 : 1 }]}>
        <Image
          source={item?.image}
          resizeMode="cover"
          borderRadius={10}
          style={[currentIndex === 2 ? styles.bottomRightImage : styles.image]}
        />
      </View>

      {item?.showFinalButtons && (
        <View style={styles.buttonGroup}>
          <Button
            text="GET STARTED"
            customButtonStyles={styles.getStarted}
            customTextStyles={styles.getStartedText}
            noShadow
            onPressHandler={async () => {
              try {
                await AsyncStorage.setItem('onBoard', 'true');
                dispatch(setOnBoarding(true));
                navigation.navigate('Login');
              } catch (err) {
                console.log('Failed to save onBoarding flag:', err);
              }
            }}
          />
          <Button
            text="Already have an account?"
            customButtonStyles={{
              backgroundColor: Colors.WHITE,
              width: '70%',
              marginHorizontal: w(1),
              marginTop: h(20),
            }}
            customTextStyles={{
              fontSize: w(16),
              fontFamily: FONTS.MONTSERRAT_MEDIUM,
              color: Colors.SKY_BLUE,
            }}
            onPressHandler={() => {
              navigation.navigate('Login');
            }}
            noShadow
          />
        </View>
      )}

      {currentIndex !== 3 && currentIndex !== 2 && (
        <Pressable
          onPress={goToNextSlide}
          style={[
            styles.nextButton,
            {
              backgroundColor:
                currentIndex === 0 ? Colors.APP_COLOR : Colors.WHITE,
            },
          ]}
        >
          <Ionicons
            name="arrow-forward"
            size={25}
            color={currentIndex === 0 ? Colors.WHITE : Colors.APP_COLOR}
          />
        </Pressable>
      )}
    </View>
  );

  return (
    <View style={styles.safeAreaView}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
        extraData={currentIndex}
      />
    </View>
  );
};
export default Oboarding;
