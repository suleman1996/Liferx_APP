import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './style';
import Button from '../Button/Button';
import Colors from '../../utils/Colors/Colors';

interface LogoutModalProps {
  visible: boolean;
  onCancel: () => void;
  onLogout: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  visible,
  onCancel,
  onLogout,
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <Text style={styles.title}>Confirm Logout</Text>
              <Text style={styles.message}>
                Are you sure you want to logout?
              </Text>

              <View style={styles.buttonRow}>
                <Button
                  text="Cancel"
                  customButtonStyles={[
                    styles.button,
                    { backgroundColor: Colors.GRAY },
                  ]}
                  onPressHandler={onCancel}
                  customTextStyles={styles.cancelText}
                  noShadow
                />

                <Button
                  text="Logout"
                  customButtonStyles={styles.button}
                  customTextStyles={styles.logoutText}
                  onPressHandler={onLogout}
                  noShadow
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default LogoutModal;
