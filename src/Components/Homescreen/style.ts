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
  topText: {
    fontSize: w(25),
    fontFamily: FONTS.HIND_BOLD,
    color: Colors.BLACK,
    marginTop: h('2%'),
  },
  topText1: {
    fontSize: w(25),
    fontFamily: FONTS.HIND_BOLD,
    color: Colors.APP_COLOR,
  },
  container: {
    // marginHorizontal: w('5%'),
  },
  description: {
    fontSize: w('3.8%'),
    color: Colors.DARK_GREY,
    marginTop: h('2%'),
    fontFamily: FONTS.HIND_REGULAR,
  },
  highlight: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.HIND_REGULAR,
  },
  arrowIcon: {
    height: h(8),
    width: w(12),
  },
  buttonStyles: {
    marginTop: h(25),
  },
  btn: {
    backgroundColor: Colors.WHITE,
    width: w(100),
    height: h(25),
    marginTop: h(10),
  },
  imageBackGround: {
    marginTop: h(30),
    paddingBottom: h(10),
    marginHorizontal: w('5%'),
    paddingLeft: w(20),
  },
  backgroundText: {
    fontSize: h(16),
    fontFamily: FONTS.HIND_SEMIBOLD,
    paddingTop: h(10),
  },
  backgroundText1: {
    fontSize: w(13),
    fontFamily: FONTS.HIND_SEMIBOLD,
    color: Colors.WHITE,
  },
  text: {
    color: Colors.APP_COLOR,
    fontSize: w(12),
    fontFamily: FONTS.HIND_BOLD,
  },
  cardImage: {
    height: h('20%'),
    width: w('60%'),
  },
  community: {
    fontSize: w(25),
    fontFamily: FONTS.HIND_BOLD,
    marginTop: h(20),
  },
});
export default styles;
