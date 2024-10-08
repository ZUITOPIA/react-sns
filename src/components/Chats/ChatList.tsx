import React from 'react';
import styled from '@emotion/styled';
import { Img, Input } from '../styles/UI';

export default function ChatList() {
  return (
    <>
      <Style.SearchBoxWrapper>
        <Img.RoundIcon width="18px" src="/images/search.svg" alt="search" />
        <Input.SearchInput placeholder="이름 검색" />
      </Style.SearchBoxWrapper>
      목록 들어갈 위치
    </>
  );
}

const Style = {
  SearchBoxWrapper: styled.div`
    width: 378px;
    height: 36px;
    margin: 20px 12px 36px 12px;
    padding-left: 10px;
    background-color: #f0f0f0;
    border-radius: 10px;
    display: flex;
  `,
};
