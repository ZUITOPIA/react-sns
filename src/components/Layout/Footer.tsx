import React from 'react';
import { Block, Img } from '../styles/UI';

export default function Footer() {
  return (
    <>
      <Block.FlexBox justifyContent="space-between" padding="30px" gap="28px">
        <Img.AngledIcon
          width="24px"
          src="/images/home.svg"
          alt="home"
          pointer
        />
        <Img.AngledIcon
          width="24px"
          src="/images/search.svg"
          alt="search"
          pointer
        />
        <Img.AngledIcon
          width="24px"
          src="/images/plus.svg"
          alt="plus"
          pointer
        />
        <Img.AngledIcon
          width="24px"
          src="/images/film.svg"
          alt="film"
          pointer
        />
        <Img.RoundIcon
          width="24px"
          src="/images/zuitopia.jpeg"
          alt="user"
          pointer
        />
      </Block.FlexBox>
    </>
  );
}
