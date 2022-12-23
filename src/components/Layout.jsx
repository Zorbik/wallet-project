import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './header/header';
import { AppBar } from './appBar/AppBar';
import { Container, LayoutStyledBox } from './appBar/AppBar.styled';

export const Layout = () => {
  return (
    <Container display="flex" flexDirection="column">
      <Header></Header>
      <LayoutStyledBox>
        <AppBar></AppBar>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </LayoutStyledBox>
    </Container>
  );
};
