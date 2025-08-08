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
    // marginHorizontal: w(20),
  },
  card: {
    borderWidth: 1.5,
    borderColor: Colors.GRAY,
    width: 'auto',
    borderRadius: 12,
    marginTop: h(20),
  },
  recommended: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontSize: w(16),
  },
  cardHeader: {
    backgroundColor: Colors.APP_COLOR,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: h(10),
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: h(25),
    paddingBottom: h(25),
    justifyContent: 'space-between',
    marginHorizontal: w(10),
  },
  iconView2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  medName: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontSize: w(16),
    marginLeft: w(15),
    maxWidth: w(200),
  },
  price: {
    marginLeft: w(15),
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    width: w(250),
    fontSize: w(14),
  },
  productImage: {
    height: h(40),
    width: w(40),
    right: w(5),
    resizeMode: 'contain',
  },
});
export default styles;
