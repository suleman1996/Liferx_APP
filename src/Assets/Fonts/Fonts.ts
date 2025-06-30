export const FONTS = {
  HIND_REGULAR: 'HindSiliguri-Regular', // Font weight: 400 (Regular)
  HIND_BOLD: 'HindSiliguri-Bold', // Font weight: 700 (Bold)
  HIND_MEDIUM: 'HindSiliguri-Medium', // Font weight: 500 (Medium)
  HIND_LIGHT: 'HindSiliguri-Light', // Font weight: 300 (Light)
  HIND_SEMIBOLD: 'HindSiliguri-SemiBold', // Font weight: 600 (SemiBold)
} as const;

export type FontKeys = keyof typeof FONTS;
