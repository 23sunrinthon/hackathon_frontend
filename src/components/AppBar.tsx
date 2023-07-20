import styled from 'styled-components/native';
import {
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Typography from './Typography';
import {HStack} from './Stack';

interface AppBarProps {
  title: string;
  backIcon?: string;
  secondIcon?: string;
  firstIcon?: string;
}

export const AppBarWithBackLeft = ({
  title,
  backIcon,
  secondIcon,
  firstIcon,
}: AppBarProps) => {
  return (
    <HeaderSpaceBetween>
      <HStack spacing={18}>
        <Icon name={backIcon} size={18} />
        <Typography color="gray-600" size={18} weight={500}>
          {title}
        </Typography>
      </HStack>
      <HStack spacing={18}>
        <Icon name={firstIcon} size={20} />
        <Icon name={secondIcon} />
      </HStack>
    </HeaderSpaceBetween>
  );
};

export const AppBarWithTextLeft = () => {
  return (
    <HeaderSpaceBetween>
      <Icon icon="arrow-back" />
      <Typography color="gray-600" size={18} weight={500}>
        홈
      </Typography>
      <View />
    </HeaderSpaceBetween>
  );
};

export const AppBarWithTextLeftAndIcon = ({title, firstIcon, onClick}) => {
  return (
    <HeaderSpaceBetween>
      <Typography color="gray-600" size={18} weight={500}>
        {title}
      </Typography>
      <TouchableOpacity onPress={onClick}>
        <Icon name={firstIcon} size={20} />
      </TouchableOpacity>
    </HeaderSpaceBetween>
  );
};

export const AppBarWithTextCenter = ({title}: AppBarProps) => {
  return (
    <HeaderCenter>
      <Typography color="gray-600" size={16} weight={500}>
        {title}
      </Typography>
    </HeaderCenter>
  );
};

export const AppBarWithTextAndLeft = ({text, onClick}) => {
  return (
    <HeaderLeft>
      <TouchableOpacity onPress={onClick}>
        <Icon name="arrow-back" size={18} />
      </TouchableOpacity>
      <Typography color="gray-600" size={18} weight={500}>
        {text}
      </Typography>
    </HeaderLeft>
  );
};

export const AppBarWithSearchBar = ({onClick}) => {
  return (
    <HeaderSpaceBetween>
      <IconContainer onPress={onClick}>
        <Icon
          style={{fontWeight: '300'}}
          name="arrow-back-ios"
          size={16}
          color="#000"
        />
      </IconContainer>
      <SearchBox>
        <SearchContainer>
          <SearchInput placeholder="검색어를 입력해주세요." />
        </SearchContainer>
      </SearchBox>
    </HeaderSpaceBetween>
  );
};

const HeaderLeft = styled(View)`
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0 16px;
  justify-content: flex-start;
  align-items: center;
  //border-bottom-width: 1px;
  gap: 18px;
  //border-bottom-color: #E5E5E5;
  border-bottom-width: ${props => (props.scrolled ? '1px' : '0px')};
  border-color: #f1f2f3;
`;

const HeaderSpaceBetween = styled(View)`
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  //border-bottom-width: 1px;
  gap: 18px;
  //border-bottom-color: #E5E5E5;
  border-bottom-width: ${props => (props.scrolled ? '1px' : '0px')};
  border-color: #f1f2f3;
`;
const HeaderCenter = styled(View)`
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  //border-bottom-width: 1px;
  gap: 18px;
  //border-bottom-color: #E5E5E5;
  border-bottom-width: ${props => (props.scrolled ? '1px' : '0px')};
  border-color: #f1f2f3;
`;

const IconContainer = styled.Pressable`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const SearchBox = styled(View)`
  width: 100%;
  flex: 1;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#AEAEAE',
})`
  color: #1e1f20;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  font-family: 'SUIT-Medium';
`;

const SearchContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #f1f2f3;
  padding: 0 12px;
  border-radius: 6px;
`;
