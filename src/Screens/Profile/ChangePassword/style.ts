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
    marginHorizontal: w(20),
    marginTop: h(10),
  },
  customInputStyle: {
    borderRadius: 16,
    height: h(60),
  },
  customLabelStyles: {
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: Colors.APP_COLOR,
    fontSize: w(18),
  },
  inputContainer: {
    marginTop: h(20),
  },
  saveButton: {
    flex: 1,
    marginRight:w(20)
  },
  cancelButton: {
    flex: 1,
    backgroundColor:Colors.WHITE,
    borderWidth:1,
    borderColor:Colors.APP_COLOR
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: w(15),
    fontFamily:FONTS.MONTSERRAT_MEDIUM
  },
  eyeIcon:{
    right:10
  }
});
export default styles;
