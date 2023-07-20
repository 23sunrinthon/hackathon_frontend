import React, {useEffect, useState} from 'react';
import Typography from '@components/Typography';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import Close from '@assets/icons/close.svg';
import Join from "@assets/icons/join.svg";
import Run from "@assets/icons/run.svg";

const Ranking = ({rank, name, time}) => {
    return (
        <Blocks>
            <Flex>
                {rank === 1 && (
                        <Block>
                            <Typography color="gray100" size={16} weight={600}>
                                {rank}
                            </Typography>
                        </Block>
                    )}
                {rank === 2 && (
                        <Block2>
                            <Typography color="gray100" size={16} weight={600}>
                                {rank}
                            </Typography>
                        </Block2>
                    )
                }
                {rank === 3 && (
                    <Block3>
                        <Typography color="gray100" size={16} weight={600}>
                            {rank}
                        </Typography>
                    </Block3>
                )
                }
                {rank >= 4 && (
                    <Block4>
                        <Typography color="gray100" size={16} weight={600}>
                            {rank}
                        </Typography>
                    </Block4>
                )
                }
                <Child>
                    <Typography color="gray700" size={16} weight={600}>
                        {name}
                    </Typography>
                    <Typography color="gray400" size={12} weight={500}>
                        오늘 총 운동 시간 {time.slice(0, 2)}H {time.slice(2)}M
                    </Typography>
                </Child>
            </Flex>
        </Blocks>
    );
};

const Flex = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const Child = styled.View`
  display: flex;
  gap: 6px;
`

const Block = styled.View`
  background-color: #FF6C19;
  width: 34px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-right: 14px;
`

const Block2 = styled.View`
  background-color: #FF8F51;
  width: 34px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-right: 14px;
`

const Block3 = styled.View`
  background-color: #FFB890;
  width: 34px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-right: 14px;
`


const Block4 = styled.View`
  background-color: #D7D8DA;
  width: 34px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-right: 14px;
`

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

export default Ranking;
