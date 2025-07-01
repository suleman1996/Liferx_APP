import React from 'react';
import { View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import styles from './style';
import Colors from '../../utils/Colors/Colors';

interface Props {
  onChange?: () => void;
  onFilled?: () => void;
  numberOfDigits?: number;
}

const OtpInputField: React.FC<Props> = ({
  onChange,
  onFilled,
  numberOfDigits = 6,
}) => {
  return (
    <View style={styles.container}>
      <OtpInput
        numberOfDigits={numberOfDigits}
        focusColor={Colors.APP_COLOR}
        onTextChange={onChange}
        type="numeric"
        onFilled={onFilled}
        blurOnFilled={true}
        theme={{
          pinCodeTextStyle: styles.otpText,
          pinCodeContainerStyle: styles.otpBox,
        }}
      />
    </View>
  );
};

export default OtpInputField;
