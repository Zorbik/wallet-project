import styled from 'styled-components';
import { BoxStyled } from '../appBar/AppBar.styled';
import { Box } from '../Box';

export const BoxWrapper = styled(Box)`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    width:280px;
    margin: auto;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    margin: auto;
  }
  @media screen and (min-width: 1280px) {
    width: 1248px;
    margin: auto;
  }
`;


export const UserName = styled.p`
  margin-right: 8px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: #bdbdbd;

  @media screen and (min-width: 768px) {
    padding-right: 12px;
    margin-right: 12px;
    border-right: 1px solid #bdbdbd;
  }
`;

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: #bdbdbd;
`;

export const LogOutSvg = styled.svg`
  fill: #bdbdbd;
  @media screen and (min-width: 768px) {
    margin-right: 8px;
  }
`;

export const LogOutSpan = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;
