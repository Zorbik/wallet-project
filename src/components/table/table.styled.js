import styled from 'styled-components';

export const Table = styled.table`
  width: 704px;
  max-height: 531px;
  border-collapse: collapse;
  overflow: auto;
`;

export const HeaderTr = styled.tr`
  font-family: 'Circe';
  font-style: normal;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: #000000;
  background: #ffffff;
  border-width: 0;
  border-color: white;
`;

export const Header = styled.th`
  min-width: 75px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  padding-top: 15px;
  padding-bottom: 16px;
`;

export const RowTr = styled.tr`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
  border-bottom: 1px solid #dcdcdf;
  :not(:last-child) {
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
  :last-child {
    border-bottom: 0;
  }
`;

export const Row = styled.td`
  text-align: center;
`;

export const RowAmount = styled.td`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-align: right;
  color: ${props => (props.type === 'INCOME' ? '#24CCA7' : '#ff6596')};
`;
export const ButtonStyle = styled.button`
  //   margin: 0;
  //   border: 0;
  //   padding: 0;
  //   background: hsl(216, 100, 50);
  //   border-radius: 50%;
  //   width: 80px;
  //   height: 80px;
  //   display: flex;
  //   flex-flow: column nowrap;
  //   justify-content: center;
  //   align-items: center;
  //   cursor: pointer;
  //   transition: all 150ms;
  padding: 18px 16px;
  border-radius: 5px;
  background: #4676d7;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 28px;
  line-height: 28px;
  font-style: normal;
  font-weight: 500;
  //   width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #3f51b5;
  }
`;
export const IconStyle = styled.span`
  display: block;
`;
