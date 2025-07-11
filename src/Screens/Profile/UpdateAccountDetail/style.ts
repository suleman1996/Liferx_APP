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
    marginHorizontal: w(20),
    marginTop: h(10),
  },
  customLabelStyles: {
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.APP_COLOR,
    fontSize: w(18),
  },
  customInputStyle: {
    borderRadius: 16,
    height: h(60),
  },
  inputContainer: {
    marginTop: h(20),
  },
  customButtonStyles: {
    marginTop: h(20),
    width: w(120),
    alignSelf: 'flex-end',
  },
  customTextStyles: {
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.WHITE,
    fontSize: h(18),
  },
});
export default styles;
