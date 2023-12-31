import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {AppBarWithSearchBar} from '@components/AppBar';
import Typography from '../components/Typography';

const StoreSearch = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <AppBarWithSearchBar
        onClick={() => {
          navigation.goBack();
        }}
      />
      <View />
    </SafeAreaView>
  );
};

export default StoreSearch;
