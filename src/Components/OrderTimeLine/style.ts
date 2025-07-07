import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const CIRCLE_SIZE = w(50);
const LINE_WIDTH = 2;

const styles = StyleSheet.create({
  container: {
    marginTop:h(50)
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    minHeight: CIRCLE_SIZE + h(30),
  },
  iconColumn: {
    width: CIRCLE_SIZE,
    alignItems: 'center',
    position: 'relative',
  },
  verticalLineTop: {
    position: 'absolute',
    top: 0,
    height: CIRCLE_SIZE / 2,
    width: LINE_WIDTH,
    backgroundColor: Colors.GRAY,
    zIndex: -1,
  },
  verticalLineBottom: {
    position: 'absolute',
    top: CIRCLE_SIZE / 2,
    height: CIRCLE_SIZE / 2 + h(30),
    width: LINE_WIDTH,
    backgroundColor: Colors.GRAY,
    zIndex: -1,
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: Colors.PLACEHOLDER,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  activeCircle: {
    backgroundColor: Colors.APP_COLOR,
  },
  icon: {
    width: w(25),
    height: w(25),
    resizeMode: 'contain',
    tintColor: Colors.WHITE,
  },
  labelColumn: {
    justifyContent: 'center',
    marginLeft: w(20),
    flex: 1,
  },
  labelText: {
    fontSize: w(16),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    color: Colors.APP_COLOR,
    paddingTop:h(15)
  },
});

export default styles;
