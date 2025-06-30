export const FONTS = {
  MONTSERRAT_BLACK: 'Montserrat-Black',                // 900
  MONTSERRAT_BLACK_ITALIC: 'Montserrat-BlackItalic',   // 900 Italic
  MONTSERRAT_BOLD: 'Montserrat-Bold',                  // 700
  MONTSERRAT_BOLD_ITALIC: 'Montserrat-BoldItalic',     // 700 Italic
  MONTSERRAT_EXTRA_BOLD: 'Montserrat-ExtraBold',       // 800
  MONTSERRAT_EXTRA_BOLD_ITALIC: 'Montserrat-ExtraBoldItalic', // 800 Italic
  MONTSERRAT_EXTRA_LIGHT: 'Montserrat-ExtraLight',     // 200
  MONTSERRAT_EXTRA_LIGHT_ITALIC: 'Montserrat-ExtraLightItalic', // 200 Italic
  MONTSERRAT_ITALIC: 'Montserrat-Italic',              // 400 Italic
  MONTSERRAT_LIGHT: 'Montserrat-Light',                // 300
  MONTSERRAT_LIGHT_ITALIC: 'Montserrat-LightItalic',   // 300 Italic
  MONTSERRAT_MEDIUM: 'Montserrat-Medium',              // 500
  MONTSERRAT_REGULAR: 'Montserrat-Regular',            // 400
  MONTSERRAT_SEMI_BOLD: 'Montserrat-SemiBold',         // 600
  MONTSERRAT_SEMI_BOLD_ITALIC: 'Montserrat-SemiBoldItalic', // 600 Italic
  MONTSERRAT_THIN: 'Montserrat-Thin',                  // 100
  MONTSERRAT_THIN_ITALIC: 'Montserrat-ThinItalic',     // 100 Italic
} as const;

export type FontKeys = keyof typeof FONTS;
