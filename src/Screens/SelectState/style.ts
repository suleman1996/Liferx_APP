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
    backgroundColor: Colors.LIGHT_GRAY,
    marginTop: h(30),
    borderRadius: 10,
    paddingBottom: h(50),
    paddingTop: h(50),
  },
  logo: {
    height: h(40),
    width: w(120),
    marginLeft: w(20),
  },
  title: {
    marginLeft: w(20),
    fontSize: w(20),
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
    marginTop: h(40),
  },
  description: {
    marginLeft: w(20),
    fontSize: w(15),
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    marginTop: h(12),
  },
  customLabelStyles: {
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.APP_COLOR,
    fontSize: w(18),
  },
  CustomDropdownContainer: {
    marginTop: h(15),
    width: '90%',
    marginLeft: w(20),
  },
  style: {
    width: '90%',
    marginLeft: w(20),
  },
  contentContainer: {},
  customButtonStyles: {
    marginHorizontal: w(20),
    marginTop: h(20),
  },
  customTextStyles: {
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(16),
  },
  bottomText: {
    paddingHorizontal: w(20),
    marginTop: h(30),
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontSize: w(15),
    textAlign: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    flex: 1,
  },
});
export default styles;
