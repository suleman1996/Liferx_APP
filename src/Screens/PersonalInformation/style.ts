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
  heading: {
    marginTop: h(20),
    color: Colors.APP_COLOR,
    fontSize: w(20),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
  customInputStyle: {
    borderRadius: 16,
    height: h(60),
    fontSize: w(14),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
  },
  customLabelStyles: {
    color: Colors.APP_COLOR,
    fontSize: w(18),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    paddingBottom: h(10),
  },
  inputContainer: {
    marginTop: h(30),
  },
  customContainerStyle: {
    marginTop: 0,
  },
  customDatePickerInput: {
    marginTop: 0,
  },
  customSearchDropDownContainer: {
    marginHorizontal: w(0),
    borderRadius: 16,
    marginTop: h(0),
  },
  customAddressContainerStyle: {

  },
  customInputStyles: {
    color: Colors.APP_COLOR,
  },
});
export default styles;
