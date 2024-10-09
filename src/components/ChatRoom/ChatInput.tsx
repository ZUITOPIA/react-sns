import React from 'react';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import useInput from '../hooks/useInput';
import { Img } from '../styles/UI';
import { MessageState } from '../../atoms';
import { OWNER_USER_ID } from '../../constants';

export default function ChatInput() {
  const { roomId } = useParams<{ roomId: string }>();
  const [inputValue, handleChange, setInputValue] = useInput<string>('');
  const [messages, setMessages] = useRecoilState(MessageState);

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        isOwner: true,
        userId: OWNER_USER_ID,
        content: inputValue.trim(),
        timestamp: new Date().toISOString(),
      };

      setMessages((prevMessages) =>
        prevMessages.map((room) => {
          if (room.roomId === Number(roomId)) {
            return {
              ...room,
              messages: [...room.messages, newMessage],
            };
          }
          return room;
        })
      );

      setInputValue('');
    } else {
      alert('입력된 메세지가 없습니다.');
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage();
  };

  const handleClick = () => {
    sendMessage();
  };

  return (
    <Style.Wrapper>
      <Style.SearchLogoWrapper>
        <Img.RoundIcon
          width="18px"
          pointer
          src="/images/search.svg"
          alt="search"
        />
      </Style.SearchLogoWrapper>
      <form onSubmit={handleFormSubmit}>
        <Style.TextAreaWrapper
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="메세지 보내기"
          autoFocus
        />
      </form>
      <Style.SendMessageLogoWrapper onClick={handleClick}>
        <Img.RoundIcon
          width="22px"
          pointer
          src="/images/plane.svg"
          alt="send"
        />
      </Style.SendMessageLogoWrapper>
    </Style.Wrapper>
  );
}

const Style = {
  Wrapper: styled.div`
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
    width: 50px;
    height: 32px;
    border-radius: 20px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  TextAreaWrapper: styled.input`
    width: 276px;
    height: 18px;
    padding: 8px 16px;
    resize: none;
    font-size: 16px;
    font-weight: 400;
    border: none;
    background: none;
    outline: none;
  `,
  SendMessageLogoWrapper: styled.div`
    width: 80px;
    height: 36px;
    background-color: #445ffe;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
