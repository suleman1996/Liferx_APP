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
  logo: {
    height: h(40),
    width: w(120),
    marginVertical: h(30),
  },
  heading: {
    color: Colors.APP_COLOR,
    fontSize: w(22),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
  description: {
    marginTop: h(15),
    fontSize: w(15),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.APP_COLOR,
  },
  givenNumber: {
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.APP_COLOR,
  },
  customButtonStyles: {
    marginTop: h(30),
  },
  phoneNumberText: {
    textAlign: 'center',
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.APP_COLOR,
    textDecorationLine: 'underline',
    fontSize: w(16),
    marginVertical: h(20),
  },
  text: {
    textAlign: 'center',
    fontSize: w(16),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.APP_COLOR,
  },
  resend: {
    fontSize: w(16),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.APP_COLOR,
    textDecorationLine: 'underline',
  },
  timerText: {
    textAlign: 'center',
    fontSize: w(14),
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    marginTop: h(15),
  },
  text2: {
    textAlign: 'center',
    marginTop: h(20),
    fontSize: w(13),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.DARK_GREY,
  },
});
export default styles;
