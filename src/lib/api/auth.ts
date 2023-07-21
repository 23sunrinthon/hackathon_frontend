import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import defaultClient from './defaultClient';
import client from '@/lib/api/client';

interface LoginType {
  id: string;
  password: string;
}

// eslint-disable-next-line import/prefer-default-export
export const login = async ({id, password}: LoginType) => {
  console.log('hello');
  defaultClient
    .post(`login`, {
      userLoginEmail: id,
      userLoginPassword: password,
    })
    .then(res => {
      if (res.status === 401) {
        throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
      if (res.data == 'User not found') {
        throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
      AsyncStorage.setItem('access', res.data.accessToken);
    })
    .catch(err => {
      throw new Error(err);
    });
};
