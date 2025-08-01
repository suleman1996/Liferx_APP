import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h } from '../../utils/Helper/Helper';

const styles = StyleSheet.create({
  modal: {
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 10,
    maxHeight: '70%',
    overflow: 'hidden',
  },
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 1,
  },
});

export default styles;
