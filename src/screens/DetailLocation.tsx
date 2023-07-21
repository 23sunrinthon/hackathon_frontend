import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import Typography from '@components/Typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import {HStack, VStack} from '@components/Stack';
import StarIcon from '@assets/icons/star.svg';
import {useQuery} from '@tanstack/react-query';
import {getGymById} from '@/lib/api/gym';

const DetailLocation = ({route, navigation}) => {
  const {data} = useQuery(['gymdetail'], () => getGymById(route.params.id), {
    enabled: !!route.params.id,
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <HeaderSpaceBetween>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-back" size={20} />
        </TouchableOpacity>

        <View />
      </HeaderSpaceBetween>
      {data && (
        <ScrollView
          style={{
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}>
          <HealthTop>
            <HealthImage
              source={{
                uri: data.imgUri,
              }}
            />
            <HealthInfo>
              <HealthInfoTop>
                <Typography color="gray700" size={22} weight={600}>
                  {data.name}
                </Typography>
                <StarContainer>
                  <StarIcon width={20} height={20} />
                  <StarIcon width={20} height={20} />
                  <StarIcon width={20} height={20} />
                  <StarIcon width={20} height={20} />
                  <StarIcon width={20} height={20} />
                  <Typography color="yellow500" size={12} weight={500}>
                    {data.star}.0
                  </Typography>
                </StarContainer>
              </HealthInfoTop>
              <HeatlhTagList>
                <LocationTag>
                  <Typography color="orange500" size={12} weight={500}>
                    {data.tag1}
                  </Typography>
                </LocationTag>
                <LocationTag>
                  <Typography color="orange500" size={12} weight={500}>
                    {data.tag1}
                  </Typography>
                </LocationTag>
                <LocationTag>
                  <Typography color="orange500" size={12} weight={500}>
                    {data.tag3}
                  </Typography>
                </LocationTag>
              </HeatlhTagList>
            </HealthInfo>
          </HealthTop>
          <Layout2>
            <VStack spacing={16} justify>
              <Typography color="gray700" size={16} weight={500}>
                설명
              </Typography>
              <SB>
                <Typography color="gray700" size={14} weight={500}>
                  전화번호
                </Typography>
                <Typography color="gray700" size={14} weight={500}>
                  {data.phoneNumber}
                </Typography>
              </SB>
              <SB>
                <Typography color="gray700" size={14} weight={500}>
                  영업일
                </Typography>
                <Typography color="gray700" size={14} weight={500}>
                  {data.businessDay}
                </Typography>
              </SB>
              <SB>
                <Typography color="gray700" size={14} weight={500}>
                  위치
                </Typography>
                <Typography color="gray700" size={14} weight={500}>
                  {data.address}
                </Typography>
              </SB>
            </VStack>
          </Layout2>
          <LayoutDivider />
          <Layout3>
            <Typography color="gray700" size={16} weight={500}>
              소개
            </Typography>
            <Typography color="gray600" size={14} weight={500}>
              {data.description}
            </Typography>
          </Layout3>
          <LayoutDivider />
          <Layout3>
            <Typography color="gray700" size={16} weight={500}>
              트레이너 소개
            </Typography>
            <VStack spacing={8} center>
              <TrainerProfile
                name="김종국"
                description="다양한 운동 경험과 자격증을 바탕으로 개인 맞춤형 운동 계획을 제공합니다. 건강과 목표 달성을 위해 함께 노력하겠습니다!"
              />
              <TrainerProfile
                name="김계란"
                description="다양한 운동 경험과 자격증을 바탕으로 개인 맞춤형 운동 계획을 제공합니다. 건강과 목표 달성을 위해 함께 노력하겠습니다!"
              />
              <TrainerProfile
                name="이왕렬"
                description="다양한 운동 경험과 자격증을 바탕으로 개인 맞춤형 운동 계획을 제공합니다. 건강과 목표 달성을 위해 함께 노력하겠습니다!"
              />
            </VStack>
          </Layout3>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const TrainerProfile = ({name, description}) => {
  return (
    <TrainerProfileContainer>
      <TrainerProfileImage
        source={{
          uri: 'https://i.namu.wiki/i/hgQnlYwLBxtaMqMYA-fPpQe-2OtPlKWNo-tR-RFsGept0pKM_EqhwFKxeM82y2yQs1Q8toaoUId7BfLcFE2ZiA.webp',
        }}
      />
      <TrainerInfo>
        <Typography color="gray700" size={16} weight={600}>
          {name}
        </Typography>
        <Typography color="gray400" size={12} weight={500}>
          {description}
        </Typography>
      </TrainerInfo>
    </TrainerProfileContainer>
  );
};

const TrainerInfo = styled.View`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 80%;
`;

const TrainerProfileImage = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: #f1f2f3;
`;

const TrainerProfileContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: #fafbfc;
`;

const Layout3 = styled.View`
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 10px;
`;

const LayoutDivider = styled.View`
  margin-top: 20px;
  width: 100%;
  height: 8px;
  background-color: #f1f2f3;
`;

const StarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  margin-top: 8px;
`;

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
  margin-top: 32px;
`;

const LocationTag = styled.View`
  display: inline-flex;
  padding: 0 9px;
  height: 28px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border-radius: 50px;
  background: #fff8f4;
`;

const HealthTop = styled.View`
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: flex-end;
`;

const HealthImage = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 10px;
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
