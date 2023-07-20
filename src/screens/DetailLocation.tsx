import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Typography from '@components/Typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import {HStack, VStack} from '@components/Stack';
import StarIcon from '@assets/icons/star.svg';

const DetailLocation = ({navigation}) => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = (event: any) => {
    if (event.nativeEvent.contentOffset.y > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <HeaderSpaceBetween>
        <Icon name="arrow-back" size={20} />
        <View />
      </HeaderSpaceBetween>
      <ScrollView
        style={{
          flex: 1,
        }}
        onScroll={handleScroll}>
        <HealthTop>
          <HealthImage />
          <HealthInfo>
            <HealthInfoTop>
              <Typography color="gray700" size={22} weight={600}>
                햄보꾸 헬스장
              </Typography>
              <View
                style={{
                  height: 10,
                }}
              />
              <HStack spacing={4} center>
                <StarIcon width={16} height={16} />
                <StarIcon width={16} height={16} />
                <StarIcon width={16} height={16} />
                <StarIcon width={16} height={16} />
                <StarIcon width={16} height={16} />

                <Typography color="yellow500" size={12} weight={500}>
                  5.0
                </Typography>
              </HStack>
            </HealthInfoTop>
            <HeatlhTagList>
              <LocationTag>
                <Typography color="orange500" size={12} weight={500}>
                  다중 운동시설 보유
                </Typography>
              </LocationTag>
              <LocationTag>
                <Typography color="orange500" size={12} weight={500}>
                  활발한 분위기
                </Typography>
              </LocationTag>
            </HeatlhTagList>
          </HealthInfo>
        </HealthTop>
        <Layout2>
          <VStack spacing={16} center justify>
            <SB>
              <Typography color="gray-700" size={14} weight={500}>
                전화번호
              </Typography>
              <Typography color="gray-700" size={14} weight={500}>
                032-6829-7824
              </Typography>
            </SB>
            <SB>
              <Typography color="gray-700" size={14} weight={500}>
                영업일
              </Typography>
              <Typography color="gray-700" size={14} weight={500}>
                08:00 ~ 24:00 화요일 휴무
              </Typography>
            </SB>
            <SB>
              <Typography color="gray-700" size={14} weight={500}>
                위치
              </Typography>
              <Typography color="gray-700" size={14} weight={500}>
                서울 용산구 이촌로1, 104호 1층, 지하 1층 전체
              </Typography>
            </SB>
          </VStack>
        </Layout2>
      </ScrollView>
    </SafeAreaView>
  );
};

const SB = styled.View`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Layout2 = styled.View`
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`;

const LocationTag = styled.View`
  display: inline-flex;
  padding: 0 9px;
  height: 24px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border-radius: 50px;
  background: #fff8f4;
`;

const Ty = styled(Typography)<{display: boolean}>`
  display: ${props => props.display === false && 'none'};
`;

const HealthTop = styled.View`
  width: 100%;
  padding: 0 16px;
  height: 300px;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const HealthImage = styled(View)`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  background: #000;
`;

const HealthInfo = styled(View)`
  display: flex;
  gap: 8px;
`;

const HealthInfoTop = styled(View)`
  display: flex;
`;
const HeatlhTagList = styled.View`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const HeaderSpaceBetween = styled.View`
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  //border-bottom-width: 1px;
  gap: 18px;
  //border-bottom-color: #E5E5E5;
  border-bottom-width: ${props => (props.scrolled ? '1px' : '0px')};
  border-color: #f1f2f3;
`;

export default DetailLocation;
