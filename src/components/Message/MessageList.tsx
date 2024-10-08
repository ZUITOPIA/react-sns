import React from 'react';
import styled from '@emotion/styled';
import { Img, Input } from '../styles/UI';
import messagesData from '../../data/messages.json';
import usersData from '../../data/users.json';
import MessageItem from './MessageItem';

export default function MessageList() {
  const OWNER_USER_ID = 'hijh_0522';

  const filteredUsers = Object.values(usersData.users).filter(
    (user) => user.userId !== OWNER_USER_ID
  );

  return (
    <>
      <Style.SearchBoxWrapper>
        <Img.RoundIcon width="18px" src="/images/search.svg" alt="search" />
        <Input.SearchInput placeholder="이름 검색" />
      </Style.SearchBoxWrapper>

      <Style.MessageListWrapper>
        {messagesData.chatRooms.map((room) => {
          const lastMessage = room.messages[room.messages.length - 1];

          const roomParticipants = filteredUsers.filter((user) =>
            room.messages.some((message) => message.userId === user.userId)
          );

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
