import React from 'react';
import Typography from '@components/Typography';
import styled from 'styled-components/native';

const CTAButton = ({text, onClick}) => {
  return (
    <Container onPress={onClick}>
      <Typography color="gray-100" size={14} weight={500}>
        {text}
      </Typography>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  padding: 0 16px;
  width: 100%;
  border-radius: 3px;
  background: #ff6c19;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CTAButton;
