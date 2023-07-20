import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {AppBarWithTextLeftAndIcon} from '@components/AppBar';
import Typography from '../components/Typography';

const Location = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <AppBarWithTextLeftAndIcon
        title="내 주변 헬스장"
        firstIcon="search"
        onClick={() => {
          navigation.navigate('LocationSearch');
        }}
      />
      <View />
    </SafeAreaView>
  );
};

export default Location;
