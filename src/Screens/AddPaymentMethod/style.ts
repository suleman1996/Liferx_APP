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
  cardContainer: {
    height: h(60),
    borderRadius: 10,
  },
  cardStyle: {
    backgroundColor: Colors.WHITE,
    textColor: Colors.APP_COLOR,
    placeholderColor: Colors.APP_COLOR,
    borderRadius: 10,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(16),
    textErrorColor: Colors.error,
    cursorColor: Colors.APP_COLOR,
  },
  customTextStyles: {
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(16),
    color: Colors.WHITE,
  },
  customButtonStyles: {
    marginTop: h(20),
  },
  dialogHeading: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
    fontSize: w(16),
    paddingTop: h(25),
  },
  dialogSubHeading: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(16),
    paddingTop: h(15),
    flexGrow: 1,
  },
  listView: {
    flexDirection: 'row',
    marginBottom: h(10),
    marginTop: h(10),
  },
  listText: {
    marginLeft: 8,
    fontSize: w(14),
    flexGrow: 1,
    width: '90%',
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
  },
  closeIcon: {
    alignSelf: 'flex-end',
    marginBottom: h(10),
  },
});
export default styles;
