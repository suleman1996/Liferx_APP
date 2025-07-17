import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ImagePicker from 'react-native-image-crop-picker';
import { RootStackParamList } from '../../Stack/Stack';

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

export const useTypedNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
};

export const pickImageFromCamera = async (): Promise<any | null> => {
  try {
    const image = await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    });
    return image;
  } catch (error) {
    console.warn('Camera Error:', error);
    return null;
  }
};

export const pickImageFromGallery = async (): Promise<any | null> => {
  try {
    const image = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });
    return image;
  } catch (error) {
    console.warn('Gallery Error:', error);
    return null;
  }
};
