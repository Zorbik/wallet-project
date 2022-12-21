import React from 'react';
import {
  FieldWrap,
  FieldContainer,
  FieldItem,
} from './currency.styled';

export const CurrencyField = ({ currency, purchaseValue, saleValue }) => {
  function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
  }

  const sale = minTwoDigits(saleValue.toFixed(2));
  const purchase = minTwoDigits(purchaseValue.toFixed(2));
  return (
    <FieldWrap>
      <FieldContainer>
        <FieldItem>{currency}</FieldItem>
        <FieldItem>{purchase}</FieldItem>
        <FieldItem>{sale}</FieldItem>
      </FieldContainer>
    </FieldWrap>
  );
};
