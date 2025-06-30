import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// Responsive width: accepts px or percentage string
export const w = (value: number | string): number => {
  if (typeof value === 'string' && value.includes('%')) {
    return wp(value); // e.g., "50%"
  } else if (typeof value === 'number') {
    return PixelRatio.roundToNearestPixel(value); // return raw pixel
  }
  return 0;
};

// Responsive height: accepts px or percentage string
export const h = (value: number | string): number => {
  if (typeof value === 'string' && value.includes('%')) {
    return hp(value); // e.g., "30%"
  } else if (typeof value === 'number') {
    return PixelRatio.roundToNearestPixel(value); // return raw pixel
  }
  return 0;
};
