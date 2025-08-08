import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  image: {
    height: h(120),
    width:w(120),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  imageView: {
    backgroundColor: Colors.LIGHT_GRAY,
    height: h(160),
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
  },
  innerView: {
    flexDirection: 'row',
    marginTop: h(20),
  },
  innerView2: {
    justifyContent: 'center',
  },
  title: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(22),
    marginTop: h(20),
  },
  calenderIcon: {
    height: h(22),
    width: w(20),
  },
  calenderIconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: h(20),
    flexWrap: 'wrap',
  },
  label: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(16),
    width: w(140),
  },
  value: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontSize: w(16),
    flex: 1,
  },
  customButtonStyles: {
    borderRadius: 10,
    marginTop: h(20),
    height: h(35),
    width: w('35%'),
  },
  customTextStyles: {
    fontSize: w(12),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: h(20),
  },
  closeIcon: {
    height: h(18),
    width: w(18),
    alignSelf: 'flex-end',
    marginBottom: h(10),
    tintColor: Colors.APP_COLOR,
  },
});
export default styles;
