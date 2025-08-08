import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  card: {
    width: '100%',
    // marginRight: 12,
    borderRadius: 16,
    backgroundColor: Colors.WHITE,
    paddingLeft: w(20),
    paddingRight:w(20),
    marginTop: h(30),
    paddingBottom: h(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    height:'auto'
  },
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
    height: h(40),
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
  closeIcon:{
    height:h(18),
    width:w(18),
    alignSelf:'flex-end',
    marginBottom:h(10),
    tintColor:Colors.APP_COLOR
  }
});
export default styles;
