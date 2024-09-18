import React from 'react';
import styled from '@emotion/styled';

interface MessageDateProps {
  date: string;
}

export default function MessageDate({ date }: MessageDateProps) {
  return <Style.Date>{date}</Style.Date>;
}

const Style = {
  Date: styled.div`
    text-align: center;
    margin: 16px 0;
    font-size: 14px;
    color: #888;
  `,
};
