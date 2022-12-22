import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from '../components/Box';
import { Header } from './header/header';
import { AppBar } from './appBar/AppBar';
import { Container } from './appBar/AppBar.styled';

export const Layout = () => {
  return (
    <Container display="flex" flexDirection="column">
      <Header></Header>
      <Box display="flex" height="90vh">
        <AppBar></AppBar>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
};
