import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import CheckBoxIcon from '../assets/icons/checkbox.svg';

const Checkbox = ({enabled, onClick}) => {
  return (
    <Container onPress={onClick} enabled={enabled}>
      <CheckBox />
    </Container>
  );
};

const CheckBox = styled(CheckBoxIcon)`
  width: 16px;
  height: 16px;
`;

const Container = styled.TouchableHighlight.attrs({
  underlayColor: '#FF8F51',
})<{
  enabled: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background-color: ${props => (props.enabled ? '#FF6C19' : '#FFFFFF')};
  border: ${props => (props.enabled ? 'none' : '1px solid #F1F2F3')};
`;

export default Checkbox;
