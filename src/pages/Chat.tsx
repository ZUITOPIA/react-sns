import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import ChatHeader from '../components/ChatRoom/ChatHeader';
import ChatBody from '../components/ChatRoom/ChatBody';
import ChatInput from '../components/ChatRoom/ChatInput';
import { useRecoilState } from 'recoil';
import { MessageState, UserState } from '../atoms';
import { OWNER_USER_ID } from '../constants';

export default function Chat() {
  const { roomId } = useParams<{ roomId: string }>();
  const [messages, setMessage] = useRecoilState(MessageState);
  const [users, setUser] = useRecoilState(UserState);

  const filteredMessages = messages.filter(
    (msg) => msg.roomId === Number(roomId)
  );

  const getParticipants = () => {
    const participantIds = new Set(
      filteredMessages.flatMap((msg) => msg.messages.map((m) => m.userId))
    );
    return users.filter((u) => participantIds.has(u.userId));
  };

  const participants = getParticipants();

  const owner = participants.find(
    (participant) => participant.userId === OWNER_USER_ID
  );

  const otherParticipants = participants.find(
    (participant) => participant.userId !== OWNER_USER_ID
  );

  return (
    <Style.Wrapper>
      <Style.Header>
        <ChatHeader receiver={otherParticipants} />
      </Style.Header>
      <Style.BodyWrapper>
        <Style.Body>
          <ChatBody filteredMessages={filteredMessages} />
        </Style.Body>
      </Style.BodyWrapper>
      <ChatInput />
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
    position: fixed;
    top: 0;
    height: 80px;
    background-color: white;
  `,
  BodyWrapper: styled.div`
    width: 430px;
    height: 100%;
    margin-top: 80px;
  `,
  Body: styled.div`
    padding: 22px;
    padding-bottom: 85px;
  `,
};
