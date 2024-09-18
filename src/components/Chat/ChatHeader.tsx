import React from 'react';
import styled from '@emotion/styled';
import { Text, Img } from '../styles/UI.ts';

type ReceiverType = {
  userId: string;
  userName: string;
};

interface Props {
  receiver?: ReceiverType;
}

export default function ChatHeader({ receiver }: Props) {
  return (
    <>
      <Style.Wrapper>
        <Style.LeftWrapper>
          <Img.AngledIcon
            width="22px"
            src="/images/left-arrow.svg"
            alt="arrow"
          />
          <Img.RoundIcon width="36px" src="/images/dlwlrma.jpg" alt="profile" />
          <Style.UserInfo>
            <Text.MiniTitle>{receiver?.userName}</Text.MiniTitle>
            <Text.Body1>{receiver?.userId}</Text.Body1>
          </Style.UserInfo>
        </Style.LeftWrapper>
        <Style.RightWrapper>
          <Img.AngledIcon
            width="26px"
            pointer
            src="/images/alarm.svg"
            alt="profile"
          />
          <Img.AngledIcon
            width="28px"
            pointer
            src="/images/video.svg"
            alt="profile"
          />
        </Style.RightWrapper>
      </Style.Wrapper>
    </>
  );
}

const Style = {
  Wrapper: styled.div`
    width: 432px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dbdbdb;
  `,
  LeftWrapper: styled.div`
    width: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  `,
  RightWrapper: styled.div`
    width: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
  `,
  UserInfo: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
};
