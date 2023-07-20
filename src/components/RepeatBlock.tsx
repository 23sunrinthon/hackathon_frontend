import React from 'react';
import Typography from '@components/Typography';
import styled from 'styled-components/native';
import Run from "@assets/icons/run.svg";

const RepeatBlock = ({title, message, number}) => {
    return (
    <Blocks>
        <Flex>
            <Typography
                color="gray700"
                size={16}
                weight={600}
            >
                {title}
            </Typography>
            <Typography
                color="gray400"
                size={12}
                weight={500}
            >
                {message}
            </Typography>
        </Flex>
        <Run></Run>
    </Blocks>
    );
};

const Flex = styled.View`
  display: flex;
  gap: 5px;
`

const Blocks = styled.View`
  background-color: #FAFBFC;
  margin-bottom: 16px;
  width: 358px;
  height: 76px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;


export default RepeatBlock;
