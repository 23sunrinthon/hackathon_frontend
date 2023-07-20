import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {AppBarWithTextLeftAndIcon} from '@components/AppBar';
import LocationCard from '@components/LocationCard';
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
      <ScrollView style={{flex: 1}}>
        <Layout
          onPress={() => {
            navigation.navigate('LocationDetail');
          }}>
          <LocationCard />
        </Layout>
        <Layout>
          <LocationCard />
        </Layout>
        <Layout>
          <LocationCard />
        </Layout>
        <Layout>
          <LocationCard />
        </Layout>
        <Layout>
          <LocationCard />
        </Layout>
        <Layout>
          <LocationCard />
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

const Layout = styled.TouchableOpacity`
  width: 100%;
  padding: 0 16px;
`;

export default Location;
