import styled from '@emotion/styled';

export default function ChatBody({ messages, users }) {
  return (
    <>
      {messages.map((message) => {
        const sender = users[message.userId];

        return (
          <>
            <Style.OutWrapper isSender={message.isSender}>
              <Style.InnerWrapper isSender={message.isSender}>
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
                <Style.TextBox isSender={message.isSender}>
                  {message.content}
                </Style.TextBox>
                <div>{new Date(message.timestamp).toLocaleTimeString()}</div>
              </Style.InnerWrapper>
            </Style.OutWrapper>
          </>
        );
      })}
    </>
  );
}
const Style = {
  OutWrapper: styled.div`
    display: flex;
    justify-content: ${(props) => (props.isSender ? 'flex-end' : 'flex-start')};
  `,
  InnerWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.isSender ? 'flex-end' : 'flex-start')};
    max-width: 80%;
  `,
  TextBox: styled.div`
    padding: 12px;
    border-radius: ${(props) =>
      props.isSender === 1 ? '20px 4px 20px 24px' : '4px 20px 20px 24px'};

    background-color: ${(props) =>
      props.isSender == 1 ? '#6245ff' : '#e9e9e9'};
  `,
};
