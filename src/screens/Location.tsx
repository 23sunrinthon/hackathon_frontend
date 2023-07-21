import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {AppBarWithTextLeftAndIcon} from '@components/AppBar';
import LocationCard from '@components/LocationCard';
import {useQuery} from '@tanstack/react-query';
import Typography from '../components/Typography';
import {getGym} from '@/lib/api/gym';

const Location = ({navigation}) => {
  const {data, loading, error} = useQuery(['gym'], getGym);

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
        {data &&
          data.map((item, i) => (
            <Layout
              onPress={() => {
                navigation.navigate('LocationDetail', {id: item.uuid});
              }}>
              <LocationCard
                key={item.uuid}
                name={item.name}
                tag1={item.tag1}
                tag2={item.tag2}
                tag3={item.tag3}
                star={item.star}
                img={item.imgUri}
              />
            </Layout>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const Layout = styled.TouchableOpacity`
  width: 100%;
  padding: 0 16px;
`;

export default Location;
