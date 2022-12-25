import { useEffect, useState } from 'react';
import axios from 'axios';
import BarLoader from 'react-spinners/BarLoader';
import { CurrencyField } from './currencyField';
import {
  LoadSpinner,
  CurrencyContainer,
  Head,
  CurrencyBg,
  TitleList,
  Title,
  TitleItem,
} from './currency.styled.js';

export const Currency = () => {
  const [rateUsd, setRateUsd] = useState(null);
  const [rateEur, setRateEur] = useState(null);
  const [rateGbp, setRateGbp] = useState(null);

  const saveRates = data => {
    data.forEach(el => {
      if (el.currencyCodeA === 840 && el.currencyCodeB === 980) {
        const dataToSave = {
          rateBuy: el.rateBuy,
          rateSell: el.rateSell,
        };
        setRateUsd(dataToSave);
      }
      if (el.currencyCodeA === 978 && el.currencyCodeB === 980) {
        const dataToSave = {
          rateBuy: el.rateBuy,
          rateSell: el.rateSell,
        };
        setRateEur(dataToSave);
      }
      if (el.currencyCodeA === 826 && el.currencyCodeB === 980) {
        const dataToSave = {
          rateBuy: el.rateCross,
          rateSell: el.rateCross,
        };
        setRateGbp(dataToSave);
      }
    });
  };

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('currencyRates'));
    const storageUpdatedTime = storageData?.updatedDate;
    const timeNow = new Date().getTime();
    const notShouldFetch = storageUpdatedTime - timeNow <= 3600000;

    if (!notShouldFetch) {
      axios
        .get('https://api.monobank.ua/bank/currency')
        .then(res => res.data)
        .then(res => {
          const currencyRates = {
            updatedDate: new Date().getTime(),
            res,
          };
          localStorage.setItem('currencyRates', JSON.stringify(currencyRates));
          saveRates(res);
        })
        .catch(error => console.log(error));
      return;
    }

    saveRates(storageData.res);
  }, []);

  return (
    <>
      <CurrencyContainer>
        <Head>
          <TitleList>
            <TitleItem>
              <Title>Currency</Title>
            </TitleItem>
            <TitleItem>
              <Title>Purchase</Title>
            </TitleItem>
            <TitleItem>
              <Title>Sale</Title>
            </TitleItem>
          </TitleList>
        </Head>
        <LoadSpinner>
          <BarLoader color="#36d7b7" width={220} loading={!rateUsd?.rateBuy} />
        </LoadSpinner>
        {rateUsd?.rateBuy && (
          <div>
            <ul>
              <CurrencyField
                currency="USD"
                purchaseValue={rateUsd?.rateBuy}
                saleValue={rateUsd?.rateSell}
              />
              <CurrencyField
                currency="EUR"
                purchaseValue={rateEur?.rateBuy}
                saleValue={rateEur?.rateSell}
              />
              <CurrencyField
                currency="GBP"
                purchaseValue={rateGbp?.rateBuy}
                saleValue={rateGbp?.rateSell}
              />
            </ul>
          </div>
        )}

        <CurrencyBg></CurrencyBg>
      </CurrencyContainer>
    </>
  );
};
