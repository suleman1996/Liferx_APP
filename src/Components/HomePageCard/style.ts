import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: Colors.WHITE,
    marginTop: h(30),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 10,
    paddingBottom: h(10),
    marginHorizontal: w('5%'),
  },
  image: {
    height: h('30%'),
    width: w('45%'),
    alignSelf: 'center',
    right: w(15),
  },
  text: {
    fontSize: h(25),
    fontFamily: FONTS.HIND_BOLD,
    marginLeft: w(20),
    color: Colors.BLACK,
    marginTop: h(10),
    marginBottom: h(10),
    flex: 1,
  },
  description: {
    fontSize: w('3.8%'),
    color: Colors.DARK_GREY,
    marginTop: h('3%'),
    fontFamily: FONTS.HIND_REGULAR,
    marginLeft: w(20),
  },
  text2: {
    fontSize: w('3.8%'),
    fontFamily: FONTS.HIND_REGULAR,
    marginLeft: w(20),
    color: Colors.APP_COLOR,
  },
  arrowIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: h(15),
  },
  arrowIcon: {
    height: h(10),
    width: w(15),
    marginLeft: w(10),
  },
});
export default styles;
