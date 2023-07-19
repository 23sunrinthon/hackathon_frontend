import React from 'react';
import styled from 'styled-components/native';

const Layout = (props: any) => {
  return (
    <ContainerSrollView showsVerticalScrollIndicator={false}>
      {props.children}
    </ContainerSrollView>
  );
};

const ContainerSrollView = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export default Layout;
