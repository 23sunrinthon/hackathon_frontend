import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Typography from '@components/Typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import {HStack} from '@components/Stack';

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
        <Icon icon="arrow-back" />
        <Ty color="gray-600" size={18} weight={500} display={scrolled}>
          홈
        </Ty>
        <View />
      </HeaderSpaceBetween>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}
        onScroll={handleScroll}>
        <HealthTop>
          <HealthImage />
          <HealthInfo>
            <HealthInfoTop>
              <Typography color="gray-700" size={22} weight={600}>
                햄보꾸 헬스장
              </Typography>
              <HStack spacing={4} center justify>
                <Typography color="yellow-500" size={12} weight={500}>
                  5.0
                </Typography>
              </HStack>
            </HealthInfoTop>
            <HeatlhTagList />
          </HealthInfo>
        </HealthTop>
      </ScrollView>
    </SafeAreaView>
  );
};

const Ty = styled(Typography)<{display: boolean}>`
  display: ${props => props.display === false && 'none'};
`;

const HealthTop = styled(View)`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const HealthImage = styled(View)`
  width: 130px;
  height: 130px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #000;
`;

const HealthInfo = styled(View)`
  display: flex;
  gap: 2px;
`;

const HealthInfoTop = styled(View)`
  display: flex;
`;
const HeatlhTagList = styled(View)`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

const HeaderSpaceBetween = styled(View)`
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
