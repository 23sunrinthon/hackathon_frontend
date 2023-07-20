import React from 'react';
import Typography from '@components/Typography';
import styled from 'styled-components/native';
import Run from '@assets/icons/run.svg';
import Join from '@assets/icons/join.svg';

const RepeatBlock = ({title, message, number, type, icon}) => {
  return (
    <Blocks>
      <Flex>
        <Typography color="gray700" size={16} weight={600}>
          {title}
        </Typography>
        {type === 'party' ? (
          <Typography color="orange500" size={12} weight={500}>
            총 베팅 금액 {Number(message).toLocaleString()}원
          </Typography>
        ) : (
          <Typography color="gray400" size={12} weight={500}>
            {message}
          </Typography>
        )}
      </Flex>
      {type === 'party' ? <Join /> : <Run />}
    </Blocks>
  );
};

const Flex = styled.View`
  display: flex;
  gap: 5px;
`;

const Blocks = styled.View`
  background-color: #fafbfc;
  margin-bottom: 16px;
  width: 100%;
  height: 76px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

export default RepeatBlock;
