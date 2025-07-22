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
    marginHorizontal: w(20),
  },
  logo: {
    height: h(40),
    width: w(120),
    marginVertical: h(30),
  },
  heading: {
    color: Colors.APP_COLOR,
    fontSize: w(22),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
  description: {
    marginTop: h(20),
    fontSize: w(15),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.APP_COLOR,
  },
  phoneContainer: {
    borderWidth: 1,
    height: h(60),
    borderRadius: 10,
    borderColor: Colors.GRAY,
    flexDirection: 'row',
    marginTop: h(20),
  },
  flagView: {
    flexDirection: 'row',
    width: w(80),
    justifyContent: 'center',
    alignItems: 'center',
    height: h(60),
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: Colors.GRAY,
  },
  flag: {
    height: h(20),
    width: w(30),
  },
  number: {
    fontSize: w(16),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.BLACK,
    paddingLeft: w(5),
  },
  numberInput: {
    flex: 1,
    color: Colors.APP_COLOR,
    fontSize: w(16),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    paddingLeft: w(20),
  },
  customButtonStyles: {
    marginTop: h(20),
  },
  label:{
    fontSize:w(16),
    fontFamily:FONTS.MONTSERRAT_REGULAR,
    marginTop:h(25),
    paddingBottom:h(3)
  },
  text:{
    textAlign:'center',
    marginTop:h(20),
    fontSize:w(13),
    fontFamily:FONTS.MONTSERRAT_REGULAR,
    color:Colors.DARK_GREY
  }
});
export default styles;
