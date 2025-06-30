import React, { useEffect } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import styles from './style';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Colors from '../../utils/Colors/Colors';
import HomePageCard from '../HomePageCard/HomePageCard';
import { h, w } from '../../utils/Helper/Helper';
import CommunityCard from '../CommunityCard/CommunityCard';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const HomeScreen: React.FC<any> = () => {
  const navigation = useNavigation();
  const COLORS = ['#F87171', '#FBBF24', '#34D399', '#60A5FA', '#A78BFA'];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header imageSource={require('../../Assets/Images/Logo.png')} />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginHorizontal: w('5%') }}>
          <Text style={styles.topText}>
            Amazing <Text style={styles.topText1}>research tools </Text>to
            increase your sales
          </Text>

          <Text style={styles.description}>
            The top <Text style={styles.highlight}>research tools</Text> for the
            products on Khogi exclusively. This app is going to help you in your
            overall product evaluation, product related keyword research,
            product hunting and{' '}
            <Text style={styles.highlight}>ranking of product</Text> on Khogi.
          </Text>

          <Button
            text="Join Founder's Club"
            imageSource={require('../../Assets/Images/downArrow.png')}
            imageStyles={styles.arrowIcon}
            customButtonStyles={styles.buttonStyles}
            onPressHandler={() => navigation.navigate('Login')}
          />
        </View>

        <ImageBackground
          source={require('../../Assets/Images/Banner.png')}
          style={styles.imageBackGround}
          resizeMode="contain"
        >
          <Text style={styles.backgroundText}>
            Let’s get you an{' '}
            <Text style={[styles.backgroundText, { color: Colors.WHITE }]}>
              extention
            </Text>{' '}
            which works {`\n`}on all{' '}
            <Text style={[styles.backgroundText, { color: Colors.WHITE }]}>
              chrome
            </Text>{' '}
            browsers.
          </Text>

          <Text style={styles.backgroundText1}>
            click down on the button to access the {'\n'}research tools easily.
          </Text>
          <Button
            text="Coming Soon"
            customButtonStyles={styles.btn}
            customTextStyles={styles.text}
            onPressHandler={() => {
              Toast.show({
                type: 'info',
                text1: 'Coming Soon',
              });
            }}
            noShadow
          />
        </ImageBackground>

        <HomePageCard
          title="SEO Optimization"
          imageSource={require('../../Assets/Images/HomePageCard.png')}
          description={
            <>
              Use{' '}
              <Text style={[styles.description, { color: Colors.APP_COLOR }]}>
                different keywords
              </Text>{' '}
              related to your product to optimize your ranking with the help of
              this app. using the right keyword will help you{' '}
              <Text style={[styles.description, { color: Colors.APP_COLOR }]}>
                to be ranked
              </Text>{' '}
              on the desired product’s page.
            </>
          }
        />

        <HomePageCard
          title="Web extentsions"
          imageSource={require('../../Assets/Images/HomePageCard2.png')}
          description={
            <>
              Khogi{' '}
              <Text style={[styles.description, { color: Colors.APP_COLOR }]}>
                Chrome Extension{' '}
              </Text>
              is one of the best to analyze your product and niche potential
              critically{' '}
              <Text style={[styles.description, { color: Colors.APP_COLOR }]}>
                right on Khogi.
              </Text>
            </>
          }
          customImageStyle={styles.cardImage}
        />

        <HomePageCard
          title="Use anytime when you need"
          imageSource={require('../../Assets/Images/HomePageCard3.png')}
          description={
            <>
              Making this app{' '}
              <Text style={[styles.description, { color: Colors.APP_COLOR }]}>
                user friendly
              </Text>{' '}
              and easy to access is one of the best features. use it{' '}
              <Text style={[styles.description, { color: Colors.APP_COLOR }]}>
                anywhere
              </Text>{' '}
              on your laptop, mobile or tab.
            </>
          }
          customImageStyle={[
            styles.cardImage,
            {
              height: h('15%'),
              width: w('55%'),
            },
          ]}
        />

        <HomePageCard
          title="Works as a virtual assistant"
          imageSource={require('../../Assets/Images/HomePageCard3.png')}
          description={
            <>
              Use{' '}
              <Text style={[styles.description, { color: Colors.APP_COLOR }]}>
                different keywords
              </Text>{' '}
              related to your product to optimize your ranking with the help of
              this app. using the right keyword will help you{' '}
              <Text style={[styles.description, { color: Colors.APP_COLOR }]}>
                to be ranked
              </Text>{' '}
              on the desired product’s page.
            </>
          }
          customImageStyle={[
            styles.cardImage,
            {
              height: h('15%'),
              width: w('55%'),
            },
          ]}
        />

        <View style={{ marginHorizontal: w('5%') }}>
          <Text style={styles.community}>Community</Text>
          <FlatList
            data={[1, 2, 3, 4]}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ index }) => {
              const color = COLORS[index % COLORS?.length];
              return (
                <CommunityCard
                  index={index}
                  name="Cameron Williamson"
                  avatar={require('../../Assets/Images/avatar.png')}
                  role="CEO"
                  highlightColor={color}
                  text="Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue."
                />
              );
            }}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 20,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
