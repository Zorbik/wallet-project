import styled from 'styled-components';
import { Box } from '../Box';
import { NavLink } from 'react-router-dom';
import Ellipse_dec_1x from '../../images/dec/Ellipse_dec_1x.png';
import Ellipse_2_dec_1x from '../../images/dec/Ellipse_2_dec_1x.png';

export const Container = styled(Box)`
  box-sizing: border-box;
  padding: 0 16px;
  margin: 0 auto;
  width: 100%;
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
export const StyledContainer = styled(Box)`
  box-sizing: border-box;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    height: calc(100vh - 80px);
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    flex-direction: row;
  }
`;

export const BoxWrapper = styled(Box)`
  @media screen and (min-width: 768px) {
    display: flex;
    margin: auto;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;

    margin: 0 69px 0 0;
  }
`;

export const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 280px;
    margin: auto;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;
export const BoxStyledModal = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin: auto;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0);
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 28px;
  }
`;
export const NavMenuModal = styled.div`
  width: 192px;
  height: 44px;
  margin: 15px 44px 28px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LayoutStyledBox = styled(Box)`
  @media screen and (min-width: 768px) {
    background-color: #e5e5e5;
    background-image: url(${Ellipse_dec_1x}), url(${Ellipse_2_dec_1x});
    background-position: bottom left, top right;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Link = styled(NavLink)`
  height: 27px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  span {
    display: inline-block;
    font-family: Poppins, sans-serif;
    font-size: 18px;
    line-height: 1.5;
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
  padding: 8px 32px;
  background-color: silver;

  @media (min-width: 768px) {
    width: 336px;
    padding: 8px 40px;
  }
  @media (min-width: 1280px) {
    width: 395px;
  }
`;
export const Title = styled.p`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #a6a6a6;
  margin-bottom: 12px;
`;
