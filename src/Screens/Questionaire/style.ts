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
    flex:1
  },
  contentContainer: {},
});
export default styles;
