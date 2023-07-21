import React, {useCallback, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import Checkbox from '@components/Checkbox';
import Banner from '@components/Banner';
import {useFocusEffect} from '@react-navigation/native';
import RepeatBlock from '@components/RepeatBlock';
import Typography from '../components/Typography';
import Button from '../components/Button';
import Switch from '../components/Switch';
import {HStack, VStack} from '../components/Stack';
import {
  AppBarDefault,
  AppBarWithBackLeft,
  AppBarWithSearchBar,
  AppBarWithTextCenter,
} from '../components/AppBar';

const Home = ({navigation}) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [showBack, setShowBack] = useState(true);

  const PartyData = [
    {
      name: '선린공듀들',
      rank1: '주현명',
      rank2: '이서율',
      rank3: '이하람',
      myRank: 1,
      myName: '주현명',
    },
    {
      name: '선린공듀들',
      rank1: '주현명',
      rank2: '이서율',
      rank3: '이하람',
      myRank: 2,
      myName: '주현명',
    },
  ];

  useFocusEffect(
    useCallback(() => {
      setShowBack(true);
    }, []),
  ); // 컴포넌트가 처음 렌더링될 때 랜덤한 메시지 보여주기
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <AppBarDefault />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <Layout>
          {showBack && (
            <Banner
              onClick={() => {
                setShowBack(false);
              }}
            />
          )}
        </Layout>
        <Layout2>
          <Typography color="gray700" size={16} weight={600}>
            내 파티
          </Typography>
        </Layout2>
        <Layout3>
          <CardLayout
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              rowGap: 16,
            }}>
            <CardLayoutHorizontal>
              <Card
                name="선린공듀들"
                rank1="주현명"
                rank2="이서율"
                rank3="이하람"
                myRank={1}
                onClick={() => {
                  navigation.navigate('Party');
                }}
                myName="주현명"
              />
              <Card
                name="애플파이"
                rank1="오유성"
                rank2="김강민"
                rank3="김서하"
                myRank={2}
                onClick={() => {
                  navigation.navigate('Party');
                }}
                myName="김강민"
              />
            </CardLayoutHorizontal>
            <CardLayoutHorizontal>
              <Card
                name="아이왑"
                rank1="조성훈"
                rank2="이서율"
                rank3="주현명"
                myRank={2}
                onClick={() => {
                  navigation.navigate('Party');
                }}
                myName="이서율"
              />
              <Card
                name="솦과최강"
                rank1="이왕렬"
                rank2="김소연"
                rank3="한지연"
                myRank={4}
                onClick={() => {
                  navigation.navigate('Party');
                }}
                myName="심희원"
              />
            </CardLayoutHorizontal>
          </CardLayout>
        </Layout3>
        <Layout6>
          <Typography color="gray700" size={16} weight={600}>
            최근 많이 한 운동
          </Typography>
        </Layout6>
        <Layout4
          onPress={() => {
            navigation.navigate('Measure');
          }}>
          <RepeatBlock
            title="필라테스"
            message="필라테스는 근력과 유연성을 개선하는 운동입니다."
            number={2}
          />
        </Layout4>
        <Layout4
          onPress={() => {
            navigation.navigate('Measure');
          }}>
          <RepeatBlock
            title="달리기"
            message="달리기는 체력 단련과 신체 조절에 탁월한 운동입니다."
            number={2}
          />
        </Layout4>
      </ScrollView>
    </SafeAreaView>
  );
};

const Layout4 = styled.TouchableOpacity`
  width: 100%;
  padding: 0 16px;
`;

const Card = ({name, rank1, rank2, rank3, myRank, onClick, myName}) => {
  return (
    <CardComponentContainer onPress={onClick}>
      <CardContainer>
        <Typography color="gray700" size={16} weight={600}>
          {name}
        </Typography>
        <VStack spacing={8} center justify>
          <RankAndName rank={1} name={rank1} />
          <RankAndName rank={2} name={rank2} />
          <RankAndName rank={3} name={rank3} />
        </VStack>
        <HStack spacing={15} center justify>
          <Typography color="gray700" size={16} weight={600}>
            내 순위
          </Typography>
          <RankAndName rank={myRank} name={myName} />
        </HStack>
      </CardContainer>
    </CardComponentContainer>
  );
};

const RankAndName = ({rank, name}) => {
  return (
    <RankAndNameContainer>
      <RankC rank={rank}>
        <Typography color="gray100" size={12} weight={500}>
          {rank}
        </Typography>
      </RankC>
      <Typography color="gray600" size={14} weight={500}>
        {name}
      </Typography>
    </RankAndNameContainer>
  );
};

const RankAndNameContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 8px;
`;

const RankC = styled.View<{rank: number}>`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => {
    switch (props.rank) {
      case 1:
        return '#FF6C19';
      case 2:
        return '#FF8F51';
      case 3:
        return '#FFB890';
      default:
        return '#D7D8DA';
    }
  }};
`;

const Layout3 = styled.View`
  padding: 0 16px;
  margin-top: 16px;
  flex: 1;
`;

const CardComponentContainer = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardContent = styled.View`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CardContainer = styled.View`
  height: 180px;
  border-radius: 6px;
  background-color: white;
  border: 1px solid #efecec;
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const CardLayoutHorizontal = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const CardLayout = styled.ScrollView`
  margin-top: 9px;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Layout2 = styled.View`
  width: 100%;
  padding: 0 16px;
  margin-top: 16px;
`;

const Layout6 = styled.View`
  width: 100%;
  padding: 0 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Layout = styled.View`
  width: 100%;
  padding: 0 16px;
`;

const Parent = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
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
  //border-bottom-color: #E5E5E5;
  border-bottom-width: ${props => (props.scrolled ? '1px' : '0px')};
  border-color: #f1f2f3;
`;

export default Home;
