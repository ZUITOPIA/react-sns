import styled from '@emotion/styled';

const Message = ({ message, sender, isSender }) => {
  return (
    <Style.OutWrapper isSender={isSender}>
      <Style.ProfileImg
        src={`/${sender?.profilePicture}`}
        alt={sender?.userName}
      />

      <Style.InnerWrapper isSender={isSender}>
        <span
          style={{
            fontSize: '14px',
            color: '#979797',
            marginBottom: '5px',
          }}
        >
          {sender?.userId}
        </span>

        <div style={{ display: 'flex' }}>
          {isSender && (
            <Style.DateBox isSender={isSender}>
              {new Date(message.timestamp).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Style.DateBox>
          )}
          <Style.TextBox isSender={isSender}>{message.content}</Style.TextBox>
          {!isSender && (
            <Style.DateBox isSender={isSender}>
              {new Date(message.timestamp).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Style.DateBox>
          )}
        </div>
      </Style.InnerWrapper>
    </Style.OutWrapper>
  );
};

const Style = {
  OutWrapper: styled.div`
    display: flex;
    flex-direction: ${(props) => (props.isSender ? 'row-reverse' : 'row')};
    margin: 0 0 20px 0;
  `,
  InnerWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.isSender ? 'flex-end' : 'flex-start')};
    margin: ${(props) => (props.isSender ? '0 10px 0 0' : '0 0 0 10px')};
  `,
  TextBox: styled.div`
    max-width: 70%;
    padding: 10px 13px;
    margin: 2px 0 2px 0;
    border-radius: ${(props) =>
      props.isSender ? '20px 4px 20px 24px' : '4px 20px 20px 24px'};
    background-color: ${(props) => (props.isSender ? '#6245ff' : '#e9e9e9')};
    color: ${(props) => (props.isSender ? '#fff' : '#1a1a1a')};
    white-space: pre-wrap;
    word-break: break-word;
  `,
  DateBox: styled.div`
    height: 65%;
    display: flex;
    align-items: end;
    font-size: 10px;
    color: #888;
    margin: 10px;
  `,
  ProfileImg: styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
  `,
};

export default Message;
