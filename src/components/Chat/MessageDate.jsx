import styled from '@emotion/styled';

const MessageDate = ({ date }) => {
  return <Style.Date>{date}</Style.Date>;
};

const Style = {
  Date: styled.div`
    text-align: center;
    margin: 16px 0;
    font-size: 14px;
    color: #888;
  `,
};

export default MessageDate;
