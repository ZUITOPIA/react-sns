import { atom } from 'recoil';

interface IUser {
  userId: string;
  userName: string;
  profilePicture: string;
  roomId: number | number[];
}

export const UserState = atom<IUser[]>({
  key: 'users',
  default: [
    {
      userId: 'hijh_0522',
      userName: '고주희',
      profilePicture: '/images/zuitopia.jpeg',
      roomId: [1, 2, 3],
    },
    {
      userId: 'dlwlrma',
      userName: '이지금',
      profilePicture: '/images/dlwlrma.jpg',
      roomId: 1,
    },
    {
      userId: 'eunwo.o_c',
      userName: '차은우',
      profilePicture: '/images/eunwoo.png',
      roomId: 2,
    },
    {
      userId: 'katarinabluu',
      userName: 'KARINA',
      profilePicture: '/images/katarinabluu.png',
      roomId: 3,
    },
  ],
});

interface IMessage {
  isOwner: boolean;
  userId: string;
  content: string;
  timestamp: string;
}

interface IChatRoom {
  roomId: number;
  messages: IMessage[];
}

export const MessageState = atom<IChatRoom[]>({
  key: 'messages',
  default: [
    {
      roomId: 1,
      messages: [
        {
          isOwner: false,
          userId: 'dlwlrma',
          content: '꿈에서도 그리운 목소리는 이름 불러도 대답을 하지 않아',
          timestamp: '2024-09-08 10:00:00',
        },
        {
          isOwner: true,
          userId: 'hijh_0522',
          content: '글썽이는 그 메아리만 돌아와 그 소리를 나 혼자서 들어',
          timestamp: '2024-09-08 10:01:00',
        },
        {
          isOwner: false,
          userId: 'dlwlrma',
          content: '깨어질 듯이 차가워도',
          timestamp: '2024-09-08 10:02:00',
        },
        {
          isOwner: true,
          userId: 'hijh_0522',
          content: '이번에는 결코 놓지 않을게 아득히 멀어진 그날의 두 손을',
          timestamp: '2024-09-08 10:03:00',
        },
        {
          isOwner: false,
          userId: 'dlwlrma',
          content:
            '끝없이 길었던 짙고 어두운 밤 사이로 조용히 사라진 니 소원을 알아',
          timestamp: '2024-09-10 12:02:00',
        },
        {
          isOwner: true,
          userId: 'hijh_0522',
          content: '가자 이 새벽이 끝나는 곳으로',
          timestamp: '2024-09-08 12:03:00',
        },
        {
          isOwner: false,
          userId: 'dlwlrma',
          content: '갈까 말까',
          timestamp: '2024-09-08 12:05:00',
        },
        {
          isOwner: true,
          userId: 'hijh_0522',
          content: '싫으면 시집가',
          timestamp: '2024-09-08 12:06:00',
        },
        {
          isOwner: false,
          userId: 'dlwlrma',
          content: '코끝을 간지럽히는 살랑 부는',
          timestamp: '2024-09-08 14:05:00',
        },
        {
          isOwner: true,
          userId: 'hijh_0522',
          content: '눈 감으면 어디든 네 곁에',
          timestamp: '2024-09-10 14:24:00',
        },
        {
          isOwner: false,
          userId: 'dlwlrma',
          content: '어느새 내 맘이 춤을 추네',
          timestamp: '2024-09-10 14:24:00',
        },
        {
          isOwner: true,
          userId: 'hijh_0522',
          content: '한없이 예쁜 날이야',
          timestamp: '2024-09-10 14:25:00',
        },
      ],
    },
    {
      roomId: 2,
      messages: [
        {
          isOwner: false,
          userId: 'eunwo.o_c',
          content: '나 잘생겨서 다야',
          timestamp: '2024-10-02 19:02:00',
        },
        {
          isOwner: true,
          userId: 'hijh_0522',
          content: '그래 너 다 해라',
          timestamp: '2024-10-02 19:03:00',
        },
      ],
    },
    {
      roomId: 3,
      messages: [
        {
          isOwner: false,
          userId: 'katarinabluu',
          content: '밥 뭐먹을까',
          timestamp: '2024-10-03 17:23:00',
        },
        {
          isOwner: true,
          userId: 'hijh_0522',
          content: '그러게',
          timestamp: '2024-10-03 18:09:00',
        },
      ],
    },
  ],
});
