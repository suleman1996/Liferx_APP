import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const screenWidth = Dimensions.get('window').width;
const ITEM_HORIZONTAL_MARGIN = 16;
const ITEM_SPACING = 20;

const ITEM_WIDTH =
  (screenWidth - ITEM_HORIZONTAL_MARGIN * 2 - ITEM_SPACING) / 2;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  mainContainer: {
    marginHorizontal: w(20),
    flexGrow: 1,
  },
  title: {
    color: Colors.APP_COLOR,
    marginTop: h(20),
    fontSize: w(25),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
  container: {
    backgroundColor: Colors.LIGHT_GRAY,
    width: ITEM_WIDTH,
    borderRadius: 10,
    paddingTop: h(20),
    paddingBottom: h(20),
    marginBottom: h(16),
  },
  image: {
    height: h(120),
    width: w(100),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  text: {
    color: Colors.APP_COLOR,
    fontSize: w(15),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    paddingLeft: w(20),
    paddingTop: h(10),
  },
  descrption: {
    color: Colors.APP_COLOR,
    fontSize: w(12),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    paddingLeft: w(20),
    paddingTop: h(10),
  },
  customButtonStyles: {
    height: null,
    width: '75%',
    padding: h(10),
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: h(12),
  },
  customTextStyles: {
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(12),
  },
  status: {
    color: Colors.WHITE,
    width: w(60),
    textAlign: 'center',
    padding: h(8),
    borderRadius: 20,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    alignSelf: 'flex-end',
    right: w(15),
    fontSize: w(11),
  },
});
export default styles;
