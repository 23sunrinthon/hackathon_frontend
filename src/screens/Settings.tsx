import React, {useCallback, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import Run from '@assets/icons/run.svg';
import Banner from '@components/Banner';
import {useFocusEffect} from '@react-navigation/native';
import RepeatBlock from '@components/RepeatBlock';
import CTAButton from '@components/CTAButton';
import {useQuery} from '@tanstack/react-query';
import Typography from '../components/Typography';
import {getParty} from '@/lib/api/party';

const Settings = ({navigation}) => {
  const [showBack, setShowBack] = useState(true);
  const {data, loading, error} = useQuery(['party'], getParty);
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
        <Typography color="gray600" size={18} weight={500}>
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
          <PartyList>
            {data &&
              data.map((item, index) => {
                return (
                  <Layout
                    onPress={() => {
                      navigation.navigate('Party');
                    }}
                    key={index}>
                    <RepeatBlock
                      title={
                        item.partyName.length > 10
                          ? `${item.partyName.substring(0, 19)}...`
                          : item.partyName
                      }
                      message={item.batingNum}
                      member={item.member}
                      number={index + 1}
                      type="party"
                    />
                  </Layout>
                );
              })}
          </PartyList>
        </Parent>
      </View>
      <BottomButton>
        <CTAButton
          onClick={() => navigation.navigate('NewGroup')}
          text="파티 추가하기"
          disabled={false}
        />
      </BottomButton>
    </SafeAreaView>
  );
};

const PartyList = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

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
