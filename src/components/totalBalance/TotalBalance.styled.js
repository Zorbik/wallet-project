import styled from 'styled-components';

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
