import styled from '@emotion/styled';
export default function ChatFooter() {
  return (
    <>
      <Style.FooterWapper>
        <Style.SearchLogoWrapper>
          <Style.SearchLogo src="/search.png" alt="search" />
        </Style.SearchLogoWrapper>
        <Style.TextAreaWrapper placeholder="메세지 보내기" />
        <Style.SendMessageLogoWrapper>
          <Style.SendMessageLogo src="/plane.png" alt="send" />
        </Style.SendMessageLogoWrapper>
      </Style.FooterWapper>
    </>
  );
}
const Style = {
  FooterWapper: styled.div`
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
  TextAreaWrapper: styled.textarea`
    width: 296px;
    height: 26px;
    padding: 8px 16px;
    resize: none;
    font-size: 18px;
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
