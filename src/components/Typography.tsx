import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../values/color';

interface Props {
  color: string;
  size: number;
  weight: number;
  children: React.ReactNode;
  left?: number;
}

function Typography({color, size, weight, children, left}: Props) {
  let fontFamily = 'SUIT-Medium';
  switch (weight) {
    case 400:
      fontFamily = 'SUIT-Regular';
      break;
    case 500:
      fontFamily = 'SUIT-Medium';
      break;
    case 600:
      fontFamily = 'SUIT-SemiBold';
      break;
    case 700:
      fontFamily = 'SUIT-Bold';
      break;
    default:
      fontFamily = 'SUIT-Medium';
      break;
  }

  const Container = styled.Text`
    color: ${colors[color || 'gray600']};
    font-size: ${`${size}px`};
    font-family: ${fontFamily};
    margin-left: ${left ? `${left}px` : '0px'};
  `;
  return <Container>{children}</Container>;
}

export default Typography;
