import React from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';
import { Img, Text } from '../styles/UI';

type UserType = {
  userId: string;
  userName: string;
  profilePicture?: string;
};

type MessageType = {
  isSender: boolean;
  userId: string;
  content: string;
  timestamp: string;
};

interface Props {
  message: MessageType;
  sender: UserType;
  isSender: boolean;
}

const OWNER_USER_ID = 'hijh_0522';

export default function Message({ message, sender }: Props) {
  const isOwner = sender.userId === OWNER_USER_ID;

  return (
    <Style.Wrapper isOwner={isOwner}>
      <Img.RoundIcon
        width="32px"
        height="32px"
        src={`${sender?.profilePicture}`}
        alt={sender?.userName}
      />
      <Style.InnerWrapper isOwner={isOwner}>
        <Text.Body2>{sender?.userId}</Text.Body2>
        <Style.MessageContainer>
          {isOwner && (
            <Style.DateBox>
              {format(new Date(message.timestamp), 'hh:mm a')}
            </Style.DateBox>
          )}
          <Style.TextBox isOwner={isOwner}>{message.content}</Style.TextBox>

          {!isOwner && (
            <Style.DateBox>
              {format(new Date(message.timestamp), 'hh:mm a')}
            </Style.DateBox>
          )}
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
    margin-left: 10px;
    display: flex;
    align-items: flex-end;
  `,
};
