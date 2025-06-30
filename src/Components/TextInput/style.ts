import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { w, h } from '../../utils/Helper/Helper';

const styles = StyleSheet.create({
  container: {
    marginBottom: h('2%'),
  },
  label: {
    fontSize: w(16),
    color: Colors.BLACK,
    fontFamily: 'HindSiliguri-Regular',
  },
  input: {
    height: h(50),
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 10,
    paddingHorizontal: w('3%'),
    fontSize: h(16),
    color: Colors.BLACK,
    backgroundColor: Colors.WHITE,
    fontFamily: 'HindSiliguri-Regular',
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    fontSize: h('1.5%'),
    marginTop: h('0.5%'),
    fontFamily: 'HindSiliguri-Regular',
  },
});

export default styles;
