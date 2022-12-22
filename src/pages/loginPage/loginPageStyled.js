import styled from 'styled-components';
import Ellipse_dec_1x from '../../images/dec/Ellipse_dec_1x.png';
import Ellipse_2_dec_1x from '../../images/dec/Ellipse_2_dec_1x.png';

export const LoginPageStyled = styled.div`
  display: flex;
  width: 1280px;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
  background-image: url(${Ellipse_dec_1x}), url(${Ellipse_2_dec_1x});
  background-position: bottom left, top right;
  background-repeat: no-repeat;
`;

export const LoginPageImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 43%;
  height: 100%;
  padding: 150px 38px 28px 76px;

  img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // position: absolute;
    width: 435.2px;
    height: 419.5px;
  }
  h1 {
    display: flex;
    justify-content: center;
    margin-top: 28px;
    margin-bottom: 78px;
  }
`;

export const LoginPageForm = styled.div`
  width: 57%;
  height: 100%;
  padding: 136px 91px 116px 107px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(25px);
  margin: 0 auto;
`;
