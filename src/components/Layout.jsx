import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from '../components/Box';
import styled from 'styled-components';
import { Header } from './header/Header';
import { AppBar } from './appBar/AppBar';

export const Layout = () => {
  return (
    <Container display="flex" flexDirection="column">
      <Header></Header>
      <Box display="flex">
        <AppBar></AppBar>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
};

const Container = styled(Box)`
  box-sizing: border-box;
  padding: 0 16px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
