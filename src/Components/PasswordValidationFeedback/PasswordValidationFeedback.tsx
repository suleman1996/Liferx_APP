import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import {
  getPasswordStrengthLabel,
  getPasswordValidation,
  h,
  w,
} from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

interface Props {
  validation: ReturnType<typeof getPasswordValidation>;
}

const RuleTag = ({ label, valid }: { label: string; valid: boolean }) => {
  return (
    <View style={[styles.tag, { backgroundColor: valid ? '#d2f5dc' : '#fdd' }]}>
      <Text style={{ color: valid ? '#046b33' : '#c40000', fontSize: w(12) }}>
        {valid ? '✓' : '✗'} {label}
      </Text>
    </View>
  );
};

const PasswordValidationFeedback: React.FC<Props> = ({ validation }) => {
  const { label, color } = getPasswordStrengthLabel(validation);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Password Strength</Text>
        {/* <Text style={[styles.strengthLabel, { color }]}>{label}</Text> */}
      </View>
      <View style={styles.row}>
        <RuleTag label="8+ chars" valid={validation.minLength} />
        <RuleTag label="A-Z" valid={validation.hasUppercase} />
        <RuleTag label="a-z" valid={validation.hasLowercase} />
        <RuleTag label="0-9" valid={validation.hasNumber} />
        <RuleTag label="Special" valid={validation.hasSpecialChar} />
      </View>
      <View style={styles.row}>
        <RuleTag label="Unique" valid={validation.isUnique} />
        <RuleTag label="No 123/abc" valid={validation.noCommon123} />
        <RuleTag label="No repeats" valid={validation.noRepeats} />
        <RuleTag label="Multi-word" valid={validation.isMultiWord} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: w(10),
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    marginBottom: h(5),
  },
  heading: {
    fontSize: w(16),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    marginBottom: h(10),
    color: Colors.APP_COLOR,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: w(6),
    marginBottom: h(6),
  },
  tag: {
    paddingHorizontal: w(10),
    paddingVertical: h(4),
    borderRadius: 6,
    marginVertical: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: h(10),
  },
  strengthLabel: {
    fontSize: w(14),
    fontFamily: FONTS.MONTSERRAT_BOLD,
  },
});

export default PasswordValidationFeedback;
