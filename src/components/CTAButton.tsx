import React from 'react';
import Typography from '@components/Typography';
import styled from 'styled-components/native';

const CTAButton = ({text, onClick, disabled}) => {
  return (
<<<<<<< HEAD
    <Container onPress={onClick} disabled={disabled}>
=======
    <Container onPress={onClick}>
>>>>>>> e017c97589463fc38138db40af89ccb4d90e8d76
      <Typography color="gray100" size={14} weight={500}>
        {text}
      </Typography>
    </Container>
  );
};

const Container = styled.TouchableOpacity<{disabled?: boolean}>`
  padding: 0 16px;
  width: 358px;
  border-radius: 3px;
<<<<<<< HEAD
  background: ${props => (props.disabled ? '#D7D8DA' : '#ff6c19')};
=======
  color: white;
  background: #ff6c19;
>>>>>>> e017c97589463fc38138db40af89ccb4d90e8d76
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CTAButton;
