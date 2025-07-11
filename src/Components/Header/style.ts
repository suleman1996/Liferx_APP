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
    fontSize: h(22),
    marginLeft: w(20),
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
});

export default styles;
