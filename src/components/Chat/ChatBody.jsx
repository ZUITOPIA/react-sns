import styled from '@emotion/styled';

export default function ChatBody({ messages, users }) {
  return (
    <>
      {messages.map((message) => {
        const sender = users[message.userId];

        return (
          <>
            <Style.OutWrapper isSender={message.isSender}>
              {!message.isSender ? (
                <Style.ProfileImg
                  src={`/${sender?.profilePicture}`}
                  alt={sender?.userName}
                />
              ) : (
                <Style.ProfileImg
                  src={`/${sender?.profilePicture}`}
                  alt={sender?.userName}
                />
              )}

              <Style.InnerWrapper isSender={message.isSender}>
                {sender?.userId}
                <Style.TextBox isSender={message.isSender}>
                  {message.content}
                </Style.TextBox>
                {new Date(message.timestamp).toLocaleTimeString()}
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
    flex-direction: ${(props) => (props.isSender ? 'row-reverse' : 'row')};
    margin-bottom: 16px;
  `,
  InnerWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.isSender ? 'flex-end' : 'flex-start')};
    max-width: 80%;
    margin: ${(props) => (props.isSender ? '0 10px 0 0' : '0 0 0 10px')};
  `,
  TextBox: styled.div`
    padding: 12px;
    border-radius: ${(props) =>
      props.isSender === 1 ? '20px 4px 20px 24px' : '4px 20px 20px 24px'};
    background-color: ${(props) =>
      props.isSender == 1 ? '#6245ff' : '#e9e9e9'};
  `,
  ProfileImg: styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
  `,
};
