import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Platform } from 'react-native';

// BASE URLs
export const baseUrl = 'https://dev-backend.liferxbackend.pro';
// export const baseUrl = 'https://men-on-parks-affordable.trycloudflare.com';
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
  const skipAuth = config.headers?.skipAuth;

  if (!skipAuth) {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  // Remove custom flag so it doesn't go to backend
  delete config.headers.skipAuth;

  return config;
});

// api.interceptors.request.use(async config => {
//   const token = await AsyncStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// Extract user-friendly error
function extractErrorMessage(error: any): string {  
  console.log('Full API error:', JSON.stringify(error?.response?.data, null, 2));
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

export async function put<T = any, D = any>(url: string, data: D): Promise<T> {
  try {
    const response: ApiResponse<T> = await api.put(url, data);
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

export const postMultipart = async (url: string, data: FormData) => {
  const token = await AsyncStorage.getItem('token');
  return axios.post(baseUrl + url, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
};

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


// api.ts
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
// import { Platform } from 'react-native';

// // BASE URLs
// export const baseUrl = 'https://dev-backend.liferxbackend.pro';
// export const imageUrl = 'https://utils-dev.swotsup.com/images/uploadImage';

// export const appLink =
//   Platform.OS === 'ios'
//     ? 'itms-apps://apps.apple.com/pk/app/swotsup/id1641071189'
//     : 'https://play.google.com/store/apps/details?id=com.swotsup&hl=en&gl=US';

// const api: AxiosInstance = axios.create({
//   baseURL: baseUrl,
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//     'X-CSRFTOKEN': 'FJKrFK5lG1RJlklQqLSdvjfYGZVEchnejsrk8bjqIz4UjQgeBQVLyzumi06uvnUW',
//   },
// });

// // Error extractor
// function extractErrorMessage(error: any): string {
//   const data = error?.response?.data;
//   if (typeof data === 'string') return data;
//   if (data && typeof data === 'object') {
//     const firstKey = Object.keys(data)[0];
//     const firstValue = data[firstKey];
//     if (Array.isArray(firstValue)) return firstValue[0];
//     if (typeof firstValue === 'string') return firstValue;
//   }
//   return error?.message || 'Something went wrong. Please try again.';
// }

// // Auth header builder
// async function buildAuthHeaders(withAuth: boolean) {
//   if (!withAuth) return {};
//   const token = await AsyncStorage.getItem('token');
//   return token ? { Authorization: `Bearer ${token}` } : {};
// }

// // Generic request methods
// export async function get<T = any>(
//   url: string,
//   customHeaders?: Record<string, string>,
//   withAuth: boolean = true,
// ): Promise<AxiosResponse<T>> {
//   try {
//     const headers = { ...(await buildAuthHeaders(withAuth)), ...(customHeaders || {}) };
//     return await api.get<T>(url, { headers });
//   } catch (error) {
//     throw extractErrorMessage(error);
//   }
// }

// export async function post<T = any, D = any>(
//   url: string,
//   data?: D,
//   customHeaders?: Record<string, string>,
//   withAuth: boolean = true,
// ): Promise<AxiosResponse<T>> {
//   try {
//     const headers = { ...(await buildAuthHeaders(withAuth)), ...(customHeaders || {}) };
//     return await api.post<T>(url, data, { headers });
//   } catch (error) {
//     throw extractErrorMessage(error);
//   }
// }

// export async function patch<T = any, D = any>(
//   url: string,
//   data: D,
//   withAuth: boolean = true,
// ): Promise<T> {
//   try {
//     const headers = await buildAuthHeaders(withAuth);
//     const response = await api.patch<T>(url, data, { headers });
//     return response.data;
//   } catch (error) {
//     throw extractErrorMessage(error);
//   }
// }

// export async function put<T = any, D = any>(
//   url: string,
//   data: D,
//   withAuth: boolean = true,
// ): Promise<T> {
//   try {
//     const headers = await buildAuthHeaders(withAuth);
//     const response = await api.put<T>(url, data, { headers });
//     return response.data;
//   } catch (error) {
//     throw extractErrorMessage(error);
//   }
// }

// export async function deleteRequest<T = any>(
//   url: string,
//   withAuth: boolean = true,
// ): Promise<T> {
//   try {
//     const headers = await buildAuthHeaders(withAuth);
//     const response = await api.delete<T>(url, { headers });
//     return response.data;
//   } catch (error) {
//     throw extractErrorMessage(error);
//   }
// }

// // Image builder for form data
// function buildFormData(image: { path: string }) {
//   const filename = image.path.replace(/^.*[\\\/]/, '');
//   return {
//     uri: image.path,
//     type: 'image/jpeg',
//     name: filename,
//   } as any;
// }

// export async function uploadFile<T = any>(
//   url: string,
//   image: { path: string },
//   withAuth: boolean = true,
// ): Promise<T> {
//   try {
//     const formData = new FormData();
//     formData.append('file', buildFormData(image));
//     const headers = {
//       'Content-Type': 'multipart/form-data',
//       ...(await buildAuthHeaders(withAuth)),
//     };
//     const response = await api.post<T>(url, formData, { headers });
//     return response.data;
//   } catch (error) {
//     throw extractErrorMessage(error);
//   }
// }

// export async function postReviewApi<T = any>(
//   url: string,
//   data: {
//     text: string;
//     rating: number;
//     restaurantId: string;
//     imageInfo: any[];
//     images: { path: string }[];
//   },
//   withAuth: boolean = true,
// ): Promise<T> {
//   try {
//     const formData = new FormData();
//     data.images.forEach(image => {
//       formData.append('files', buildFormData(image));
//     });
//     formData.append('text', data.text);
//     formData.append('rating', data.rating.toString());
//     formData.append('restaurantId', data.restaurantId);
//     formData.append('imageInfo', JSON.stringify(data.imageInfo));

//     const headers = {
//       'Content-Type': 'multipart/form-data',
//       ...(await buildAuthHeaders(withAuth)),
//     };
//     const response = await api.post(url, formData, { headers });
//     return response.data;
//   } catch (error) {
//     throw extractErrorMessage(error);
//   }
// }

// export async function eventLogApi<T = any, D = any>(
//   url: string,
//   data: D,
//   withAuth: boolean = true,
// ): Promise<T> {
//   try {
//     const headers = await buildAuthHeaders(withAuth);
//     const response = await api.post<T>(url, data, { headers });
//     return response.data;
//   } catch (error) {
//     throw extractErrorMessage(error);
//   }
// }

