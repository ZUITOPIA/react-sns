import React from 'react';
import styled from '@emotion/styled';
import { Img, Input } from '../styles/UI';
import MessageItem from './MessageItem';
import { OWNER_USER_ID } from '../../constants';
import { useRecoilState } from 'recoil';
import { MessageState, UserState } from '../../atoms';

export default function MessageList() {
  const [messages, setMessage] = useRecoilState(MessageState);
  const [users, setUser] = useRecoilState(UserState);

  const getRoomParticipants = (room) => {
    return users.filter((participant) =>
      room.messages.some(
        (message) =>
          message.userId === participant.userId &&
          message.userId !== OWNER_USER_ID
      )
    );
  };

  return (
    <>
      <Style.SearchBoxWrapper>
        <Img.RoundIcon width="18px" src="/images/search.svg" alt="search" />
        <Input.SearchInput placeholder="이름 검색" />
      </Style.SearchBoxWrapper>

      <Style.MessageListWrapper>
        {messages.map((room) => {
          const lastMessage = room.messages[room.messages.length - 1];

          const roomParticipants = getRoomParticipants(room);
          console.log(roomParticipants);

          return roomParticipants.map((user) => (
            <MessageItem
              key={user.userId}
              user={user}
              lastMessage={lastMessage}
              roomId={room.roomId}
            />
          ));
        })}
      </Style.MessageListWrapper>
    </>
  );
}

const Style = {
  SearchBoxWrapper: styled.div`
    width: 378px;
    height: 36px;
    margin: 20px 12px 29px 12px;
    padding-left: 10px;
    background-color: #f0f0f0;
    border-radius: 10px;
    display: flex;
  `,
  MessageListWrapper: styled.div`
    width: 90%;
    height: 84%;
  `,
};
