import { StyleSheet } from 'react-native';
import { h, w } from '../../utils/Helper/Helper';
import Colors from '../../utils/Colors/Colors';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  container: {
    marginTop: h(30),
    alignItems: 'center',
  },
  otpBox: {
    borderColor: Colors.BORDER_COLOR,
  },
  otpText: {
    fontSize: w(18),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.APP_COLOR,
  },
});

export default styles;
