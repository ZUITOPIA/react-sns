export default function ChatBody({ messages, users }) {
  return (
    <>
      {messages.map((message) => {
        const sender = users[message.userId];

        return (
          <>
            {!message.isSender ? (
              <div style={{}}>
                <img
                  style={{ width: '20px' }}
                  src="/dlwlrma.jpg"
                  alt="sender?.userName"
                />
              </div>
            ) : (
              <div>
                <img
                  style={{ width: '20px' }}
                  src="/zuitopia.jpeg"
                  alt="sender?.userName"
                />
              </div>
            )}

            <div>
              <div>{sender?.userId}</div>
              <div>{message.content}</div>
              <div>{new Date(message.timestamp).toLocaleTimeString()}</div>
            </div>
          </>
        );
      })}
    </>
  );
}
