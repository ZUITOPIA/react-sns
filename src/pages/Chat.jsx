import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ChatHeader from '../components/Chat/ChatHeader';
import ChatBody from '../components/Chat/ChatBody';
import ChatFooter from '../components/Chat/ChatFooter';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState({});

  const getMessages = async () => {
    const res = await fetch('/data/messages.json');
    const data = await res.json();
    setMessages(data.messages);
  };

  const getUsers = async () => {
    const res = await fetch('/data/users.json');
    const data = await res.json();
    setUsers(data.users);
  };

  const receiverId = messages.find((message) => !message.isSender)?.userId;
  const receiver = users[receiverId];

  useEffect(() => {
    getMessages();
    getUsers();
  }, []);

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
      <ChatFooter />
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
