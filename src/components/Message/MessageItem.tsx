import React from 'react';
import { Block, Img, Text } from '../styles/UI';
import { useNavigate } from 'react-router-dom';

export default function MessageItem({ user, lastMessage, roomId }) {
  const navigate = useNavigate();
  const handleMessageClick = () => {
    navigate(`/chat/${roomId}`);
  };
  return (
    <>
      <Block.FlexBox
        gap="20px"
        margin="0 0 30px 0"
        pointer
        onClick={handleMessageClick}
      >
        <Img.RoundIcon
          width="52px"
          height="52px"
          src={user?.profilePicture}
          alt={user?.userName}
        />

        <Block.FlexBox direction="column" justifyContent="center" gap="5px">
          <Text.MiniTitle2>{user?.userName}</Text.MiniTitle2>
          <Text.Body2>{lastMessage.content}</Text.Body2>
        </Block.FlexBox>
      </Block.FlexBox>
    </>
  );
}
