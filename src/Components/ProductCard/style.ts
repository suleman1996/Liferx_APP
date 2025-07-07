import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  card: {
    width: w(160),
    borderRadius: 16,
    backgroundColor: Colors.LIGHT_GRAY,
    paddingTop: h(20),
    paddingBottom: h(15),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: w(70),
    height: h(70),
    borderRadius: 30,
    marginBottom: 10,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: w(13),
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    paddingLeft: w(12),
  },
  text: {
    fontSize: w(10),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.APP_COLOR,
    paddingLeft: w(12),
  },
  month: {
    fontSize: w(12),
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    paddingLeft: w(12),
    marginTop:h(5)
  },
  innerCard: {
    marginTop: h(25),
  },
  innerCard3: {
    backgroundColor: Colors.WHITE,
    width: w(80),
    height: h(20),
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: w(12),
    marginTop: h(10),
  },
});
export default styles;
