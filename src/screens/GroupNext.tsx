import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {
  AppBarWithTextAndLeft,
  AppBarWithTextLeftAndIcon,
} from '@components/AppBar';
import CTAButton from '@components/CTAButton';
import Banner from '@components/Banner';
import Checkbox from '@components/Checkbox';
import {HStack} from '@components/Stack';
import * as timers from 'timers';
import {useRecoilState} from 'recoil';
import {useQueryClient} from '@tanstack/react-query';
import Typography from '../components/Typography';
import {partyState} from '@/store/party';
import {addParty} from '@/lib/api/party';

const GroupNext = ({navigation}) => {
  const queryClient = useQueryClient();
  const [stateArray, setStateArray] = useState([
    {
      name: '요가',
      checked: false,
    },
    {
      name: '달리기',
      checked: false,
    },
    {
      name: '철봉',
      checked: false,
    },
    {
      name: '사이클',
      checked: false,
    },
    {
      name: '필라테스',
      checked: false,
    },
    {
      name: '푸쉬업',
      checked: false,
    },
  ]);
  const [time, setTime] = useState('0');
  const [data, setData] = useRecoilState(partyState);
  useEffect(() => {
    if (data) {
      if (data.goal) {
        setTime(data.goal);
      }
      if (data.exercise.length > 0) {
        setStateArray(data.exercise);
      }
    }
  }, [data]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <AppBarWithTextAndLeft
        text="그룹 목표 선택하기"
        onClick={() => {
          setData({
            ...data,
            goal: time,
            exercise: stateArray,
          });
          navigation.goBack();
        }}
      />
      <View>
        <Parent>
          <Banner />
          <MarginGap />
          <Typography color="gray700" size={16} weight={600}>
            운동 종목
          </Typography>
          <MarginGap />
          <Typography color="gray400" size={12} weight={600}>
            파티에서 진행하는 종목을 모두 골라주세요
          </Typography>
          <MarginGap />
          {stateArray.map((item, index) => {
            return (
              <>
                <HStack spacing={12} center>
                  <Checkbox
                    enabled={item.checked}
                    onClick={() => {
                      const temp = [...stateArray];
                      temp[index].checked = !temp[index].checked;
                      setStateArray(temp);
                    }}
                  />
                  <Typography color="gray600" size={14} weight={500}>
                    {item.name}
                  </Typography>
                </HStack>
                <MarginGap />
              </>
            );
          })}
          <UnderParent>
            <Typography color="gray600" size={14} weight={500} left={5}>
              파티 목표 시간
            </Typography>
            <FormContainer>
              <FormInput
                placeholder="목표 시간을 입력해주세요   예)4"
                value={time}
                onChangeText={text => setTime(text)}
              />
            </FormContainer>
          </UnderParent>
        </Parent>
      </View>
      <BottomButton>
        <CTAButton
          onClick={() => {
            setData({
              ...data,
              goal: time,
              exercise: stateArray,
            });
            addParty({
              partyName: data.partyName,
              partyPassword: data.partyPassword,
              goal: time,
              exercise: stateArray
                .filter(item => item.checked)
                .map(item => item.name),
              batingNum: data.batingNum,
            })
              .then(r => {
                setData({
                  partyName: '',
                  partyPassword: '',
                  batingNum: null,
                  goal: null,
                  exercise: [],
                });
                queryClient.invalidateQueries(['party']);
                navigation.navigate('Tab');
              })
              .catch(e => console.log(e));
          }}
          text="마치기"
          disabled={
            stateArray.filter(item => item.checked === true).length === 0 ||
            time === '0'
          }
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
  width: 100%;
  margin-top: 14px;
  padding: 0 16px;
`;

const MarginGap = styled.View`
<<<<<<< HEAD
  margin-top: 10px
`
=======
  margin-top: 10px;
`;
>>>>>>> d0414de2033fc807152389fe3c18b4da77980a54

const FormInput = styled.TextInput.attrs({
  placeholderTextColor: '#7A7B7D',
})`
  color: #1e1f20;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  font-family: 'SUIT-Medium';
  padding: 0 16px;
  width: 100%;
`;

const FormContainer = styled.View`
  width: 100%;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fafbfc;

  border-radius: 3px;
  margin-top: 11px;
`;

const UnderParent = styled.View`
  display: flex;
  justify-content: space-between;
  margin-top: 27px;
  width: 100%;
`;

export default GroupNext;
