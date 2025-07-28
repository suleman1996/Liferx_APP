import React from 'react';
import { View, ViewStyle } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import styles from './style';
import Colors from '../../utils/Colors/Colors';

interface Props {
  onChange?: (code: string) => void;
  onFilled?: (code: string) => void;
  numberOfDigits?: number;
  customFocusColor: string;
  customContainerStyle?: ViewStyle | ViewStyle[];
}

const OtpInputField: React.FC<Props> = ({
  onChange,
  onFilled,
  customFocusColor,
  customContainerStyle,
  numberOfDigits = 6,
}) => {
  return (
    <View style={styles.container}>
      <OtpInput
        numberOfDigits={numberOfDigits}
        focusColor={customFocusColor}
        onTextChange={onChange}
        type="numeric"
        onFilled={onFilled}
        blurOnFilled={true}
        theme={{
          pinCodeTextStyle: styles.otpText,
          pinCodeContainerStyle: [styles.otpBox, customContainerStyle],
        }}
      />
    </View>
  );
};
export default OtpInputField;
