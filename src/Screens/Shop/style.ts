import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  mainContainer: {
    marginHorizontal: w(20),
    flexGrow: 1,
  },
  title: {
    color: Colors.APP_COLOR,
    marginTop: h(20),
    fontSize: w(25),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
  container: {
    backgroundColor: Colors.LIGHT_GRAY,
    width: '100%',
    borderRadius: 10,
    paddingTop: h(20),
    marginBottom: h(16),
  },
  image: {
    height: h(120),
    width: w(100),
    alignSelf: 'flex-end',
    resizeMode: 'cover',
    borderRadius:10
  },
  text: {
    color: Colors.APP_COLOR,
    fontSize: w(16),
    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
    paddingLeft: w(10),
  },
  descrption: {
    color: Colors.APP_COLOR,
    fontSize: w(12),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    paddingLeft: w(20),
    paddingTop: h(10),
  },
  customButtonStyles: {
    height: null,
    width: '80%',
    padding: h(10),
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: h(12),
  },
  customTextStyles: {
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(12),
  },
  status: {
    color: Colors.WHITE,
    width: w(60),
    textAlign: 'center',
    padding: h(8),
    borderRadius: 20,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    alignSelf: 'flex-end',
    right: w(15),
    fontSize: w(11),
  },
  arrowIcon: {
    backgroundColor: Colors.APP_COLOR,
    height: 28,
    width: 28,
    borderRadius: 28 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    left: w(10),
    bottom: h(10),
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default styles;
