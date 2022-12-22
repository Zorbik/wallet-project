import styled from 'styled-components';
import { Box } from '../Box';
import { NavLink } from 'react-router-dom';

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
export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
  margin-bottom: 28px;
  background-color: rgba(255, 255, 255, 0);
`;
export const Link = styled(NavLink)`
  height: 18px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  span {
    display: inline-block;
    font-family: Poppins, sans-serif;
    font-size: 18px;
    color: #000;
  }
  &.active span {
    font-weight: 700;
  }
`;

export const TotalBalanceWrapper = styled.div`
  width: 280px;
  height: 80px;
  border-radius: 30px;
  padding-top: 8px;
  background-color: silver;
  @media (min-width: 768px) {
    width: 336px;
    margin-top: 28px;
  }
  @media (min-width: 1280px) {
    width: 395px;
  }
`;
export const Title = styled.p`
  padding-left: 40px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  color: #a6a6a6;
  margin: 0 0 12px 0;
`;
