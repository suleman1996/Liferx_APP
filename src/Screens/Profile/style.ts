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
    flex: 1,
  },
  roundedView: {
    height: h(90),
    width: w(90),
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: h(30),
  },
  image: {
    height: h(90),
    width: w(90),
    borderRadius: 90 / 2,
    resizeMode: 'contain',
  },
  editView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: h(10),
    paddingHorizontal: w(20),
    marginTop: h(10),
  },
  editIconView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.APP_COLOR,
    padding: 8,
    borderRadius: 10,
    paddingHorizontal: w(15),
  },
  editText: {
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.WHITE,
    fontSize: h(13),
  },
  pencilIcon: {
    right: 5,
  },
  innerContainer: {
    marginTop: h(20),
  },
  accDetails: {
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.APP_COLOR,
    fontSize: w(16),
  },
  leftColumn: {
    backgroundColor: Colors.LIGHT_GRAY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: Colors.GRAY,
  },
  text1: {
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontSize: w(14),
    color: Colors.APP_COLOR,
    padding: h(15),
    paddingHorizontal: w(20),
  },
  text2: {
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontSize: w(14),
    color: Colors.APP_COLOR,
    paddingHorizontal: w(10),
  },
  profileName: {
    marginTop: h(10),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.APP_COLOR,
    fontSize: h(15),
  },
});
export default styles;
