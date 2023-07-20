import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import Typography from '@components/Typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import {HStack, VStack} from '@components/Stack';
import StarIcon from '@assets/icons/star.svg';

const DetailLocation = ({navigation}) => {
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
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}>
        <HealthTop>
          <HealthImage />
          <HealthInfo>
            <HealthInfoTop>
              <Typography color="gray700" size={22} weight={600}>
                햄보꾸 헬스장
              </Typography>
              <StarContainer>
                <StarIcon width={20} height={20} />
                <StarIcon width={20} height={20} />
                <StarIcon width={20} height={20} />
                <StarIcon width={20} height={20} />
                <StarIcon width={20} height={20} />
                <Typography color="yellow500" size={12} weight={500}>
                  5.0
                </Typography>
              </StarContainer>
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
          <VStack spacing={16} justify>
            <Typography color="gray700" size={16} weight={500}>
              설명
            </Typography>
            <SB>
              <Typography color="gray700" size={14} weight={500}>
                전화번호
              </Typography>
              <Typography color="gray700" size={14} weight={500}>
                032-6829-7824
              </Typography>
            </SB>
            <SB>
              <Typography color="gray700" size={14} weight={500}>
                영업일
              </Typography>
              <Typography color="gray700" size={14} weight={500}>
                08:00 ~ 24:00 화요일 휴무
              </Typography>
            </SB>
            <SB>
              <Typography color="gray700" size={14} weight={500}>
                위치
              </Typography>
              <Typography color="gray700" size={14} weight={500}>
                서울 용산구 이촌로1, 104호 1층, 지하 1층 전체
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
            흥미로운 운동 환경과 다양한 프로그램으로 건강한 라이프스타일을
            만들어드립니다. 전문 트레이너들과 함께 목표를 이루어내는 동기부여를
            제공합니다. 언제든지 방문하시어 편안한 분위기에서 자유롭게 운동을
            즐기세요. 우리 헬스장에서 건강과 즐거움을 만나보세요! 함께라면 더
            나은 자신을 발견할 수 있습니다.
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
              name="김종국"
              description="다양한 운동 경험과 자격증을 바탕으로 개인 맞춤형 운동 계획을 제공합니다. 건강과 목표 달성을 위해 함께 노력하겠습니다!"
            />
            <TrainerProfile
              name="김종국"
              description="다양한 운동 경험과 자격증을 바탕으로 개인 맞춤형 운동 계획을 제공합니다. 건강과 목표 달성을 위해 함께 노력하겠습니다!"
            />
            <TrainerProfile
              name="김종국"
              description="다양한 운동 경험과 자격증을 바탕으로 개인 맞춤형 운동 계획을 제공합니다. 건강과 목표 달성을 위해 함께 노력하겠습니다!"
            />
            <TrainerProfile
              name="김종국"
              description="다양한 운동 경험과 자격증을 바탕으로 개인 맞춤형 운동 계획을 제공합니다. 건강과 목표 달성을 위해 함께 노력하겠습니다!"
            />
            <TrainerProfile
              name="김종국"
              description="다양한 운동 경험과 자격증을 바탕으로 개인 맞춤형 운동 계획을 제공합니다. 건강과 목표 달성을 위해 함께 노력하겠습니다!"
            />
          </VStack>
        </Layout3>
      </ScrollView>
    </SafeAreaView>
  );
};

const TrainerProfile = ({name, description}) => {
  return (
    <TrainerProfileContainer>
      <TrainerProfileImage />
      <TrainerInfo>
        <Typography color="gray700" size={16} weight={600}>
          김종국
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

const TrainerProfileImage = styled.View`
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
