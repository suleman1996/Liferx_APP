import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    marginBottom: h(5),
    color: Colors.APP_COLOR,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: w(10),
    paddingHorizontal: w(10),
    height: h(60),
  },
  flagView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 1,
    paddingRight: w(10),
    marginRight: w(10),
  },
  flag: {
    width: w(20),
    height: w(20),
    marginRight: w(5),
    resizeMode: 'contain',
  },
  number: {
    fontSize: w(16),
    color: Colors.BLACK,
  },
  input: {
    flex: 1,
    fontSize: w(16),
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
  },
});

export default styles;
