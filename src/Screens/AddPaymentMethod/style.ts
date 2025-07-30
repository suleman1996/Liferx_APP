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
    color: Colors.APP_COLOR,
    fontSize: w(22),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
  logo: {
    height: h(40),
    width: w(120),
    marginVertical: h(30),
  },
  subHeading: {
    color: Colors.APP_COLOR,
    fontSize: w(20),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    marginTop: h(15),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: h(25),
  },
  rowText: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontSize: w(16),
    maxWidth: '75%',
  },
  rowTex2: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(16),
  },
});
export default styles;
