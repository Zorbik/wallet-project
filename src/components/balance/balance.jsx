import React from 'react';
import { useSelector } from 'react-redux';
import { Total } from './balance.styled';

const Balance = () => {
  const balance = useSelector(state => state.userData.user.balance);
  const isLoading = useSelector(state => state.userData.isPending);

  return balance || balance === 0 ? (
    <Total>
      &#8372;&nbsp;
      {new Intl.NumberFormat('uk-UA').format(balance).replace(',', '.')}
    </Total>
  ) : (
    !isLoading
  );
};

export default Balance;
