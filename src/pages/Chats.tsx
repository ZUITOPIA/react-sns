import React from 'react';
import { Img, Text } from '../components/styles/UI';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Footer from '../components/Layout/Footer';
import ChatList from '../components/Chats/ChatList';

export default function Chats() {
  return (
    <Style.Wrapper>
      <Style.Header>
        <Img.AngledIcon
          width="28px"
          src="/images/left-arrow.svg"
          alt="arrow"
          pointer
        />
        <Text.MiddleTitle>ZUITOPIA</Text.MiddleTitle>
      </Style.Header>

      <Style.BodyWrapper>
        <ChatList />
      </Style.BodyWrapper>
      <Style.Footer>
        <Footer />
      </Style.Footer>
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
    width: 428px;
    height: 100%;
    margin-top: 82px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */
  `,
  Footer: styled.div`
    width: 430px;
    height: 82px;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    background-color: white;
    border-top: 1px solid #dbdbdb;
  `,
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
