import { StyleSheet } from 'react-native';
import Colors from '../../../utils/Colors/Colors';
import { h, w } from '../../../utils/Helper/Helper';
import { FONTS } from '../../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  mainContainer: {
    marginHorizontal: w(20),
  },
  contentContainerStyle: {
    paddingBottom: h(10),
  },
  card: {
    width: '100%',
    marginRight: 12,
    borderRadius: 16,
    backgroundColor: Colors.WHITE,
    paddingLeft: w(20),
    marginTop: h(20),
    paddingBottom: h(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    height: h(160),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  imageView: {
    backgroundColor: Colors.LIGHT_GRAY,
    height: h(160),
    width: '94%',
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
    fontSize: w(20),
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
    fontSize: w(15),
    width: w(140),
  },
  value: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontSize: w(15),
    flex: 1,
  },
  customButtonStyles: {
    width: w(150),
    borderRadius: 10,
    height: h(50),
    marginTop: h(20),
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
});
export default styles;
