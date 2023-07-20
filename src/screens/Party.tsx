import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styled from 'styled-components/native';
import {AppBarWithTextAndLeft} from '@components/AppBar';
import CTAButton from '@components/CTAButton';
import Ranking from '@components/Ranking';

const Party = ({navigation}) => {
  const ranking = [
    {name: '이하람', time: '0534'},
    {name: '이서율', time: '0450'},
    {name: '이왕렬', time: '0113'},
    {name: '한지연', time: '0113'},
    {name: '심희원', time: '0004'},
    {name: '김소연', time: '0001'},
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <AppBarWithTextAndLeft
        text="오늘의 선린인고 친구들 헬짱"
        onClick={() => navigation.goBack()}
      />
      <View>
        <Parent>
          <Ranking rank={1} name={ranking[0].name} time={ranking[0].time} />
          <Ranking rank={2} name={ranking[1].name} time={ranking[1].time} />
          <Ranking rank={3} name={ranking[2].name} time={ranking[2].time} />
          <Ranking rank={4} name={ranking[3].name} time={ranking[3].time} />
          <Ranking rank={5} name={ranking[4].name} time={ranking[4].time} />
          <Ranking rank={6} name={ranking[5].name} time={ranking[5].time} />
        </Parent>
      </View>
      <BottomButton>
        <CTAButton
          onClick={() => {
            navigation.navigate('GroupSetting');
          }}
          text="그룹 설정"
        />
      </BottomButton>
    </SafeAreaView>
  );
};

const BottomButton = styled.View`
  position: absolute;
  padding: 0 16px;
  bottom: 40px;
  width: 100%;
`;

const Parent = styled.View`
  margin-top: 16px;
  display: flex;
  width: 100%;
  padding: 0 16px;
`;

export default Party;
