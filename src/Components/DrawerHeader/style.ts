import { Platform, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

export default StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? h(15) : h(30),
  },
  menuView: {
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    height: h(48),
    width: w(48),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    height: h(26),
    width: w(26),
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerName: {
    fontSize: w(16),
    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
    color: Colors.APP_COLOR,
    maxWidth:w(200)
  },
  locationView: {
    flexDirection: 'row',
    marginTop: h(5),
    marginBottom: h(5),
  },
  locationIcon: {
    height: h(18),
    width: w(18),
  },
  countryName: {
    fontSize: w(14),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    paddingLeft: w(5),
    color:Colors.APP_COLOR
  },
});
