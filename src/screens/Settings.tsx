import React, {useCallback, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import Run from '@assets/icons/run.svg';
import Banner from '@components/Banner';
import {useFocusEffect} from '@react-navigation/native';
import RepeatBlock from '@components/RepeatBlock';
import Typography from '../components/Typography';
import CTAButton from "@components/CTAButton";

const Settings = ({navigation}) => {
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
            <Layout
                onPress={() => {
                    navigation.navigate('Party');
                }}>
                <RepeatBlock
                    title="선린인고 친구들"
                    message={500000}
                    member={5}
                    number={2}
                    type="party"
                />
            </Layout>
            <Layout
                onPress={() => {
                    navigation.navigate('Party');
                }}>
                <RepeatBlock
                    title="선린인고 친구들"
                    message={500000}
                    member={5}
                    number={2}
                    type="party"
                />
            </Layout>
            <Layout
                onPress={() => {
                    navigation.navigate('Party');
                }}>
                <RepeatBlock
                    title="선린인고 친구들"
                    message={500000}
                    member={5}
                    number={2}
                    type="party"
                />
            </Layout>
        </Parent>
      </View>
        <BottomButton>
            <CTAButton onClick={() => navigation.navigate('NewGroup')} text="파티 추가하기" />
        </BottomButton>
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
  margin-bottom: 20px;
  //border-bottom-color: #E5E5E5;
`;
const Flex = styled.View`
  display: flex;
  gap: 5px;
`;

const BottomButton = styled.View`
  position: absolute;
  padding: 0 16px;
  bottom: 12px;
  width: 100%;
`;

const Layout = styled.TouchableOpacity`
  width: 100%;
`;


export default Settings;
