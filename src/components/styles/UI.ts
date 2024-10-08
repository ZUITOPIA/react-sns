import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import theme from './theme';

// 재사용 될 텍스트
type StyleText = {
  color?: keyof Theme['color'];
  size?: keyof Theme['fontSize'];
  weight?: keyof Theme['fontWeight'];
  pointer?: boolean;
};

export const Text = {
  Title: styled.span<StyleText>`
    display: inline-block;
    font-weight: ${({ weight }) =>
      weight ? theme.fontWeight[weight] : theme.fontWeight.medium};
    font-size: ${({ size }) =>
      size ? theme.fontSize[size] : theme.fontSize.title};
    color: ${({ color }) => (color ? theme.color[color] : theme.color.black)};
    cursor: ${(props) => props.pointer && 'pointer'};
  `,
  MiddleTitle: styled.span<StyleText>`
    display: inline-block;
    font-weight: ${({ weight }) =>
      weight ? theme.fontWeight[weight] : theme.fontWeight.bold};
    font-size: ${({ size }) =>
      size ? theme.fontSize[size] : theme.fontSize.middleTitle};
    color: ${({ color }) => (color ? theme.color[color] : theme.color.black)};
    cursor: ${(props) => props.pointer && 'pointer'};
  `,
  MiniTitle: styled.span<StyleText>`
    display: inline-block;
    font-weight: ${({ weight }) =>
      weight ? theme.fontWeight[weight] : theme.fontWeight.bold};
    font-size: ${({ size }) =>
      size ? theme.fontSize[size] : theme.fontSize.subtitle};
    color: ${({ color }) => (color ? theme.color[color] : theme.color.black)};
    cursor: ${(props) => props.pointer && 'pointer'};
  `,
  MiniTitle2: styled.span<StyleText>`
    display: inline-block;
    font-weight: ${({ weight }) =>
      weight ? theme.fontWeight[weight] : theme.fontWeight.bold};
    font-size: ${({ size }) =>
      size ? theme.fontSize[size] : theme.fontSize.medium};
    color: ${({ color }) => (color ? theme.color[color] : theme.color.black)};
    cursor: ${(props) => props.pointer && 'pointer'};
  `,
  Body1: styled.span<StyleText>`
    display: inline-block;
    font-weight: ${({ weight }) =>
      weight ? theme.fontWeight[weight] : theme.fontWeight.normal};
    font-size: ${({ size }) =>
      size ? theme.fontSize[size] : theme.fontSize.small};
    color: ${({ color }) =>
      color ? theme.color[color] : theme.color.grayDeep};
    cursor: ${(props) => props.pointer && 'pointer'};
  `,
  Body2: styled.span<StyleText>`
    display: inline-block;
    font-weight: ${({ weight }) =>
      weight ? theme.fontWeight[weight] : theme.fontWeight.normal};
    font-size: ${({ size }) =>
      size ? theme.fontSize[size] : theme.fontSize.medium};
    color: ${({ color }) =>
      color ? theme.color[color] : theme.color.grayDeep};
    cursor: ${(props) => props.pointer && 'pointer'};
    margin-bottom: 3px;
  `,
};

// 재사용 될 블록
type StyleBlock = {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  display?: string;
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  border?: string;
  borderRadius?: string;
  color?: keyof Theme['color'] | string;
  bgColor?: keyof Theme['color'] | string;
  bgImg?: string;
  bgSize?: string;
  gap?: string;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  relative?: boolean;
  zIndex?: string;
  pointer?: boolean;
};

export const Block = {
  AbsoluteBox: styled.div<StyleBlock>`
    position: absolute;
    top: ${(props) => props.top};
    right: ${(props) => props.right};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};
    z-index: ${(props) => props.zIndex};
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.width ? props.height : 'auto')};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
    background-color: ${(props) => props.bgColor};
    cursor: ${(props) => props.pointer && 'pointer'};
  `,
  FlexBox: styled.div<StyleBlock>`
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.width ? props.height : 'auto')};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
    background-color: ${(props) => props.bgColor};
    cursor: ${(props) => props.pointer && 'pointer'};
    gap: ${(props) => props.gap};
  `,
};

// 재사용 될 이미지
type StyleImg = {
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  pointer?: boolean;
};

export const Img = {
  RoundIcon: styled.img<StyleImg>`
    display: block;
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.width ? props.height : 'auto')};
    border: ${(props) => props.border};
    border-radius: 100%;
    cursor: ${(props) => props.pointer && 'pointer'};
  `,
  AngledIcon: styled.img<StyleImg>`
    display: block;
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.width ? props.height : 'auto')};
    border: ${(props) => props.border};
    cursor: ${(props) => props.pointer && 'pointer'};
  `,
};

// 재사용 될 이미지
type StyleInput = {
  width?: string;
  height?: string;
};

export const Input = {
  SearchInput: styled.input<StyleInput>`
    display: block;
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.width ? props.height : 'auto')};
    border: 0;
    cursor: ${(props) => props.pointer && 'pointer'};
    outline: none;
    padding-left: 10px;
    background-color: #f0f0f0;
    border-radius: 10px 10px;
  `,
};
