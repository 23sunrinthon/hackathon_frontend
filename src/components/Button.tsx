import React, {useState} from 'react';
import {colors} from '../values/color';
import styled from 'styled-components/native';
import Typography from './Typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableHighlight} from 'react-native';

interface Props {
  type: 'primary' | 'secondary' | 'tertiary' | 'outlined';
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
  icon?: string;
  text?: string;
}

const Button = ({type, size, onClick, icon, text}: Props) => {
  const [btnSize, setBtnSize] = useState(1);

  function OnPressIn() {
    setBtnSize(0.98);
  }

  function OnPressOut() {
    setBtnSize(1);
  }

  const ContainerPrimary = styled.View`
    background-color: ${colors.blue500};
    border-radius: 3px;
    display: flex;
    width: fit-content;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 9px 14px;
    gap: 8px;
    flex-shrink: 0;
  `;

  const ContainerSecondary = styled(ContainerPrimary)`
    background-color: ${colors.gray700};
  `;

  const ContainerTertiary = styled(ContainerPrimary)`
    background-color: ${colors.gray200};
  `;

  const ContainerOutlined = styled(ContainerPrimary)`
    background-color: ${colors.white};
    border: 1px solid ${colors.gray300};
  `;

  switch (type) {
    case 'primary':
      return (
        <TouchableHighlight
          style={{
            transform: `scale(${btnSize || 1})`,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#fff',
          }}
          onPress={onClick}
          onPressIn={OnPressIn}
          onPressOut={OnPressOut}>
          <ContainerPrimary size={btnSize}>
            {icon && (
              <Icon
                name={icon}
                size={size === 'small' ? 16 : size === 'medium' ? 18 : 20}
                color="white"
              />
            )}
            {text && (
              <Typography
                color="white"
                size={size === 'small' ? 14 : size === 'medium' ? 16 : 18}
                weight={500}>
                {text}
              </Typography>
            )}
          </ContainerPrimary>
        </TouchableHighlight>
      );
    case 'secondary':
      return (
        <TouchableHighlight
          style={{
            transform: `scale(${btnSize || 1})`,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#fff',
          }}
          onPress={onClick}
          onPressIn={OnPressIn}
          onPressOut={OnPressOut}>
          <ContainerSecondary>
            {icon && (
              <Icon
                name={icon}
                size={size === 'small' ? 16 : size === 'medium' ? 18 : 20}
                color="white"
              />
            )}
            {text && (
              <Typography
                color={'white'}
                size={size === 'small' ? 14 : size === 'medium' ? 16 : 18}
                weight={500}>
                {text}
              </Typography>
            )}
          </ContainerSecondary>
        </TouchableHighlight>
      );
    case 'tertiary':
      return (
        <TouchableHighlight
          style={{
            transform: `scale(${btnSize || 1})`,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#fff',
          }}
          onPress={onClick}
          onPressIn={OnPressIn}
          onPressOut={OnPressOut}>
          <ContainerTertiary>
            {icon && (
              <Icon
                name={icon}
                size={size === 'small' ? 16 : size === 'medium' ? 18 : 20}
                color="gray700"
              />
            )}
            {text && (
              <Typography
                color="gray700"
                size={size === 'small' ? 14 : size === 'medium' ? 16 : 18}
                weight={500}>
                {text}
              </Typography>
            )}
          </ContainerTertiary>
        </TouchableHighlight>
      );
    case 'outlined':
      return (
        <TouchableHighlight
          style={{
            transform: `scale(${btnSize || 1})`,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#fff',
          }}
          onPress={onClick}
          onPressIn={OnPressIn}
          onPressOut={OnPressOut}>
          <ContainerOutlined>
            {icon && (
              <Icon
                name={icon}
                size={size === 'small' ? 16 : size === 'medium' ? 18 : 20}
                color="gray700"
              />
            )}
            {text && (
              <Typography
                color="gray700"
                size={size === 'small' ? 14 : size === 'medium' ? 16 : 18}
                weight={500}>
                {text}
              </Typography>
            )}
          </ContainerOutlined>
        </TouchableHighlight>
      );
  }
};

export default Button;
