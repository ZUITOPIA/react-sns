import { useEffect, useRef } from 'react';
import Message from './Message';
import MessageDate from './MessageDate';

export default function ChatBody({ messages, users }) {
  let lastDate = null;
  const lastMessageRef = useRef(null);

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
