import { Dimensions, Platform, StyleSheet } from 'react-native';
import Colors from '../../../utils/Colors/Colors';
import { h, w } from '../../../utils/Helper/Helper';
import { FONTS } from '../../../Assets/Fonts/Fonts';

const { width, height: windowHeight } = Dimensions.get('window');
const { height: screenHeight } = Dimensions.get('screen');

const CORNER_IMAGE_WIDTH = width * 1.0;
const CORNER_IMAGE_HEIGHT = CORNER_IMAGE_WIDTH * (462 / 375);

const CENTER_IMAGE_WIDTH = width * 0.7;
const CENTER_IMAGE_HEIGHT = CENTER_IMAGE_WIDTH * (342 / 275);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },

  buttonGroup: {
    alignItems: 'center',
    marginTop: w(20),
  },
  primaryButton: {
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: '600',
  },
  linkText: {
    color: Colors.WHITE,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    textDecorationLine: 'underline',
    fontSize: w(16),
    marginTop: h(15),
  },
  nextButton: {
    position: 'absolute',
    right: 30,
    bottom: h(150),
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextArrow: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  notiButtonStyles: {
    backgroundColor: Colors.WHITE,
    width: '100%',
    marginLeft: w(30),
    marginRight: w(30),
    marginTop: h(20),
  },
  customTextStyles: {
    fontSize: w(16),
    color: Colors.LIGHT_BROWN,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },

  slide: {
    width,
    height: Platform.OS === 'android' ? screenHeight : windowHeight,
    paddingTop: h(50),
  },
  title: {
    fontSize: h(28),
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    width: w(275),
    // marginTop: h(20),
  },
  imageWrapper: {
    // flex: 1,
  },
  image: {
    width: 275,
    height: 342,
    alignSelf: 'center',
    marginTop: h(50),
  },

  bottomRightImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: CORNER_IMAGE_WIDTH,
    height: CORNER_IMAGE_HEIGHT,
  },
  getStarted: {
    backgroundColor: Colors.WHITE,
    width: '100%',
    marginLeft: w(30),
    marginRight: w(30),
    marginTop: h(30),
  },
  getStartedText: {
    fontSize: w(16),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.SKY_BLUE,
  },
});
export default styles;
