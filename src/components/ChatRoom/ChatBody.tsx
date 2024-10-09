import React, { useEffect, useRef } from 'react';
import Message from '../Message/Message';

export default function ChatBody({ filteredMessages }) {
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [filteredMessages]);

  return (
    <>
      {filteredMessages[0].messages.map((message, index) => {
        return (
          <div
            key={index}
            ref={
              index === filteredMessages[0].messages.length - 1
                ? lastMessageRef
                : null
            }
          >
            <Message message={message} isOwner={message.isOwner} />
          </div>
        );
      })}
    </>
  );
}
