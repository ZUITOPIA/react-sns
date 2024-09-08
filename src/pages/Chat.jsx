import styled from '@emotion/styled';
import ChatHeader from '../components/Chat/ChatHeader';
import ChatBody from '../components/Chat/Chatbody';

export default function Chat() {
  return (
    <>
      <Style.Wrapper>
        <Style.Header>
          <ChatHeader />
        </Style.Header>
        <Style.Body>
          <ChatBody />
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
