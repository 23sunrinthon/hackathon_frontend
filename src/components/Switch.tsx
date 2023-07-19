import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const Switch = ({enabled, onClick}) => {
  return (
    <Container onPress={onClick}
      enabled={enabled}
    >
      <SwitchOne />
    </Container>
  );
};

const SwitchOne = styled.View`
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 13px;
  shadow-color: "#000";
  shadow-offset: 0 2px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62;
  elevation: 4;
`;

const Container = styled.Pressable<{
  enabled: boolean;
}>`
  display: flex;
  width: 54px;
  height: 30px;
  padding: 2px;
  transition: all 0.3s ease-in-out;
  align-items: ${props => (!props.enabled ? "flex-start" : "flex-end")};
  border-radius: 15px;
  background-color: ${props => (props.enabled ? '#159DFF' : '#D7D8DA')};
  
`;

export default Switch;
