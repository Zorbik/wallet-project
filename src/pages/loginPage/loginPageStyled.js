import styled from 'styled-components';
import Ellipse_dec_1x from '../../images/dec/Ellipse_dec_1x.png';
import Ellipse_2_dec_1x from '../../images/dec/Ellipse_2_dec_1x.png';

export const LoginPageStyled = styled.div`
  height: 100vh;
  width: 100vw;
  @media screen and (min-width: 768px) {
    // width: 768px;
    background-color: #e5e5e5;
    background-image: url(${Ellipse_dec_1x}), url(${Ellipse_2_dec_1x});
    background-position: bottom left, top right;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    // width: 1280px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const LoginPageImg = styled.div`
  display: none;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    position: static;
    display: flex;
    margin-bottom: 50px;
    margin-left: 114px;
    margin-top: 60px;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 1280px) {
    width: 43%;
    height: 100%;
    padding: 150px 38px 28px 76px;
    flex-direction: column;
  }
`;
export const LoginImg = styled.img`
  width: 250px;
  margin-bottom: 50px;

  @media screen and (min-width: 1280px) {
    width: 435px;
  }
`;

export const LoginPageTitle = styled.h1`
  margin-left: 40px;
  @media screen and (min-width: 1280px) {
    margin-top: 28px;
    margin-bottom: 78px;
  }
`;

export const LoginPageForm = styled.div`
  @media screen and (min-width: 1280px) {
    width: 57%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 52px 91px 52px 107px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
  }
`;
