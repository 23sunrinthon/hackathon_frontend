import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {
  AppBarWithBackLeft,
  AppBarWithSearchBar,
  AppBarWithTextAndLeft,
} from '@components/AppBar';
import CTAButton from '@components/CTAButton';
import Banner from '@components/Banner';
import {useRecoilState} from 'recoil';
import Typography from '../components/Typography';
import {partyState} from '@/store/party';

const NewGroup = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [money, setMoney] = React.useState('');
  const [data, setData] = useRecoilState(partyState);

  useEffect(() => {
    if (data) {
      if (data.partyName !== '') {
        setName(data.partyName);
      }
      if (data.partyPassword !== '') {
        setPassword(data.partyPassword);
      }
      if (data.batingNum !== null) {
        setMoney(data.batingNum);
      }
    }
  }, [data]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <AppBarWithTextAndLeft
        text="그룹 만들기"
        onClick={() => {
          setData({
            partyName: '',
            partyPassword: '',
            batingNum: null,
            goal: null,
            exercise: [],
          });
          navigation.goBack();
        }}
      />
      <View>
        <UnderParent>
          <Typography color="gray600" size={14} weight={500} left={5}>
            파티 이름
          </Typography>
          <FormContainer>
            <FormInput
              placeholder="파티 이름을 입력해주세요"
              value={name}
              onChangeText={text => setName(text)}
            />
          </FormContainer>
        </UnderParent>
        <UnderParent>
          <Typography color="gray600" size={14} weight={500} left={5}>
            파티 비밀번호
          </Typography>
          <FormContainer>
            <FormInput
              placeholder="파티 비밀번호를 입력해주세요"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
          </FormContainer>
        </UnderParent>
        <UnderParent>
          <Typography color="gray600" size={14} weight={500} left={5}>
            배팅 금액
          </Typography>
          <FormContainer>
            <FormInput
              placeholder="배팅 금액을 입력해주세요"
              value={money}
              onChangeText={text => setMoney(text)}
            />
          </FormContainer>
        </UnderParent>
      </View>
      <BottomButton>
        <CTAButton
          onClick={() => {
            setData({
              ...data,
              partyName: name,
              partyPassword: password,
              batingNum: money,
            });
            navigation.navigate('GroupNext');
          }}
          text="다음 단계"
          disabled={name === '' || password === '' || money === ''}
        />
      </BottomButton>
    </SafeAreaView>
  );
};

const UnderParent = styled.View`
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  margin-top: 27px;
  width: 100%;
`;

const BottomButton = styled.View`
  position: absolute;
  padding: 0 16px;
  bottom: 40px;
  width: 100%;
`;

const FormInput = styled.TextInput.attrs({
  placeholderTextColor: '#7A7B7D',
})`
  color: #1e1f20;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  font-family: 'SUIT-Medium';
  padding: 0 16px;
  width: 100%;
`;

const FormContainer = styled.View`
  width: 100%;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fafbfc;

  border-radius: 3px;
  margin-top: 11px;
`;

export default NewGroup;
