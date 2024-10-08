import { atom } from 'recoil';

interface IUsers {
  userId: string;
  userName: string;
  profilePicture: string;
}

export const Users = atom<IUsers[]>({
  key: 'users',
  default: [],
});

interface IMessage {
  isSender: boolean;
  userId: string;
  content: string;
  timestamp: string;
}

interface IChatRoom {
  roomId: number;
  messages: IMessage[];
}

export const Messages = atom<IChatRoom[]>({
  key: 'messages',
  default: [],
});
