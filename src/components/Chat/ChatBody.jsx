export default function ChatBody({ messages, users }) {
  return (
    <>
      {messages.map((message) => {
        const sender = users[message.userId];

        return (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: message.isSender ? 'flex-end' : 'flex-start',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: message.isSender ? 'flex-end' : 'flex-start',
                  maxWidth: '60%',
                  padding: '12px',
                  borderRadius: message.isSender
                    ? '20px 4px 20px 24px'
                    : '4px 20px 20px 24px',
                  backgroundColor: message.isSender ? '#6245ff' : '#e9e9e9',
                }}
              >
                {!message.isSender ? (
                  <img
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                    }}
                    src={`/${sender?.profilePicture}`}
                    alt={sender?.userName}
                  />
                ) : (
                  <img
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                    }}
                    src={`/${sender?.profilePicture}`}
                    alt={sender?.userName}
                  />
                )}

                <span>{sender?.userId}</span>
                <div>{message.content}</div>
                <div>{new Date(message.timestamp).toLocaleTimeString()}</div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
