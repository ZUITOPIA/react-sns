import React from 'react';
import { Img, Text } from '../components/styles/UI';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

export default function Chats() {
  return (
    <Style.Wrapper>
      <Style.Header>
        <Img.AngledIcon
          width="22px"
          src="/images/left-arrow.svg"
          alt="arrow"
          pointer
        />
        <Text.MiddleTitle>ZUITOPIA</Text.MiddleTitle>
      </Style.Header>

      <Style.BodyWrapper>목록 들어갈 위치</Style.BodyWrapper>
    </Style.Wrapper>
  );
}

const Style = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    position: relative;
  `,
  Header: styled.div`
    width: 410px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    position: fixed;
    top: 0;
    height: 80px;
    background-color: white;
    gap: 13px;
    border-bottom: 1px solid #dbdbdb;
  `,
  BodyWrapper: styled.div`
    width: 430px;
    height: 100%;
    margin-top: 80px;
  `,
};
