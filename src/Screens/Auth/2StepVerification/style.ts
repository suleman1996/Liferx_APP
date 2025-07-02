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
    flex: 1,
    marginHorizontal: w('8%'),
  },
  title: {
    marginTop: h(50),
    fontSize: w(20),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.APP_COLOR,
  },
  title1: {
    marginTop: h(10),
    fontSize: w(14),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.APP_COLOR,
  },
  customInputStyle: {
    borderRadius: 16,
    height: h(60),
    marginTop: h(50),
    fontSize: w(14),
    paddingLeft: w(20),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
  },

  logo: {
    height: h(53),
    width: w(160),
    alignSelf: 'center',
    marginTop: h(80),
  },
  email: {
    fontSize: w(14),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.APP_COLOR,
  },
    button: {
    width: 'auto',
    marginTop: h(30),
  },
  btnText: {
    fontSize: h(14),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.WHITE,
  },
  text:{
    textAlign:'center',
    fontSize:w(14),
    fontFamily:FONTS.MONTSERRAT_REGULAR,
    color:Colors.APP_COLOR,
    marginTop:h(25)
  },
  resend:{
    fontSize:w(14),
    fontFamily:FONTS.MONTSERRAT_MEDIUM,
    color:Colors.APP_COLOR,
    textDecorationLine:'underline'
  },
  timerText:{
    textAlign:'center',
    fontSize:w(14),
    color:Colors.APP_COLOR,
    fontFamily:FONTS.MONTSERRAT_REGULAR,
    marginTop:h(15)
  }
});
export default styles;
