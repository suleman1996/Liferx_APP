import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { h, w } from '../../utils/Helper/Helper';
import { ScrollView } from 'react-native';
import Colors from '../../utils/Colors/Colors';

interface CustomDialogProps {
  visible?: boolean;
  onDismiss?: () => void;
  children?: React.ReactNode;
  icon?: any;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  visible,
  onDismiss,
  children,
  icon,
}) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onDismiss}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      
    >
      <View style={styles.modal}>
        {icon && (
          <Pressable style={styles.closeIcon} onPress={onDismiss}>
            <Ionicons name="close-circle" size={25} color={Colors.APP_COLOR} />
          </Pressable>
        )}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: h(20) }}
        >
          {children}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default CustomDialog;
