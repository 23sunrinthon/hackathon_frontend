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

  const handleScroll = (event: any) => {
    if (event.nativeEvent.contentOffset.y > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

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
        onScroll={handleScroll}
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
          <Typography color="gray-700" size={16} weight={600}>
            오늘의 목표
          </Typography>
        </Layout2>
        <Layout2>
          <Typography color="gray-700" size={16} weight={600}>
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
              <Card />
              <Card />
            </CardLayoutHorizontal>
            <CardLayoutHorizontal>
              <Card />
              <Card />
            </CardLayoutHorizontal>
          </CardLayout>
        </Layout3>
        <Layout6>
          <Typography color="gray-700" size={16} weight={600}>
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
            title="필라테스"
            message="필라테스는 근력과 유연성을 개선하는 운동입니다."
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

const Card = () => {
  return (
    <CardComponentContainer>
      <CardContainer>
        <Typography color="gray700" size={16} weight={600}>
          최애의 임수민
        </Typography>
        <VStack spacing={8} center justify>
          <RankAndName rank={1} name="임수민" />
          <RankAndName rank={2} name="임수민" />
          <RankAndName rank={3} name="임수민" />
        </VStack>
        <HStack spacing={15} center justify>
          <Typography color="gray700" size={16} weight={600}>
            내 순위
          </Typography>
          <RankAndName rank={4} name="주현명" />
        </HStack>
      </CardContainer>
    </CardComponentContainer>
  );
};

const RankAndName = ({rank, name}) => {
  return (
    <RankAndNameContainer>
      <RankC rank={rank}>
        <Typography color="gray100" size={14} weight={500}>
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

const CardComponentContainer = styled.View`
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
