import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: h(20),
  },
  label: {
    fontSize: h(14),
    marginBottom: h(5),
    color: Colors.APP_COLOR,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 15,
    height: h(60),
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    paddingLeft: w('5%'),
    marginTop: h(5),
  },
  inputText: {
    color: Colors.APP_COLOR,
    fontSize: h(16),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
  wrapper: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 10,
    marginTop: h(10),
    overflow: 'hidden',
    backgroundColor: Colors.WHITE,
  },

  iosPickerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iosPicker: {
    height: h(150),
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: h(10),
    borderTopWidth: 1,
    borderColor: Colors.GRAY,
  },
  cancelButton: {
    paddingVertical: h(5),
    paddingHorizontal: w(20),
  },
  okButton: {
    paddingVertical: h(5),
    paddingHorizontal: w(20),
  },
  cancelText: {
    color: Colors.error,
    fontSize: h(16),
  },
  okText: {
    color: Colors.APP_COLOR,
    fontSize: h(16),
  },
});
export default styles;
