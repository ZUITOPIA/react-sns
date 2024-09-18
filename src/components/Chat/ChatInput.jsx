import styled from '@emotion/styled';
import useInput from '../hooks/useInput';
import { Img } from '../styles/UI';

export default function ChatInput({ onSendMessage }) {
  const [inputValue, handleChange, setInputValue] = useInput('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      onSendMessage(inputValue);
      setInputValue('');
    } else {
      alert('입력된 메세지가 없습니다.');
    }
  };

  return (
    <Style.Wapper>
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
      <Style.SendMessageLogoWrapper onClick={handleFormSubmit}>
        <Img.RoundIcon
          width="22px"
          pointer
          src="/images/plane.svg"
          alt="send"
        />
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
    width: 50px;
    height: 32px;
    border-radius: 20px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  // SearchLogo: styled.img`
  //   width: 18px;
  //   height: 18px;
  //   cursor: pointer;
  // `,
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
  SendMessageLogo: styled.img`
    width: 22px;
    height: 22px;
    filter: invert();
    cursor: pointer;
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
