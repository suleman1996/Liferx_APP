import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  mainContainer: {
    marginHorizontal: w(20),
  },
  inputContainer: {
    borderRadius: 8,
    borderWidth: 0,
  },
  inputStyle: {
    backgroundColor: Colors.LIGHT_GRAY,
    height: h(40),
    fontSize: w(14),
    paddingLeft: 10,
  },
  wrapper: {
    backgroundColor: Colors.LIGHT_GRAY,
    borderWidth: 0,
    borderRadius: w(8),
    marginTop: h(20),
  },
});
export default styles;
