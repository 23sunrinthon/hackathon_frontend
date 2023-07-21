import {atom} from 'recoil';

export const partyState = atom({
  key: 'partyState',
  default: {
    partyName: '',
    partyPassword: '',
    batingNum: null,
    goal: null,
    exercise: [],
  },
});
