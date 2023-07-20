import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {AppBarWithTextAndLeft, AppBarWithTextLeftAndIcon} from '@components/AppBar';
import Typography from '../components/Typography';
import CTAButton from "@components/CTAButton";

const GroupNext = ({navigation}) => {
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
            <View />
            <BottomButton>
                <CTAButton onClick={() => {
                    navigation.navigate('GroupNext');
                }} text="다음 단계"></CTAButton>
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


export default GroupNext;
