import { StyleSheet } from 'react-native';
import Colors from '../../../utils/Colors/Colors';
import { h, w } from '../../../utils/Helper/Helper';
import { FONTS } from '../../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: w('8%'),
  },
  title: {
    marginTop: h(50),
    fontSize: w(20),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.APP_COLOR,
    maxWidth: w(317),
  },
  title1: {
    marginTop: h(10),
    fontSize: w(14),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.APP_COLOR,
    maxWidth: w(317),
  },
  customInputStyle: {
    height: h(60),
    fontSize: w(14),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
  },
  inputContainer: {
    marginTop: h(50),
  },
  button: {
    width: 'auto',
    marginTop: h(5),
  },
  btnText: {
    fontSize: h(14),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.WHITE,
  },
  customErrorStyle: {
    marginLeft: w(20),
  },
  logo: {
    height: h(53),
    width: w(160),
    alignSelf: 'center',
    marginTop: h(80),
  },
  text: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontSize: w(14),
    textAlign: 'center',
    marginTop: h(25),
  },
  eyeIcon: {
    right: 10,
  },
});
export default styles;
