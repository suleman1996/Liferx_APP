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
    flex: 1,
    height: h(50),
    borderColor: Colors.GRAY,
    paddingLeft: w('2%'),
    fontSize: h(16),
    color: Colors.BLACK,
    backgroundColor: Colors.WHITE,
    fontFamily: 'HindSiliguri-Regular',
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: Colors.error,
    fontSize: h('1.5%'),
    marginTop: h('0.5%'),
    fontFamily: 'HindSiliguri-Regular',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 10,
    paddingHorizontal: w('3%'),
    backgroundColor: Colors.WHITE,
  },
  leftIcon: {
    width: 20,
    height: 20,
  },
});

export default styles;
