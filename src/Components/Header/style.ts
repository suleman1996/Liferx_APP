import { StyleSheet, Platform } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.WHITE,
    height: h(80),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  title: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: h(18),
  },
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
  },
  arrowView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  arrowIcon: {
    marginLeft: w(20),
  },
  leftSection: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  // center: {
  //   flex: 1,
  //   alignItems: 'center',
  // },
  rightSection: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginLeft: w(20),
  },
   leftIcon: {
    width: 20,
    height: 20,
  },
  // arrowIcon: {
  //   padding: 4,
  // },
});

export default styles;
