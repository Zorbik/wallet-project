import styled from 'styled-components';

export const TableMobile = styled.div`
  /* margin: auto; */
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #dcdcdf;
 
  width: 280px;
  max-height: 282px;
  display: flex;
  flex-direction: column;
`;
export const Marker = styled.div`
 width:5px;
 height:100%;
 `; 
export const TableMobileItem = styled.div`
  display: flex;
  width: 280px;
  height: 47px;
  padding:20px;
  justify-content: space-between;
  border-bottom: 1px solid #dcdcdf;
  align-items: center;
  &:nth-child(6) {
    border:none;
  }
`;
export const HeaderMobile = styled.div`
  font-family: 'Circe';
   font-weight: 700;
  font-size: 18px;
  line-height:1.5;
`;
export const TransData = styled.div`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: right;
`;

