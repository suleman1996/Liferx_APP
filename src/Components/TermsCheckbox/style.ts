import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  titleText: {
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(16),
    marginBottom: 4,
    color: Colors.APP_COLOR,
  },
  descriptionText: {
    fontSize: w(14),
    color: Colors.APP_COLOR,
    lineHeight: 20,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
  },
  linkText: {
    color: Colors.APP_COLOR,
    textDecorationLine: 'underline',
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
});
export default styles;
