import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: w(20),
    paddingTop: h(40),
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: h(20),
    marginTop: h(30),
  },
  logo: {
    height: h(53),
    width: w(160),
  },
  drawerItem: {
    marginTop: h(10),
    borderBottomColor: Colors.BORDER_COLOR,
    backgroundColor: Colors.APP_COLOR,
    borderRadius: 12,
    paddingTop:h(12),
    paddingBottom:h(12),
    justifyContent: 'center',
    paddingLeft: w(20),
  },
  drawerText: {
    fontSize: w(16),
    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
    color: Colors.WHITE,
  },
  logoutWrapper: {
    borderTopWidth: 1,
    borderTopColor: Colors.APP_COLOR,
    paddingTop: h(20),
    marginBottom: h(60),
    paddingLeft: w(20),
  },

  logoutText: {
    fontSize: h(16),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.error,
  },
});
