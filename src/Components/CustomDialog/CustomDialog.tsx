import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import styles from './style';
import { h, w } from '../../utils/Helper/Helper';

interface CustomDialogProps {
  visible?: boolean;
  onDismiss?: () => void;
  children?: React.ReactNode;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  visible,
  onDismiss,
  children,
}) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onDismiss}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
    >
      <View style={styles.modal}>{children}</View>
    </Modal>
  );
};

export default CustomDialog;
