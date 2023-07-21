import client from './client';

export const getStore = async () => {
  const response = await client.get('/store/findall');
  return response.data;
};
