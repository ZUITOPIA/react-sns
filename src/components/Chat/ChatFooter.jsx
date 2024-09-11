import styled from '@emotion/styled';
import { useState } from 'react';

export default function ChatFooter({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <Style.Wapper>
      <Style.SearchLogoWrapper>
        <Style.SearchLogo src="/search.png" alt="search" />
      </Style.SearchLogoWrapper>
      <form onSubmit={handleSubmit}>
        <Style.TextAreaWrapper
          placeholder="메세지 보내기"
          value={message}
          onChange={handleInputChange}
        />
      </form>
      <Style.SendMessageLogoWrapper onClick={handleSubmit}>
        <Style.SendMessageLogo src="/plane.png" alt="send" />
      </Style.SendMessageLogoWrapper>
    </Style.Wapper>
  );
}

const Style = {
  Wapper: styled.div`
    width: 388px;
    position: fixed;
    border-radius: 24px;
    bottom: 0;
    height: 48px;
    background-color: #e3e3e35f;
    backdrop-filter: blur(8px);
    margin-bottom: 30px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    padding: 0 12px;
  `,
  SearchLogoWrapper: styled.div`
    width: 32px;
    height: 32px;
    border-radius: 20px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  SearchLogo: styled.img`
    width: 18px;
    height: 18px;
    cursor: pointer;
  `,
  TextAreaWrapper: styled.input`
    width: 296px;
    height: 18px;
    padding: 8px 16px;
    resize: none;
    font-size: 16px;
    font-weight: 400;
    border: none;
    background: none;
    outline: none;
  `,
  SendMessageLogo: styled.img`
    width: 22px;
    height: 22px;
    filter: invert();
    cursor: pointer;
  `,
  SendMessageLogoWrapper: styled.div`
    width: 56px;
    height: 36px;
    background-color: #445ffe;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
