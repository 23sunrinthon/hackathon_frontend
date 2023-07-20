import React from 'react';
import Typography from '@components/Typography';
import styled from 'styled-components/native';

const CTAButton = ({text, onClick, disabled}) => {
  return (
    <Container onPress={onClick} disabled={disabled}>
      <Typography color="gray100" size={14} weight={500}>
        {text}
      </Typography>
    </Container>
  );
};

const Container = styled.TouchableOpacity<{disabled?: boolean}>`
  padding: 0 16px;
  width: 100%;
  border-radius: 3px;
  background: ${props => (props.disabled ? '#D7D8DA' : '#ff6c19')};
  color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CTAButton;
