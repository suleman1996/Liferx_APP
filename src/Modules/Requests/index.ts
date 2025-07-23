import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Platform } from 'react-native';

// BASE URLs
export const baseUrl = 'https://dev-backend.liferxbackend.pro';
export const imageUrl = 'https://utils-dev.swotsup.com/images/uploadImage';

export const appLink =
  Platform.OS === 'ios'
    ? 'itms-apps://apps.apple.com/pk/app/swotsup/id1641071189'
    : 'https://play.google.com/store/apps/details?id=com.swotsup&hl=en&gl=US';

// AXIOS INSTANCE
const api: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-CSRFTOKEN':
      'FJKrFK5lG1RJlklQqLSdvjfYGZVEchnejsrk8bjqIz4UjQgeBQVLyzumi06uvnUW',
  },
});

// Add token from AsyncStorage
api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Extract user-friendly error
function extractErrorMessage(error: any): string {
  const data = error?.response?.data;

  if (typeof data === 'string') return data;

  if (data && typeof data === 'object') {
    const firstKey = Object.keys(data)[0];
    const firstValue = data[firstKey];

    if (Array.isArray(firstValue)) {
      return firstValue[0]; // e.g., ["Invalid email"] -> "Invalid email"
    }

    if (typeof firstValue === 'string') {
      return firstValue;
    }
  }

  return error?.message || 'Something went wrong. Please try again.';
}

// GENERIC TYPES
type ApiResponse<T> = AxiosResponse<T>;

// ========= API METHODS ==========

export async function get<T = any>(
  url: string,
  customHeaders?: Record<string, string>,
): Promise<AxiosResponse<T>> {
  try {
    const config = customHeaders ? { headers: customHeaders } : undefined;
    const response = await api.get<T>(url, config);
    return response; // ✅ Full response object
  } catch (error) {
    throw extractErrorMessage(error);
  }
}

export async function post<T = any, D = any>(
  url: string,
  data?: D,
  customHeaders?: Record<string, string>,
): Promise<AxiosResponse<T>> {
  try {
    const config = customHeaders ? { headers: customHeaders } : undefined;
    const response = await api.post<T>(url, data, config);
    return response;
  } catch (error) {
    throw extractErrorMessage(error);
  }
}

export async function patch<T = any, D = any>(
  url: string,
  data: D,
): Promise<T> {
  try {
    const response: ApiResponse<T> = await api.patch(url, data);
    return response.data;
  } catch (error) {
    throw extractErrorMessage(error);
  }
}

export async function deleteRequest<T = any>(url: string): Promise<T> {
  try {
    const response: ApiResponse<T> = await api.delete(url);
    return response.data;
  } catch (error) {
    throw extractErrorMessage(error);
  }
}

// Upload helper
function buildFormData(image: { path: string }) {
  const filename = image.path.replace(/^.*[\\\/]/, '');
  return {
    uri: image.path,
    type: 'image/jpeg',
    name: filename,
  } as any;
}

export async function uploadFile<T = any>(
  url: string,
  image: { path: string },
): Promise<T> {
  try {
    const formData = new FormData();
    formData.append('file', buildFormData(image));

    const response: ApiResponse<T> = await api.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data;
  } catch (error) {
    throw extractErrorMessage(error);
  }
}

export async function uploadCoverProfile<T = any>(
  url: string,
  image: { path: string },
): Promise<T> {
  try {
    const formData = new FormData();
    formData.append('file', buildFormData(image));

    const response: ApiResponse<T> = await api.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data;
  } catch (error) {
    throw extractErrorMessage(error);
  }
}

interface ReviewData {
  text: string;
  rating: number;
  restaurantId: string;
  imageInfo: any[];
  images: { path: string }[];
}

export async function postReviewApi<T = any>(
  url: string,
  data: ReviewData,
): Promise<T> {
  try {
    const formData = new FormData();

    data.images.forEach(image => {
      formData.append('files', buildFormData(image));
    });

    formData.append('text', data.text);
    formData.append('rating', data.rating.toString());
    formData.append('restaurantId', data.restaurantId);
    formData.append('imageInfo', JSON.stringify(data.imageInfo));

    const response: ApiResponse<T> = await api.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data;
  } catch (error) {
    throw extractErrorMessage(error);
  }
}

export async function eventLogApi<T = any, D = any>(
  url: string,
  data: D,
): Promise<T> {
  try {
    const response: ApiResponse<T> = await api.post(url, data);
    return response.data;
  } catch (error) {
    throw extractErrorMessage(error);
  }
}
