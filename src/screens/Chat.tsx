import { SafeAreaView, Text, View } from "react-native";
import Typography from "../components/Typography";
import styled from "styled-components/native";
import React from "react";

const Chat = () => {
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
          채팅
        </Typography>
      </Header>
      <View>
      </View>
    </SafeAreaView>
  );
};



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
  //border-bottom-color: #E5E5E5;
`;

export default Chat;
