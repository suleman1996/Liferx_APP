import { StyleSheet } from 'react-native';
import { h, w } from '../../utils/Helper/Helper';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
    width: w('100%'),
    height : h('100%')
  },
});
export default styles;
