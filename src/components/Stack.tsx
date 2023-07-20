import styled from 'styled-components/native';

export const HStack = styled.View<{
  spacing?: number;
  center?: boolean;
  justify?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => (props.justify ? 'space-between' : 'flex-start')};
  gap: ${props => (props.spacing ? `${props.spacing}px` : '0')};
`;

export const VStack = styled.View<{
  spacing?: number;
  center?: boolean;
  justify?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.center ? 'center' : 'flex-start')};
  justify-content: ${props => (props.justify ? 'space-between' : 'flex-start')};
  gap: ${props => (props.spacing ? `${props.spacing}px` : '0')};
`;
