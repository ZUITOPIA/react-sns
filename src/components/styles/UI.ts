import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import theme from './theme';

type StyleText = {
  color?: keyof Theme['color'];
  size?: keyof Theme['fontSize'];
  weight?: keyof Theme['fontWeight'];
  pointer?: boolean;
};

export const Text = {
  Title: styled.div<StyleText>`
    display: inline-block;
    font-weight: ${({ weight }) =>
      weight ? theme.fontWeight[weight] : theme.fontWeight.medium};
    font-size: ${({ size }) =>
      size ? theme.fontSize[size] : theme.fontSize.title};
    color: ${({ color }) => (color ? theme.color[color] : theme.color.black)};
    cursor: ${(props) => props.pointer && 'pointer'};
  `,
  MiniTitle: styled.div<StyleText>`
    display: inline-block;
    font-weight: ${({ weight }) =>
      weight ? theme.fontWeight[weight] : theme.fontWeight.bold};
    font-size: ${({ size }) =>
      size ? theme.fontSize[size] : theme.fontSize.subtitle};
    color: ${({ color }) => (color ? theme.color[color] : theme.color.black)};
    cursor: ${(props) => props.pointer && 'pointer'};
  `,
  Body1: styled.div<StyleText>`
    display: inline-block;
    font-weight: ${({ weight }) =>
      weight ? theme.fontWeight[weight] : theme.fontWeight.normal};
    font-size: ${({ size }) =>
      size ? theme.fontSize[size] : theme.fontSize.small};
    color: ${({ color }) =>
      color ? theme.color[color] : theme.color.grayDeep};
    cursor: ${(props) => props.pointer && 'pointer'};
  `,
  Body2: styled.div<StyleText>`
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

export const Button = {
  CheckedBox: styled.div`
    width: 18px;
    height: 18px;
    background-image: url('/check.png');
    background-size: contain;
    border-radius: 20px;
    opacity: 0.5;
    filter: invert();
    cursor: pointer;
    margin-right: 14px;
  `,
  UnCheckedBox: styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid lightgray;
    border-radius: 8px;
    cursor: pointer;
    margin-right: 14px;
  `,
  DeleteBtn: styled.div`
    width: 14px;
    height: 14px;
    background-image: url('/delete.png');
    background-size: contain;
    cursor: pointer;
    margin: 20px;
    opacity: 0.5;
    filter: invert();
  `,
};
