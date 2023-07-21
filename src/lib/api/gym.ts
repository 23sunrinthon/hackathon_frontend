import client from './client';

export const getGym = async () => {
  const response = await client.get('/gym');
  return response.data;
};

export const getGymById = async (id: number) => {
  const response = await client.get(`/gym/findbyid`, {
    params: {
      joinTargetPartyUUID: id,
    },
  });
  return response.data;
};
