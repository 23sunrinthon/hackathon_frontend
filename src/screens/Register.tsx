import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import styled from 'styled-components/native';
import React, {useEffect} from 'react';
import MainTitle from '@assets/icons/main_title.svg';
import CTAButton from '@components/CTAButton';
import {HStack, VStack} from '@components/Stack';
import Checkbox from '@components/Checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppBarWithTextAndLeft} from '@components/AppBar';
import Typography from '../components/Typography';
import {login} from '@/lib/api/auth';

const Register = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleLogin = async () => {
    if (id === '' || password === '') {
      setError('아이디와 비밀번호를 입력해주세요.');
    } else {
      login({id, password})
        .then(res => {
          navigation.navigate('Main');
        })
        .catch(error => {
          setError('아이디와 비밀번호를 확인해주세요.');
        });
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <AppBarWithTextAndLeft
        text="헬짱 회원가입"
        onClick={() => {
          navigation.goBack();
        }}
      />
      <Screen>
        <ViewFront>
          <UnderParent>
            <Typography color="gray600" size={14} weight={500} left={5}>
              아이디
            </Typography>
            <FormContainer>
              <FormInput
                placeholder="아이디를 입력해주세요"
                value={id}
                onChangeText={text => setId(text)}
              />
            </FormContainer>
          </UnderParent>
          <UnderParent>
            <Typography color="gray600" size={14} weight={500} left={5}>
              비밀번호
            </Typography>
            <FormContainer>
              <FormInput
                placeholder="비밀번호를 입력해주세요"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={text => setPassword(text)}
              />
            </FormContainer>
            <FormContainer>
              <FormInput
                placeholder="비밀번호를 다시 한번 입력해주세요"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={text => setPassword(text)}
              />
            </FormContainer>
          </UnderParent>
          <Layout3>
            <HStack spacing={11} center justify>
              <Checkbox
                enabled={passwordVisible}
                onClick={() => setPasswordVisible(!passwordVisible)}
              />
              <Typography color="gray600" size={14} weight={500}>
                비밀번호 표시
              </Typography>
            </HStack>
          </Layout3>
        </ViewFront>
        <ViewUnder>
          <Layout>
            <CTAButton
              text="회원가입"
              onClick={async () => {
                await handleLogin();
              }}
              disabled={id === '' || password === ''}
            />
          </Layout>
        </ViewUnder>
      </Screen>
    </SafeAreaView>
  );
};

const ViewUnder = styled.View`
  width: 100%;
  height: 120px;
`;
const ViewFront = styled.View`
  width: 100%;
  flex: 1;
`;

const Layout2 = styled.View`
  width: 100%;
  margin-top: 25px;
  display: flex;
  align-items: center;
`;

const Layout = styled.View`
  padding: 0 16px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Layout3 = styled.View`
  padding: 0 16px;
  width: 100%;
  margin-top: 22px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Parent = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UnderParent = styled.View`
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  margin-top: 27px;
  width: 100%;
`;

const Screen = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export default Register;
