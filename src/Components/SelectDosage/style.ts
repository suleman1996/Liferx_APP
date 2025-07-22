import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  card: {
    borderWidth: 1.5,
    borderColor: Colors.GRAY,
    width: 'auto',
    borderRadius: 12,
    marginTop: h(20),
    paddingTop: h(25),
    paddingBottom: h(25),
    paddingHorizontal:w(15)
  },
  iconView2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  medName: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontSize: w(16),
    marginLeft: w(15),
    width: w(250),
  },
  price: {
    marginLeft: w(15),
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontSize: w(14),
  },
  iconView3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  startPrice: {
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontSize: w(16),
    marginLeft: w(15),
    color: Colors.APP_COLOR,
  },
});
export default styles;
