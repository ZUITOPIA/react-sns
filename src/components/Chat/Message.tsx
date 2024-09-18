import React from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';
import { Text } from '../styles/UI.ts';

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

export default function Message({ message, sender, isSender }: Props) {
  return (
    <Style.OutWrapper isSender={isSender}>
      <Style.ProfileImg
        src={`/${sender?.profilePicture}`}
        alt={sender?.userName}
      />

      <Style.InnerWrapper isSender={isSender}>
        <Text.Body2>{sender?.userId}</Text.Body2>

        <div style={{ display: 'flex' }}>
          {isSender && (
            <Style.DateBox>
              {format(new Date(message.timestamp), 'hh:mm a')}
            </Style.DateBox>
          )}
          <Style.TextBox isSender={isSender}>{message.content}</Style.TextBox>
          {!isSender && (
            <Style.DateBox>
              {format(new Date(message.timestamp), 'hh:mm a')}
            </Style.DateBox>
          )}
        </div>
      </Style.InnerWrapper>
    </Style.OutWrapper>
  );
}

const Style = {
  OutWrapper: styled.div<{ isSender: boolean }>`
    display: flex;
    flex-direction: ${(props) => (props.isSender ? 'row-reverse' : 'row')};
    margin: 0 0 20px 0;
  `,
  InnerWrapper: styled.div<{ isSender: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.isSender ? 'flex-end' : 'flex-start')};
    margin: ${(props) => (props.isSender ? '0 10px 0 0' : '0 0 0 10px')};
  `,
  TextBox: styled.div<{ isSender: boolean }>`
    max-width: 70%;
    padding: 10px 13px;
    margin: 2px 0 2px 0;
    border-radius: ${(props) =>
      props.isSender ? '20px 4px 20px 24px' : '4px 20px 20px 24px'};
    background-color: ${(props) => (props.isSender ? '#6245ff' : '#e9e9e9')};
    color: ${(props) => (props.isSender ? '#fff' : '#1a1a1a')};
    white-space: pre-wrap;
    word-break: break-word;
  `,
  DateBox: styled.div`
    height: 65%;
    display: flex;
    align-items: end;
    font-size: 10px;
    color: #888;
    margin: 10px;
  `,
  ProfileImg: styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
  `,
};
