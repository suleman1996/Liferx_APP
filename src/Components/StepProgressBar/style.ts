import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignSelf:'center',
    marginTop: h(20),
    paddingBottom:h(5)
  },
  steps: {
    backgroundColor: Colors.APP_COLOR,
    width: w(25),
    borderRadius: 10,
    height: h(8),
    marginRight:5
  },
});
export default styles;
