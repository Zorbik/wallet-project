import styled from 'styled-components';
import { Box } from '../../components/Box';
import { VscAdd } from 'react-icons/vsc';

export const Button = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  bottom: 20px;
  width: 44px;
  height: 44px;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  background-color: #24cca7;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 40px;
    bottom: 40px;
  }
`;

export const StyledBox = styled(Box)`
  position: relative;
  margin: 0 auto;
   @media screen and (min-width: 1280px) {
    margin-right:0
   }
`;

export const IconPlus = styled(VscAdd)`
  color: white;
  width: 25px;
  height: 25px;
`;
