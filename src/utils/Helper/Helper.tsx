import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { PixelRatio } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ImagePicker from 'react-native-image-crop-picker';
import { RootStackParamList } from '../../Stack/Stack';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setOnBoarding } from '../../Screens/Auth/Onboarding/action';
import { useDispatch } from 'react-redux';


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
  if (!text || typeof text !== 'string') return '';
  const cleaned = text?.replace(/\D/g, '').slice(0, 10); // Keep only digits

  if (cleaned?.length === 0) return '';

  if (cleaned?.length < 4) {
    return `(${cleaned}`;
  } else if (cleaned.length < 7) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
  } else {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
      6,
    )}`;
  }
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

export const ageValidation = (dob: string): boolean => {
  const birthDate = moment(dob, 'YYYY-MM-DD', true); // true = strict parsing
  if (!birthDate.isValid()) return false;
  const age = moment().diff(birthDate, 'years');
  return age >= 18;
};

export interface FormDataPayload {
  question: number;
  selected?: number[];
  explanation?: string;
  imagePath: string;
}
export const buildFormDataForImageUpload = ({
  question,
  selected = [],
  explanation = '',
  imagePath,
}: FormDataPayload): FormData => {
  const formData = new FormData();

  formData.append('question', question.toString());
  formData.append(
    'json_answer',
    JSON.stringify({
      selected,
      explanation,
    }),
  );
  const file = {
    uri: imagePath,
    type: 'image/jpeg',
    name: 'photo.jpg',
  } as any;

  formData.append('file', file);
  return formData;
};

export const getFileName=(imagePath:string)=>{
  return imagePath?.split('/').pop() || `image_${Date.now()}.jpg`
}

// utils/formDataBuilder.ts
export async function buildMediaFormData({
  sessionId,
  questionId,
  userId,
  imagePath,
}: {
  sessionId: number;
  questionId: number;
  userId: number;
  imagePath: string;
}): Promise<FormData> {
  const filename = getFileName(imagePath);
  const stats = await fetch(imagePath);
  const blob = await stats.blob();

  const fileSize = blob.size;
  const fileType = blob.type;

  const jsonAnswer = JSON.stringify({
    has_photo: true,
    file_name: filename,
    file_size: fileSize,
    file_type: fileType,
    timestamp: new Date().toISOString(),
  });
  const formData = new FormData();
  formData.append('session_id', sessionId.toString());
  formData.append('question', questionId.toString());
  formData.append('user', userId.toString());
  formData.append('json_answer', jsonAnswer);
  formData.append('file', {
    uri: imagePath.startsWith('file://') ? imagePath : `file://${imagePath}`,
    name: filename,
    type: fileType,
  } as any);

  return formData;
}


export const usePreviousRouteName = (): string | null => {
  return useNavigationState((state) => {
    const routes = state?.routes;
    const currentIndex = state?.index;
    if (currentIndex > 0) {
      return routes[currentIndex - 1]?.name || null;
    }
    return null;
  });
};

  export const skipOnBoarding = async (dispatch : any) => {
    await AsyncStorage.setItem('onBoard', 'true');
    dispatch(setOnBoarding(true));
  };


