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

export const formatPhoneNumber = (text: string) => {
  const cleaned = text.replace(/\D/g, '').slice(0, 10); // keep max 10 digits
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if (!match) return text; // fallback to raw if something weird happens

  let formatted = '';
  if (match[1]) formatted += `(${match[1]}`;
  if (match[1].length === 3) formatted += ') ';
  if (match[2]) formatted += match[2];
  if (match[2].length === 3 && match[3]) formatted += '-';
  if (match[3]) formatted += match[3];

  return formatted;
};

export const getPasswordStrengthLabel = (
  validation: ReturnType<typeof getPasswordValidation>,
) => {
  const checks = Object.values(validation);
  const passed = checks.filter(Boolean).length;

  if (passed >= 8) return { label: 'Strong', color: '#046b33' };
  if (passed >= 5) return { label: 'Medium', color: '#e0a800' };
  return { label: 'Weak', color: '#c40000' };
};

export const getPasswordValidation = (password: string) => {
  const noCommon123 = !/(123|abc)/i.test(password);
  const noRepeats = !/(.)\1{2,}/.test(password);
  const isUnique = new Set(password).size >= Math.min(password.length, 5);
  const isMultiWord =
    /\s/.test(password) ||
    /[a-z][A-Z]/.test(password) ||
    /[A-Z][a-z]+[A-Z]/.test(password) ||
    /[^\w\s]/.test(password);

  return {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    noCommon123,
    noRepeats,
    isUnique,
    isMultiWord,
  };
};
