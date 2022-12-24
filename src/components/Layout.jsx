import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './header/header';
import { AppBar } from './appBar/AppBar';
import {
  Container,
  LayoutStyledBox,
  StyledContainer,
} from './appBar/AppBar.styled';
import { Box } from './Box';

export const Layout = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Container>
        <Header></Header>
      </Container>

      <LayoutStyledBox>
        <StyledContainer>
          <AppBar></AppBar>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </StyledContainer>
      </LayoutStyledBox>
    </Box>
  );
};
