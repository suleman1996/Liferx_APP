import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  headerImage: {
    height: h(35),
    width: w(90),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: w('5%'),
  },
  mainContainer: {
    backgroundColor: Colors.WHITE,
    marginHorizontal: w('5%'),
    borderRadius: 10,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // Android shadow
    elevation: 5,
    marginTop: h('10%'),
    paddingBottom: h('3%'),
    paddingTop: h('3%'),
  },

  emailTitle: {
    fontFamily: FONTS.HIND_REGULAR,
    fontSize: h(20),
    color: Colors.BLACK,
  },
  customInputStyle: {
    marginHorizontal: w(20),
  },
  customLabelStyle: {
    marginHorizontal: w(20),
    paddingBottom: h(10),
  },
  button: {
    width: 'auto',
    marginHorizontal: w(20),
  },
  googleButton: {
    width: 'auto',
    marginHorizontal: w(20),
    justifyContent: 'center',
    backgroundColor: Colors.LIGHT_ORANGE,
  },
  orText: {
    textAlign: 'center',
    marginTop: h(10),
    marginBottom: h(10),
    fontFamily: FONTS.HIND_REGULAR,
    fontSize: w(18),
  },
  iconStyles: {
    height: h(20),
    width: w(20),
    right: w(20),
  },
  googleText: {
    color: Colors.BLACK,
    fontFamily: FONTS.HIND_SEMIBOLD,
    fontSize: w(16),
  },
  thanksLogo: {
    height: h(150),
    width: w(200),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  thanksText: {
    color: Colors.BLACK,
    fontSize: w(20),
    fontFamily: FONTS.HIND_BOLD,
    textAlign: 'center',
  },
  description: {
    color: Colors.BLACK,
    fontSize: w(15),
    fontFamily: FONTS.HIND_SEMIBOLD,
    textAlign: 'center',
  },
  description2: {
    color: Colors.BLACK,
    fontSize: w(13),
    fontFamily: FONTS.HIND_REGULAR,
    textAlign: 'center',
  },
  customErrorStyle:{
    marginLeft: w(20),
  }
});
export default styles;
