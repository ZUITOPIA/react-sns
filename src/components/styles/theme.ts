import { Theme } from '@emotion/react';

const color = {
  black: '#1a1a1a',
  white: '#fff',
  grayDeep: '#979797',
  grayLight: '#dbdbdb',
  grayDate: '#888',
  inputBackground: '#e3e3e35f',
  sendMessageLogo: '#445ffe',
  senderMessageBox: '#6245ff',
  receiverMessageBox: '#e9e9e9',
};

const fontSize = {
  small: '12px',
  medium: '14px',
  subtitle: '18px',
  middleTitle: '24px',
  title: '32px',
};

const fontWeight = {
  light: '300',
  normal: '400',
  medium: '500',
  bold: '700',
};

export type ColorsTypes = typeof color;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;

const theme: Theme = {
  color,
  fontSize,
  fontWeight,
};

export default theme;
