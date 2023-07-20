import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import Typography from '../components/Typography';
import styled from 'styled-components/native';
import React from 'react';
import MainTitle from '@assets/icons/main_title.svg';
const Login = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View>
        <Screen>
          <Parent>
            <MainTitle width={131} height={186} />
            <Typography color="gray-700" size={14} weight={500}>
              헬스해서 몸짱이 되자
            </Typography>
          </Parent>
          <UnderParent>
            <Typography color="gray-600" size={14} weight={500}>
              아이디
            </Typography>
            <TextInput
              style={styles.input}
              placeholder="아이디를 입력해주세요"
            />
          </UnderParent>
          <UnderParent>
            <Typography color="gray-600" size={14} weight={500}>
              비밀번호
            </Typography>
            <TextInput
              style={styles.input}
              placeholder="비밀번호를 입력해주세요"
            />
          </UnderParent>
        </Screen>
      </View>
    </SafeAreaView>
  );
};

const Parent = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
`;

const UnderParent = styled.View`
  display: flex;
  padding: 0 16px;
  height: 78px;
  justify-content: space-between;
  margin-top: 27px;
  width: 100%;
`;

const Screen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const styles = StyleSheet.create({
  input: {
    width: 358,
    height: 46,
    backgroundColor: '#FAFBFC',
    Color: '#7A7B7D',
    paddingHorizontal: 10,
    borderRadius: 3,
    fontSize: 14
  },
});
export default Login;
