import { StyleSheet, Platform } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.WHITE,
    height: h('8%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'center',
  },
  headerImage: {
    height: h(35),
    width: w(90),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: w('5%'),
  },
  title:{
    color:Colors.APP_COLOR,
    fontFamily:FONTS.HIND_SEMIBOLD,
    fontSize:h(22),
    marginLeft:w(20)
  },
  arrowView:{
    flexDirection:'row',
    alignItems:'center'
  },
  arrowIcon:{
    transform: [{ rotate: '180deg' }] ,
    height:h(20),
    width:w(25),
    marginLeft:w(20)
  }
});

export default styles;
