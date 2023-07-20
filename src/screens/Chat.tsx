import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Typography from "../components/Typography";
import styled from "styled-components/native";
import React, {useEffect, useState } from "react";
import Close from '@assets/icons/close.svg';
import Run from '@assets/icons/run.svg';
import RepeatBlock from "../components/RepeatBlock";
import Button from "@components/Button";
import CTAButton from "@components/CTAButton";


const Chat = () => {
  const [showBack, setShowBack] = useState(true);

  const handleClose = () => {
    setShowBack(false);
  };

  const handleMove = () => {
    // add function
  };

  const handlePress = (number: Number) => {
    console.log(number)
  };

  // @ts-ignore
  return (
    <SafeAreaView style={
      {
        flex: 1,
        backgroundColor: "#fff",
      }
    }>
      <Header>
        <Typography
          color="gray-600"
          size={16}
          weight={600}
        >
          운동 측정하기
        </Typography>
      </Header>
      <Parent>
        {showBack && (
          <Back>
            <Typography color="white" size={14} weight={600}>
              건강을 위한 최상의 파트너! 에드캔 프로틴
            </Typography>
            <TouchableOpacity onPress={handleClose}>
              {/* Close 버튼 또는 Close 아이콘 컴포넌트 */}
              <Close />
            </TouchableOpacity>
          </Back>
        )}
        <TouchableOpacity onPress={handlePress(1)}>
          <RepeatBlock
            title="달리기 운동"
            message="달리기는 체력 향상과 신체 조절에 탁월한 운동입니다."
            number={1}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress(2)}>
          <RepeatBlock
            title="필라테스"
            message="필라테스는 근력과 유연성을 개선하는 운동입니다."
            number={2}
          />
        </TouchableOpacity>
        <BottomButton>
          <CTAButton onClick={handleMove} text="운동 추가하기"/>
        </BottomButton>
      </Parent>
      <View/>
    </SafeAreaView>
  );
};

const Parent = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Back = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ff6c19;
  width: 358px;
  padding: 0 16px;
  height: 46px;
  border-radius: 3px;
  margin-bottom: 20px;
`;

const BottomButton = styled.View`
  position: absolute;
  bottom: 76px;
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
  margin-bottom: 20px;
  //border-bottom-color: #E5E5E5;
`;

export default Chat;
