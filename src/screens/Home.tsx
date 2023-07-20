import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import Checkbox from '@components/Checkbox';
import Typography from '../components/Typography';
import Button from '../components/Button';
import Switch from '../components/Switch';
import {HStack, VStack} from '../components/Stack';
import {
  AppBarDefault,
  AppBarWithBackLeft,
  AppBarWithSearchBar,
  AppBarWithTextCenter,
} from '../components/AppBar';

const Home = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [enabled, setEnabled] = React.useState(false);

  const handleScroll = (event: any) => {
    if (event.nativeEvent.contentOffset.y > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <AppBarDefault />
      <ScrollView
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            width: '100%',
            height: 1000,
            backgroundColor: '#fff',
          }}>
          <Button
            type="primary"
            size="large"
            text="버튼"
            icon="arrow-left"
            onClick={() => {}}
          />
          <Button
            type="secondary"
            size="large"
            text="버튼"
            onClick={() => {}}
          />
          <Button type="tertiary" size="large" text="버튼" onClick={() => {}} />
          <Button type="outlined" size="large" text="버튼" onClick={() => {}} />
          <Switch enabled={enabled} onClick={() => setEnabled(!enabled)} />
          <Checkbox enabled={enabled} onClick={() => setEnabled(!enabled)} />
          {/* <VStack */}
          {/*  spacing={11} */}
          {/*  center={true} */}
          {/*  justify={true} */}
          {/* > */}
          {/*  <Typography */}
          {/*    color="gray-700" */}
          {/*    size={22} */}
          {/*    weight={500} */}
          {/*  > */}
          {/*    통화 준비(1/4) */}
          {/*  </Typography> */}
          {/*  <Typography */}
          {/*    color="gray-700" */}
          {/*    size={22} */}
          {/*    weight={500} */}
          {/*  > */}
          {/*    통화 준비(1/4) */}
          {/*  </Typography> */}
          {/*  <Typography */}
          {/*    color="gray-700" */}
          {/*    size={22} */}
          {/*    weight={500} */}
          {/*  > */}
          {/*    통화 준비(1/4) */}
          {/*  </Typography> */}
          {/* </VStack> */}
        </View>
      </ScrollView>
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
  border-bottom-width: ${props => (props.scrolled ? '1px' : '0px')};
  border-color: #f1f2f3;
`;

export default Home;
