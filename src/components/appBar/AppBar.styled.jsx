import styled from 'styled-components';
import { Box } from '../Box';

export const Container = styled(Box)`
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
