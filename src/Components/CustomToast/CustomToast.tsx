import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Colors from '../../utils/Colors/Colors';
import { h, w } from '../../utils/Helper/Helper';
import { FONTS } from '../../Assets/Fonts/Fonts';

interface CustomToastProps {
  text1?: string;
  text2?: string;
  type?: 'success' | 'error' | 'info';
}

interface Styles {
  container?: ViewStyle;
  text1?: TextStyle;
  text2?: TextStyle;
}

const CustomToast: React.FC<CustomToastProps> = ({ text1, text2, type }) => {
  const backgroundColor = getBackgroundColor(type);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {text1 ? <Text style={styles.text1}>{text1}</Text> : null}
      {text2 ? <Text style={styles.text2}>{text2}</Text> : null}
    </View>
  );
};

const getBackgroundColor = (type?: string) => {
  switch (type) {
    case 'success':
      return Colors.APP_COLOR;
    case 'error':
      return Colors.error;
    case 'info':
    //   return Colors.INFO;
    default:
      return;
  }
};

const styles = StyleSheet.create<Styles>({
  container: {
    borderRadius: 10,
    padding: w(13),
    justifyContent: 'center',
    maxWidth:'80%'
  },
  text1: {
    fontSize: w(20),
    fontWeight: 'bold',
    color: Colors.WHITE,
    marginBottom: 4,
  },
  text2: {
    fontSize: w(15),
    color: Colors.WHITE,
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
});

export default CustomToast;
