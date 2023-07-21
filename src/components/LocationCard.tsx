import React from 'react';
import styled from 'styled-components/native';
import {VStack, HStack} from './Stack';
import Typography from './Typography';
import Star from '../assets/icons/star.svg';

const LocationCard = ({name, star, tag1, tag2, tag3, img}) => {
  return (
    <Container>
      <LocationCardContainer>
        <LocationImage
          source={{
            uri: img,
          }}
        />
        <LocationInfo>
          <VStack spacing={4} justify>
            <HStack spacing={6} center justify>
              <Typography color="gray600" size={16} weight={500}>
                {name}
              </Typography>
              <Typography color="gray500" size={12} weight={500}>
                13m
              </Typography>
            </HStack>
            <HStack spacing={4} center justify>
              <Star />
              <Typography color="yellow500" size={12} weight={500}>
                {star}.0 (2)
              </Typography>
            </HStack>
          </VStack>
          <LocationTagList>
            <LocationTag>
              <Typography color="orange500" size={12} weight={500}>
                {tag1}
              </Typography>
            </LocationTag>
            <LocationTag>
              <Typography color="orange500" size={12} weight={500}>
                {tag2}
              </Typography>
            </LocationTag>
            <LocationTag>
              <Typography color="orange500" size={12} weight={500}>
                {tag3}
              </Typography>
            </LocationTag>
          </LocationTagList>
        </LocationInfo>
      </LocationCardContainer>
      <Line />
    </Container>
  );
};

const LocationTag = styled.View`
  display: inline-flex;
  padding: 4px 9px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 50px;
  background: #fff8f4;
`;

const LocationInfo = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;
  width: 100%;
`;

const LocationTagList = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
`;

const Line = styled.View`
  background: #f1f2f3;
  width: 100%;
  height: 1px;
`;

const LocationCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;

const LocationImage = styled.Image`
  width: 90px;
  height: 90px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f1f2f3;
`;

export default LocationCard;
