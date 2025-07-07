import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

interface Step {
  label: string;
  icon: any;
  isActive: boolean;
}

interface Props {
  steps: Step[];
}

const OrderTimeline: React.FC<Props> = ({ steps }) => {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepRow}>
          <View style={styles.iconColumn}>
            {index !== 0 && <View style={styles.verticalLineTop} />}
            <View style={[styles.circle, step.isActive && styles.activeCircle]}>
              <Image source={step.icon} style={styles.icon} />
            </View>
            {index !== steps.length - 1 && (
              <View style={styles.verticalLineBottom} />
            )}
          </View>

          <View style={styles.labelColumn}>
            <Text style={styles.labelText}>{step.label}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default OrderTimeline;
