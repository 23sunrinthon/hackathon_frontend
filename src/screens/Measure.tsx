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

const Measure = ({navigation}) => {
  const [timer, setTimer] = useState([0, 0, 0]);


    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                // 타이머 시간을 1초씩 증가시킴
                const newSeconds = prevTimer[2] + 1;
                const newMinutes = prevTimer[1] + Math.floor(newSeconds / 60);
                const newHours = prevTimer[0] + Math.floor(newMinutes / 60);

                return [newHours, newMinutes % 60, newSeconds % 60];
            });
        }, 1000);

        // 컴포넌트가 언마운트될 때 타이머 종료
        return () => clearInterval(interval);
    }, []);

        return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <AppBarWithTextAndLeft
        text="달리기 운동"
      />
        <Timer>
            <Typography color="gray700" size={40} weight={600}>
                {`${String(timer[0]).padStart(2, '0')}:${String(timer[1]).padStart(2, '0')}:${String(
                    timer[2]
                ).padStart(2, '0')}`}
            </Typography>
        </Timer>
        <Parent>
            <Banner/>
            <Banner/>
            <Banner/>
        </Parent>

        <BottomButton>
            <CTAButton onClick={() => {
                navigation.goBack();
            }} text="운동 종료하기" />
        </BottomButton>
      <View />
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
  position: absolute;
  width: 100%;
  padding: 0 16px;
  bottom: 100px;
`

const Timer = styled.View`
  display: flex;
  align-items: center;
  margin-top: 100px;
`

export default Measure;
