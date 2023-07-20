import React, {useCallback, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import Run from '@assets/icons/run.svg';
import Banner from '@components/Banner';
import {useFocusEffect} from '@react-navigation/native';
import Typography from '../components/Typography';

const Settings = () => {
  const [showBack, setShowBack] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setShowBack(true);
    }, []),
  ); // 컴포넌트가 처음 렌더링될 때 랜덤한 메시지 보여주
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Header>
        <Typography color="gray-600" size={18} weight={500}>
          함께하는 파티원
        </Typography>
      </Header>
      <View>
        <Parent>
          {showBack && (
            <Banner
              onClick={() => {
                setShowBack(false);
              }}
            />
          )}
          <Blocks>
            <Flex>
              <Typography color="gray700" size={16} weight={600}>
                선린인고 친구들
              </Typography>
              <Typography color="orange500" size={12} weight={500}>
                총 베팅금액 50,000원
              </Typography>
            </Flex>
          </Blocks>
        </Parent>
      </View>
    </SafeAreaView>
  );
};

const Parent = styled.View`
  display: flex;
  width: 100%;
  padding: 0 16px;
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
  margin-bottom: 5px;
  //border-bottom-color: #E5E5E5;
`;
const Flex = styled.View`
  display: flex;
  gap: 5px;
`;

const Blocks = styled.View`
  background-color: #fafbfc;
  margin-bottom: 16px;
  width: 100%;
  height: 76px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

export default Settings;
