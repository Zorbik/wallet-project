import styled from 'styled-components';

export const Backdrop = styled.div`
  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.25);
  }
`;

export const ModalBox = styled.div`
  position: absolute;
  margin: 0 auto;
  max-height: 540px;
  top: 60px;
  background-color: #fff;
  @media screen and (max-width: 768px) {
    max-height: 600px;
    width: 100%;
    padding: 20px 0px 268px 0px;
  }
  @media screen and (min-width: 768px) {
    max-height: 603px;
    min-width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 20px 60px 20px;
    border-radius: 20px;
  }
`;
