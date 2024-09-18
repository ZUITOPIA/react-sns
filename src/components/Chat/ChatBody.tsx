import React, { useEffect, useRef } from 'react';
import Message from './Message';
import MessageDate from './MessageDate';

type MessageType = {
  isSender: boolean;
  userId: string;
  content: string;
  timestamp: string;
};

type UserType = {
  userId: string;
  userName: string;
};

type ChatBodyProps = {
  messages: MessageType[];
  users: { [key: string]: UserType };
};

export default function ChatBody({ messages, users }: ChatBodyProps) {
  let lastDate: string | '' = '';
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      {messages.map((message, index) => {
        const sender = users[message.userId];
        const messageDate = new Date(message.timestamp).toLocaleDateString();

        const showDate = messageDate !== lastDate;
        lastDate = messageDate;

        const isSender = Boolean(message.isSender);

        return (
          <div
            key={message.timestamp}
            ref={index === messages.length - 1 ? lastMessageRef : null}
          >
            {showDate && <MessageDate date={messageDate} />}
            <Message message={message} sender={sender} isSender={isSender} />
          </div>
        );
      })}
    </>
  );
}
