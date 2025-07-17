import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import styles from './style';

interface Props {
  totalLength: number;
  currentStep: number;
}

const StepProgressBar: React.FC<Props> = ({ totalLength, currentStep }) => {
  const { width } = useWindowDimensions();
  const stepMargin = 5;
  const stepWidth = (width - stepMargin * (totalLength - 1) - 40) / totalLength;

  return (
    <View style={styles.mainContainer}>
      {Array.from({ length: totalLength }).map((_, index) => {
        return (
          <View
            key={index}
            style={{
              backgroundColor:
                index < currentStep ? Colors.APP_COLOR : Colors.GRAY,
              width: stepWidth,
              height: 8,
              borderRadius: 10,
              marginRight: index !== totalLength - 1 ? stepMargin : 0,
            }}
          />
        );
      })}
    </View>
  );
};

export default StepProgressBar;
