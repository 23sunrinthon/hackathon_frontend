import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import React, {useCallback, useEffect, useState} from 'react';
import Close from '@assets/icons/close.svg';
import Run from '@assets/icons/run.svg';
import Button from '@components/Button';
import CTAButton from '@components/CTAButton';
import {useFocusEffect} from '@react-navigation/native';
import Banner from '@components/Banner';
import RepeatBlock from '../components/RepeatBlock';
import Typography from '../components/Typography';

const Chat = ({navigation}) => {
  const [showBack, setShowBack] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setShowBack(true);
    }, []),
  ); // 컴포넌트가 처음 렌더링될 때 랜덤한 메시지 보여주기
  const handleMove = () => {
    // add function
  };

  // @ts-ignore
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Header>
        <Typography color="gray600" size={18} weight={500}>
          운동 측정하기
        </Typography>
      </Header>
      <Parent>
        {showBack && (
          <Banner
            onClick={() => {
              setShowBack(false);
            }}
          />
        )}
        <Layout
          onPress={() => {
            navigation.navigate('Measure');
          }}>
          <RepeatBlock
            title="달리기 운동"
            message="달리기는 체력 향상과 신체 조절에 탁월한 운동입니다."
            number={1}
          />
        </Layout>
        <Layout
          onPress={() => {
            navigation.navigate('Measure');
          }}>
          <RepeatBlock
            title="필라테스"
            message="필라테스는 근력과 유연성을 개선하는 운동입니다."
            number={2}
          />
        </Layout>
        <BottomBanner />
        <BottomButton>
          <CTAButton onClick={handleMove} text="운동 추가하기" />
        </BottomButton>
      </Parent>
      <View />
    </SafeAreaView>
  );
};

const Back = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ffece1;
  width: 100%;
  padding: 0 16px;
  height: 46px;
  border-radius: 3px;
  margin-bottom: 8px;
  margin-top: 4px;
`;

const Layout = styled.TouchableOpacity`
  width: 100%;
`;

const Parent = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;

const BottomBanner = styled.View``;

const BottomButton = styled.View`
  position: absolute;
  bottom: 76px;
  width: 100%;
`;

const Header = styled(View)`
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
  margin-bottom: 20px;
  //border-bottom-color: #E5E5E5;
`;

export default Chat;
