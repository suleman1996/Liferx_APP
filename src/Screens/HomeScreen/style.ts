import { StyleSheet } from 'react-native';
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
  },
  inputContainer: {
    borderRadius: 8,
    borderWidth: 0,
  },
  inputStyle: {
    backgroundColor: Colors.LIGHT_GRAY,
    height: h(40),
    fontSize: w(14),
    paddingLeft: 10,
  },
  wrapper: {
    backgroundColor: Colors.LIGHT_GRAY,
    borderWidth: 0,
    borderRadius: w(8),
    marginTop: h(20),
  },
  productView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: h(10),
  },
  text: {
    fontSize: w(15),
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
  seeAll: {
    fontSize: w(12),
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
  },
  contentContainer: {
    marginTop: h(15),
  },
  text1: {
    fontSize: h(20),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.APP_COLOR,
    marginTop: h(15),
  },
  leftImageStyle: {
    height: h(35),
    width: w(35),
  },
});
export default styles;
