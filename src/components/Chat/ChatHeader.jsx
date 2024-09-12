import styled from '@emotion/styled';

export default function ChatHeader({ receiver }) {
  return (
    <>
      <Style.Wrapper>
        <Style.LeftWrapper>
          <Style.Icon src="/images/left-arrow.png" alt="arrow" />

          <Style.ReceiverProfile src="/images/dlwlrma.jpg" alt="profile" />

          <Style.UserInfo>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {receiver?.userName}
            </span>
            <span style={{ fontSize: '12px', color: '#979797' }}>
              {receiver?.userId}
            </span>
          </Style.UserInfo>
        </Style.LeftWrapper>
        <Style.RightWrapper>
          <Style.Icon src="/images/alarm.png" alt="profile" />
          <Style.IconVideo src="/images/video.png" alt="profile" />
        </Style.RightWrapper>
      </Style.Wrapper>
    </>
  );
}

const Style = {
  Wrapper: styled.div`
    width: 432px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dbdbdb;
  `,
  LeftWrapper: styled.div`
    width: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  `,
  RightWrapper: styled.div`
    width: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
  `,
  ReceiverProfile: styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
  `,
  Icon: styled.img`
    width: 22px;
    height: 22px;
    cursor: pointer;
  `,
  IconVideo: styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
  `,
  UserInfo: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
};
