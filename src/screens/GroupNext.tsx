import React, { useState } from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {AppBarWithTextAndLeft, AppBarWithTextLeftAndIcon} from '@components/AppBar';
import Typography from '../components/Typography';
import CTAButton from "@components/CTAButton";
import Banner from "@components/Banner";
import Checkbox from "@components/Checkbox";
import {HStack} from "@components/Stack";
import * as timers from "timers";

const GroupNext = ({navigation}) => {
    const [stateArray, setStateArray] = useState([false, false, false, false, false]);
    const [time, setTime] = useState("0");

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fff',
            }}>
            <AppBarWithTextAndLeft
                text="그룹 목표 선택하기"
                onClick={() => navigation.goBack()}
            />
            <View>
                <Parent>
                    <Banner/>
                    <MarginGap></MarginGap>
                    <Typography
                        color="gray700"
                        size={16}
                        weight={600}
                    >
                        운동 종목
                    </Typography>
                    <MarginGap></MarginGap>
                    <Typography
                        color="gray400"
                        size={12}
                        weight={600}
                    >
                        파티에서 진행하는 종목을 모두 골라주세요
                    </Typography>
                    <MarginGap></MarginGap>
                    <MarginGap></MarginGap>
                    <HStack spacing={12} center flexStart>
                        <Checkbox
                            enabled={stateArray[0]}
                            onClick={() => {
                                const newArray = [...stateArray];
                                newArray[0] = !newArray[0];
                                setStateArray(newArray);
                            }}
                        />
                        <Typography color="gray600" size={14} weight={500}>
                            요가
                        </Typography>
                    </HStack>
                    <MarginGap></MarginGap>
                    <HStack spacing={12} center flexStart>
                        <Checkbox
                            enabled={stateArray[1]}
                            onClick={() => {
                                const newArray = [...stateArray];
                                newArray[1] = !newArray[1];
                                setStateArray(newArray);
                            }}
                        />
                        <Typography color="gray600" size={14} weight={500}>
                            달리기
                        </Typography>
                    </HStack>
                    <MarginGap></MarginGap>
                    <HStack spacing={12} center flexStart>
                        <Checkbox
                            enabled={stateArray[2]}
                            onClick={() => {
                                const newArray = [...stateArray];
                                newArray[2] = !newArray[2];
                                setStateArray(newArray);
                            }}
                        />
                        <Typography color="gray600" size={14} weight={500}>
                            철봉
                        </Typography>
                    </HStack>
                    <MarginGap></MarginGap>
                    <HStack spacing={12} center flexStart>
                        <Checkbox
                            enabled={stateArray[3]}
                            onClick={() => {
                                const newArray = [...stateArray];
                                newArray[3] = !newArray[3];
                                setStateArray(newArray);
                            }}
                        />
                        <Typography color="gray600" size={14} weight={500}>
                            사이클
                        </Typography>
                    </HStack>
                    <MarginGap></MarginGap>
                    <HStack spacing={12} center flexStart>
                        <Checkbox
                            enabled={stateArray[4]}
                            onClick={() => {
                                const newArray = [...stateArray];
                                newArray[4] = !newArray[4];
                                setStateArray(newArray);
                            }}
                        />
                        <Typography color="gray600" size={14} weight={500}>
                            필라테스
                        </Typography>
                    </HStack>
                    <MarginGap></MarginGap>
                    <HStack spacing={12} center flexStart>
                        <Checkbox
                            enabled={stateArray[5]}
                            onClick={() => {
                                const newArray = [...stateArray];
                                newArray[5] = !newArray[5];
                                setStateArray(newArray);
                            }}
                        />
                        <Typography color="gray600" size={14} weight={500}>
                            푸쉬업
                        </Typography>
                    </HStack>
                    <MarginGap></MarginGap>
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
                <CTAButton onClick={() => {
                    navigation.navigate('Tab');
                }} text="마치기"></CTAButton>
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
`

const MarginGap = styled.View`
  margin-top: 10px
`

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
