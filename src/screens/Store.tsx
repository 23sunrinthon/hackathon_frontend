import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {
  AppBarWithSearchBar,
  AppBarWithTextLeftAndIcon,
} from '@components/AppBar';
import Typography from '../components/Typography';

const Store = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <AppBarWithTextLeftAndIcon
        title="상점"
        firstIcon="search"
        onClick={() => {
          navigation.navigate('StoreSearch');
        }}
      />
      <LayoutScroll>
        <CardLayout
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            rowGap: 16,
          }}>
          <CardLayoutHorizontal>
            <Card />
            <Card />
          </CardLayoutHorizontal>
          <CardLayoutHorizontal>
            <Card />
            <Card />
          </CardLayoutHorizontal>
          <CardLayoutHorizontal>
            <Card />
            <Card />
          </CardLayoutHorizontal>
          <CardLayoutHorizontal>
            <Card />
            <Card />
          </CardLayoutHorizontal>
        </CardLayout>
      </LayoutScroll>
    </SafeAreaView>
  );
};

const LayoutScroll = styled.ScrollView`
  padding: 0 16px;
  flex: 1;
  background-color: #fff;
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
  //border-bottom-color: #E5E5E5;
`;

const Card = () => {
  return (
    <CardComponentContainer>
      <CardContainer />
      <CardContent>
        <Typography color="gray500" size={12} weight={400}>
          자전거
        </Typography>
        <Typography color="gray500" size={14} weight={500}>
          BMW 자전거 1대df
        </Typography>
        <Typography color="gray600" size={16} weight={700}>
          30,000원
        </Typography>
      </CardContent>
    </CardComponentContainer>
  );
};

const CardLayout = styled.ScrollView`
  margin-top: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardLayoutHorizontal = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const CardComponentContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardContent = styled.View`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CardContainer = styled.View`
  height: 200px;
  border-radius: 6px;
  background-color: white;
  border: 1px solid #efecec;
  //shadow-color: #c3c5db;
  //shadow-offset: 0 3px;

  //shadow-opacity: 0.18;
  //shadow-radius: 4.59;
  //elevation: 5;
`;

export default Store;
