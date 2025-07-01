import { StyleSheet } from 'react-native';
import { h, w } from '../../utils/Helper/Helper';
import Colors from '../../utils/Colors/Colors';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  container: {
    marginTop: h(50),
    alignItems: 'center',
  },
  otpBox: {
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    borderRadius: 6,
    width: w(44),
    height: h(44),
  },
  otpText: {
    fontSize: w(16),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.APP_COLOR,
  },
});

export default styles;
