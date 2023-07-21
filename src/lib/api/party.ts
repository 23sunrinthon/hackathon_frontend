import client from '@/lib/api/client';

export const addParty = async ({
  partyName,
  partyPassword,
  batingNum,
  goal,
  exercise,
}) => {
  const response = await client.post('/party', {
    partyName,
    partyPassword,
    batingNum,
    goal,
    exercise,
  });
  return response.data;
};

export const getParty = async () => {
  const response = await client.get('/party');
  return response.data;
};
