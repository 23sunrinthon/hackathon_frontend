import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {
    AppBarWithBackLeft,
    AppBarWithSearchBar,
    AppBarWithTextAndLeft,
} from '@components/AppBar';
import Typography from '../components/Typography';
import CTAButton from "@components/CTAButton";
import Banner from "@components/Banner";

const GroupSetting = ({navigation}) => {

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fff',
            }}>
            <AppBarWithTextAndLeft
                text="파티 설정"
                onClick={() => navigation.goBack()}
            />
            <View>
            </View>
        </SafeAreaView>
    );
};

const BottomButton = styled.View`
  position: absolute;
  padding: 0 16px;
  bottom: 40px;
  width: 100%;
`;

export default GroupSetting;
