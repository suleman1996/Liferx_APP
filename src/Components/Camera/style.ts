import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GRAY,
    marginTop: h(30),
  },
  cameraView: {
    borderColor: Colors.APP_COLOR,
    borderStyle: 'dashed',
    borderWidth: 1,
    width: w(200),
    height: h(200),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: Colors.APP_COLOR,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(12),
    marginTop: h(12),
  },
  buttonView: {
    justifyContent: 'space-between',
    marginHorizontal: w(20),
    marginTop: h(30),
  },
  customTextStyles: {
    color: Colors.WHITE,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: w(15),
  },
  customButtonStyles: {
    height: h(50),
    padding: h(10),
  },
  crossIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: Colors.APP_COLOR,
    borderRadius: 20,
    padding: 5,
    borderWidth:2,
    borderColor:Colors.WHITE
  },
});

export default styles;
