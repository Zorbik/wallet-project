import styled from 'styled-components';

import VectorMob from '../../images/currency/Vector7_mob.pn';
import VectorDesktop from '../../images/currency/Vector7_desc.png';
import VectorTable from '../../images/currency/Vector7_tabl.png';

export const LoadSpinner = styled.div`
  display: flex;
  justify-content: center;
`;

export const CurrencyContainer = styled.div`
  width: 280px;
  height: 174px;
  border-radius: 30px;
  background-color: #4a56e2;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 320px) {
    width: 280px;
    height: 174px;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 182px;
  }
  @media screen and (min-width: 1280px) {
    width: 393px;
    height: 347px;
  }
`;

export const Head = styled.div`
  width: 280px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 30px 30px 0px 0px;

  @media screen and (min-width: 320px) {
    width: 280px;
    height: 50px;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 50px;
  }
  @media screen and (min-width: 1280px) {
    width: 393px;
    height: 60px;
  }
`;

export const TitleList = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
`;
export const TitleItem = styled.li`
  :nth-child(1) {
    margin-left: 20px;

    @media screen and (min-width: 320px) {
      margin-left: 20px;
    }
    @media screen and (min-width: 768px) {
      margin-left: 20px;
    }
    @media screen and (min-width: 1280px) {
      margin-left: 44px;
    }
  }
  :nth-child(2) {
    margin-left: 24px;

    @media screen and (min-width: 320px) {
      margin-left: 24px;
    }
    @media screen and (min-width: 768px) {
      margin-left: 42px;
    }
    @media screen and (min-width: 1280px) {
      margin-left: 40px;
    }
  }
  :nth-child(3) {
    margin-left: 44px;

    @media screen and (min-width: 320px) {
      margin-left: 44px;
    }
    @media screen and (min-width: 768px) {
      margin-left: 74px;
    }
    @media screen and (min-width: 1280px) {
      margin-left: 72px;
    }
  }
`;
export const Title = styled.div`
  font-family: 'Circe';
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #fff;
`;

export const FieldWrap = styled.div`
  :not(:first-child) {
    margin-top: 12px;

    @media screen and (min-width: 320px) {
      margin-top: 12px;
    }
    @media screen and (min-width: 768px) {
      margin-top: 12px;
    }
    @media screen and (min-width: 1280px) {
      margin-top: 24px;
    }
  }
  :first-child {
    margin-top: 12px;

    @media screen and (min-width: 320px) {
      margin-top: 12px;
    }
    @media screen and (min-width: 768px) {
      margin-top: 16px;
    }
    @media screen and (min-width: 1280px) {
      margin-top: 20px;
    }
  }
`;
export const FieldContainer = styled.li`
  display: flex;
  justify-content: space-between;
`;
export const FieldItem = styled.p`
  font-family: 'Circe';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  :first-child {
    margin-left: 20px;

    @media screen and (min-width: 1280px) {
      margin-left: 58px;
    }
  }
  :last-child {
    margin-right: 20px;

    @media screen and (min-width: 1280px) {
      margin-right: 61px;
    }
  }
`;

export const CurrencyBg = styled.div`
  position: absolute;
  bottom: 0;
  width: 280px;
  height: 93px;
  background-image: url(${VectorMob});

  @media screen and (min-width: 480px) {
    width: 280px;
    height: 93px;
    background-image: url(${VectorMob});
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 119px;
    background-image: url(${VectorTable});
  }
  @media screen and (min-width: 1280px) {
    width: 393px;
    height: 134px;

    background-image: url(${VectorDesktop});
  }
`;
