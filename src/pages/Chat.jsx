import { useState, useMemo } from 'react';
import styled from '@emotion/styled';
import ChatHeader from '../components/Chat/ChatHeader';
import ChatBody from '../components/Chat/ChatBody';
import ChatInput from '../components/Chat/ChatInput';

import messagesData from '../data/messages.json';
import usersData from '../data/users.json';

export default function Chat() {
  const [messages, setMessages] = useState(messagesData.messages);
  const [users, setUsers] = useState(usersData.users);

  const sortedMessages = useMemo(
    () =>
      [...messages].sort(
        (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
      ),
    [messages]
  ); // 메세지 데이터 받아오면서 바로 정렬할 수 있도록 위치 변경

  const receiverId = useMemo(
    () => sortedMessages.find((message) => !message.isSender)?.userId,
    [sortedMessages]
  ); // 메시지 변경될 때만 수신자 업데이트

  const receiver = users[receiverId];

  const handleSendMessage = async (content) => {
    const newMessage = {
      userId: 'hijh_0522',
      isSender: true,
      content,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <Style.Wrapper>
      <Style.Header>
        <ChatHeader receiver={receiver} />
      </Style.Header>
      <Style.BodyWrapper>
        <Style.Body>
          <ChatBody messages={messages} users={users} />
        </Style.Body>
      </Style.BodyWrapper>
      <ChatInput onSendMessage={handleSendMessage} />
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
    margin-top: 70px;
  `,
  Body: styled.div`
    padding: 22px;
    padding-bottom: 85px;
  `,
};
