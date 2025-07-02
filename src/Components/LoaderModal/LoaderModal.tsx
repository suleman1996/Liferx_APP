import React from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import styles from './style';

interface LoaderModalProps {
  visible?: boolean;
  backgroundColor?: string;
  indicatorColor?: string;
}

const CustomLoader: React.FC<LoaderModalProps> = ({
  visible = false,
  backgroundColor = Colors.TRANSPARENT_BLACK_COLOR,
  indicatorColor = Colors.APP_COLOR,
}) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      statusBarTranslucent
    >
      <View style={[styles.overlay, { backgroundColor }]}>
        <ActivityIndicator size="large" color={indicatorColor} />
      </View>
    </Modal>
  );
};
export default CustomLoader;
