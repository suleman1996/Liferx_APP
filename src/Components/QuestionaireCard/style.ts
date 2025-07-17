import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GRAY,
    marginTop: h(30),
    borderRadius: 10,
    paddingBottom: h(40),
    paddingTop: h(40),
  },
  logo: {
    height: h(40),
    width: w(120),
    marginLeft: w(20),
  },
  question: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(18),
    paddingLeft: w(20),
    paddingTop: h(20),
  },
  optionsView: {
    backgroundColor: Colors.WHITE,
    marginTop: h(25),
    marginHorizontal: w(20),
    paddingTop: h(20),
    paddingBottom: h(20),
    paddingLeft: w(10),
    borderRadius: 10,
  },
  options: {
    fontSize: h(14),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.APP_COLOR,
  },
  customButtonStyles: {
    marginHorizontal: w(20),
    marginTop: h(20),
  },
  customTextStyles: {
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(16),
  },
  customInputWrapper: {
    marginHorizontal: w(20),
    height: h(60),
  },
  customLabelStyles: {
    paddingLeft: w(20),
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontSize: w(16),
    paddingTop: h(10),
    paddingBottom: h(10),
  },
  customInputStyles: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontSize: w(14),
    paddingLeft: 0,
  },
  containerStyle: {
    marginBottom: h(0),
  },
});

export default styles;
