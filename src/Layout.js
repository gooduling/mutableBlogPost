import React from 'react';
import styled from 'react-emotion';
import { withRouter } from 'react-router-dom';
import { Routes } from './Routes';
import { Header } from './components/Header';
import Drawer from '@material-ui/core/Drawer';

const Layout = props => (
  <LayoutWrapper>
    <Header />
    <ContentWrapper>
        <Drawer_S
            variant="permanent"
            anchor="left"
        >
            Hi
        </Drawer_S>
      <Main>
        <Routes/>
      </Main>
    </ContentWrapper>
  </LayoutWrapper>
);

const Drawer_S = styled(Drawer)`
  width: 240px;
`;

const LayoutWrapper = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled('div')`
  display: flex;
  flex-grow: 1;
  padding-top: 70px;
  height: calc(100% - 70px);
`;


const Main = styled('main')`
  flex-grow: 1;
  overflow: auto;
  position: relative;
`;

export default withRouter(Layout);
