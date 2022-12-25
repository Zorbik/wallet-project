import styled from 'styled-components';

export const Table = styled.table`
  display: block;
  width: 704px;

  margin-top: 20px;
  height: 531px;
  border-collapse: collapse;
  overflow-y: scroll;
  font-family: 'Circe';
  font-style: normal;
  text-align: center;
  line-height: 1.5;
  color: #000000;
  @media screen and (min-width: 1280px) {
    margin-top: 46px;
    width: 715px;
  } ;
`;
export const Thead = styled.thead`
  border-radius: 30px;
  background: #ffffff;
  border-width: 0;
  border-color: white;
`;

export const Header = styled.th`
  min-width: 75px;
  border: none;
  padding-top: 15px;
  padding-bottom: 16px;
`;

export const HeaderTr = styled.tr`
  font-weight: 700;
  font-size: 18px;
  & ${Header}:first-child {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  & ${Header}:last-child {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

export const RowAmount = styled.td`
  font-weight: 700;
  color: ${props => (props.type === 'INCOME' ? '#24CCA7' : '#ff6596')};
`;

export const RowTr = styled.tr`
  height: 54px;
  font-weight: 400;
  font-size: 16px;
  :not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
    /* border-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6); */
  }
`;

export const ButtonStyle = styled.button`
  margin: 0 auto;
  border: 0;
  padding: 0;
  background: #4a56e2;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 150ms;
  &:hover,
  &:focus {
    transform: rotateZ(90deg);
    background: #24cca7;
  }
`;
export const IconStyle = styled.span`
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  position: relative;
  width: 19px;
  height: 19px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
    height: 3px;
    background: #fff;
    border-radius: 1px;
  }
  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;
