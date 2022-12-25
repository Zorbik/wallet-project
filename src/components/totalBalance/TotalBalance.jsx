import { useSelector } from 'react-redux';
import { TotalBalanceWrapper, Title } from './TotalBalance.styled';
import Balance from '../balance/balance';

export const TotalBalance = () => {
  const { balance } = useSelector(state => state.userData.user);
  return (
    <>
      <TotalBalanceWrapper>
        <Title>Your balance</Title>
        <Balance balance={balance} />
      </TotalBalanceWrapper>
    </>
  );
};

