import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: Colors.APP_COLOR,
    height: h(60),
    borderRadius: 16,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: Colors.WHITE,
    fontSize: w('4%'),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default styles;
