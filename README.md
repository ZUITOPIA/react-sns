# ReCoder Week3: React-SNS

# 서론

안녕하세요 🙌🏻 다들 한 주 동안 미션 진행하시느라 고생하셨습니다!

이번 미션은 새로운 주제로 돌아왔습니다! 바로 SNS 서비스를 구현해 보는 것인데요. 이번주에는 채팅방 기능을 구현하는 것부터 시작해서 점차적으로 기능을 확장해 나가 보려고 합니다. 따라서 이번 미션에서 중요한 점 중 하나는 **확장성**을 고려하여 개발해 보는 것입니다! 새로운 기능이 추가되고 기존 기능이 변경되어도 유연하게 대처할 수 있도록 코드를 작성해 보세요 🙂

또한 투두리스트 만들기로 리액트를 가볍게 맛보았다면 이번에는 비슷한 기능이지만 한번 더 React의 기초적인 사용법에 익숙해지고, 다양한 hook을 활용해 수 있는 미션이 되었으면 좋겠습니다!

혹시 어려움이 있거나 도움이 필요하다면 언제든지 저를 불러주세요 🙋‍♀️🏃🏻‍♀️

<br/>

# 미션

## 🎯 미션 목표

- `useEffect`와 `useRef`의 사용법을 이해합니다.
- React의 다양한 hook에 대해 알아 봅니다.
- 코드의 확장성을 염두에 두고 개발을 진행합니다.

## ✅ 필수 요건

- [결과 화면](https://corinth-sns.vercel.app/)의 기능을 구현합니다.
- 대화 내용을 `json` 파일에 저장하고, 이를 불러와 사용합니다.
- 말풍선과 함께 사용자 사진, 이름, 보낸 시간을 표시합니다.
- `useRef` 와 `useEffect` 를 이용하여 입력창에 자동으로 focus 되도록 합니다.
- 새로운 메시지를 입력했을 때 스크롤을 채팅방 하단으로 이동시킵니다.

## 🏷️ 선택 사항

- [React의 다양한 hook](https://ko.react.dev/reference/react/hooks)을 사용해 봅니다.
- ‘방해 금지 모드’가 활성화되었을 때 채팅방 하단에 알림 메시지를 띄우고 메시지 입력을 방지합니다.
- 디자인은 마음대로 변경하셔도 됩니다!
- 추가하고 싶은 기능이 있다면 마음껏 추가해 주세요!

## 📖 생각해 볼 질문들

- `useEffect` 와 `useRef`는 어떠한 상황에서 사용하나요?
- `useState` `useEffect` `useRef` 이외에 어떤 hook들이 존재하나요?
- Custom hook은 언제 사용할까요 ?

<br/>

# 참고 자료

- [React 공식 문서 - 내장된 React Hook](https://ko.react.dev/reference/react/hooks)
- [React 공식 문서 - useEffect](https://ko.react.dev/reference/react/useEffect)
- [React 공식 문서 - useRef](https://ko.react.dev/reference/react/useRef)
- [리액트의 Hooks 완벽 정복하기](https://velog.io/@velopert/react-hooks)
