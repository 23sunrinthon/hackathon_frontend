import React, {useEffect, useState} from 'react';
import Typography from '@components/Typography';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import Close from '@assets/icons/close.svg';

const messages = [
  '건강을 위한 최상의 파트너! 에드캔 프로틴',
  '안전을 위한 최소한의 예방책, 아이왑 밴드',
  '나쁜 지방 쏙 빼는 건강 식품 애플파이',
  '탄수화물 제로 다이어트를 위한 제로픈 워터',
  '너도 이거 알지? 요즘 유행하는 다이어트복',
  '5만명이 선택한 최고의 운동 ANA필라테스',
];

const Banner = ({onClick}) => {
  const [text, setText] = useState('');

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  const handleShowBanner = () => {
    const randomMessage = getRandomMessage();
    setText(randomMessage);
  };

  useEffect(() => {
    handleShowBanner();
  }, []);
  return (
    <Back>
      <Typography color="orange500" size={14} weight={600}>
        {text}
      </Typography>
      <TouchableOpacity onPress={onClick}>
        <Close />
      </TouchableOpacity>
    </Back>
  );
};

const Back = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ffece1;
  width: 100%;
  padding: 0 16px;
  height: 46px;
  border-radius: 3px;
  margin-bottom: 8px;
  margin-top: 4px;
`;

export default Banner;
