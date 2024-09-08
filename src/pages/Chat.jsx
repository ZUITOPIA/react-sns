import styled from '@emotion/styled';

export default function Chat() {
  return (
    <>
      <Style.Wrapper>채팅</Style.Wrapper>
    </>
  );
}

const Style = {
  Wrapper: styled.div`
    width: 430px;
    height: 1134px;
    border: 1px solid red;
  `,
};
