import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ChatHeader from '../components/Chat/ChatHeader';
import ChatBody from '../components/Chat/ChatBody';

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

  const receiverId = messages.find((message) => message.isSender === 0)?.userId;
  const receiver = users[receiverId];

  useEffect(() => {
    getMessages();
    getUsers();
  }, []);

  return (
    <>
      <Style.Wrapper>
        <Style.Header>
          <ChatHeader receiver={receiver} />
        </Style.Header>
        <Style.Body>
          <ChatBody messages={messages} users={users} />
        </Style.Body>
      </Style.Wrapper>
    </>
  );
}

const Style = {
  Wrapper: styled.div`
    width: 430px;
    height: 1134px;
    border: 1px solid lightgray;
  `,
  Header: styled.div`
    padding: 22px;
    border-bottom: 1px solid lightgray;
  `,
  Body: styled.div`
    width: 92.5%;
    padding: 22px;
  `,
};
