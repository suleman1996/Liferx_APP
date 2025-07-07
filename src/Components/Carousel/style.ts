import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
card: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: Colors.WHITE,
    width:w(30)
  },
  inactiveDot: {
    backgroundColor: Colors.GRAY,
  },
  text: {
    fontSize: w(20),
    color: Colors.WHITE,
    fontFamily: FONTS.MONTSERRAT_BOLD,
    marginLeft: w(25),
    marginTop: h(30),
  },
  text2: {
    fontSize: w(13),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    maxWidth: w(200),
    marginLeft: w(25),
    color: Colors.WHITE,
    lineHeight: 15,
    marginTop: h(10),
  },
  dotOverlay: {
    position: 'absolute',
    bottom: h(10),
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 2,
  },
});
export default styles;
