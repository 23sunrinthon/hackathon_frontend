import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {
  AppBarWithSearchBar,
  AppBarWithTextLeftAndIcon,
} from '@components/AppBar';
import Typography from '../components/Typography';

const Store = ({navigation}) => {
  const [category, setCategory] = useState([
    {id: 1, name: '영양제', selected: true},
    {id: 2, name: '운동기구', selected: false},
    {id: 3, name: '단백질', selected: false},
    {id: 4, name: '보조기구', selected: false},
    {id: 5, name: '다이어트식품', selected: false},
  ]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <AppBarWithTextLeftAndIcon
        title="헬짱 스토어"
        firstIcon="search"
        onClick={() => {
          navigation.navigate('StoreSearch');
        }}
      />
      <CategorySelector
        horizontal
        style={{flexGrow: 0}}
        contentContainerStyle={{
          columnGap: 7,
          alignItems: 'center',
        }}>
        {category.map((item, i) => {
          if (item.selected) {
            return (
              <SelectedChip
                key={item.id}
                text={item.name}
                onClick={() => {
                  const temp = category;
                  temp[i].selected = false;
                  setCategory([...temp]);
                }}
              />
            );
          }
          return (
            <UnSelectedChip
              key={item.id}
              text={item.name}
              onClick={() => {
                const temp = category;
                temp[i].selected = true;
                setCategory([...temp]);
              }}
            />
          );
        })}
      </CategorySelector>
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

const CategorySelector = styled.ScrollView`
  padding-left: 16px;
  display: flex;
  flex-direction: row;
  height: 50px;
`;

const UnSelectedChip = ({text, onClick}) => {
  return (
    <UnSelectedChipContainer onPress={onClick}>
      <Typography color="gray500" size={12} weight={500}>
        {text}
      </Typography>
    </UnSelectedChipContainer>
  );
};

const SelectedChip = ({text, onClick}) => {
  return (
    <SelectedChipContainer onPress={onClick}>
      <Typography color="orange50" size={12} weight={500}>
        {text}
      </Typography>
    </SelectedChipContainer>
  );
};

const UnSelectedChipContainer = styled.TouchableOpacity`
  display: flex;
  padding: 0 15px;
  height: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: #f1f2f3;
`;

const SelectedChipContainer = styled.TouchableOpacity`
  display: flex;
  padding: 0 15px;
  height: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: #ff6c19;
`;

const LayoutScroll = styled.ScrollView`
  padding: 0 16px;
  flex: 1;
  background-color: #fff;
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
