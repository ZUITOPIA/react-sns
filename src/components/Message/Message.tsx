import React from 'react';
import styled from '@emotion/styled';
import { Img, Text } from '../styles/UI';
import { useRecoilState } from 'recoil';
import { UserState } from '../../atoms';

export default function Message({ message, isOwner }) {
  const [users, setUser] = useRecoilState(UserState);

  const user = users.find((u) => u.userId === message.userId);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? '오후' : '오전';
    const formattedHours = String(hours % 12 || 12).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    return `${period} ${formattedHours}:${formattedMinutes}`;
  };

  const formattedTimestamp = formatTimestamp(message.timestamp);

  return (
    <Style.Wrapper isOwner={isOwner}>
      <Img.RoundIcon
        width="36px"
        height="36px"
        src={user?.profilePicture}
        alt={message?.userName}
      />
      <Style.InnerWrapper isOwner={isOwner}>
        <Text.Body2>{message?.userId}</Text.Body2>
        <Style.MessageContainer>
          {isOwner && <Style.DateBox>{formattedTimestamp}</Style.DateBox>}
          <Style.TextBox isOwner={isOwner}>{message.content}</Style.TextBox>

          {!isOwner && <Style.DateBox>{formattedTimestamp}</Style.DateBox>}
        </Style.MessageContainer>
      </Style.InnerWrapper>
    </Style.Wrapper>
  );
}

const Style = {
  Wrapper: styled.div<{ isOwner: boolean }>`
    display: flex;
    flex-direction: ${(props) => (props.isOwner ? 'row-reverse' : 'row')};
    margin: 0 0 20px 0;
  `,
  InnerWrapper: styled.div<{ isOwner: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.isOwner ? 'flex-end' : 'flex-start')};
    margin: ${(props) => (props.isOwner ? '0 10px 0 0' : '0 0 0 10px')};
  `,
  MessageContainer: styled.div`
    display: flex;
  `,
  TextBox: styled.div<{ isOwner: boolean }>`
    padding: 10px 13px;
    margin: 2px 0;
    max-width: 240px;
    border-radius: ${(props) =>
      props.isOwner ? '20px 4px 20px 24px' : '4px 20px 20px 24px'};
    background-color: ${(props) => (props.isOwner ? '#6245ff' : '#e9e9e9')};
    color: ${(props) => (props.isOwner ? '#fff' : '#1a1a1a')};
  `,
  DateBox: styled.div`
    height: 100%;
    font-size: 10px;
    color: #888;
    margin: 0 10px;
    display: flex;
    align-items: flex-end;
  `,
};
