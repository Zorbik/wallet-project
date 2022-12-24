import { useMedia } from 'react-use';
import {
  NavMenu,
  Link,
  TotalBalanceWrapper,
  Title,
  BoxStyled,
  BoxWrapper,
  BoxStyledModal,
  NavMenuModal,
} from './AppBar.styled';

import { ReactComponent as HomeIcon } from '../../icons/HomeIcon.svg';
import { ReactComponent as DiagramIcon } from '../../icons/statIcon.svg';
import Balance from '../balance/balance';
import { useSelector } from 'react-redux';
import { Currency } from '../currency/currency';
//import { ReactComponent as MoneyIcon } from 'images/icons/DollarIcon.svg';

export const AppBar = () => {
  const { balance } = useSelector(state => state.userData.user);
  const isWide = useMedia('(max-width:768px)');

  return (
    <>
      {isWide ? (
        <BoxWrapper>
          <BoxStyledModal>
            <NavMenuModal>
              <Link to="/">
                <HomeIcon />
              </Link>
              <Link to="statistic">
                <DiagramIcon />
              </Link>
              <Link to="currency">
                <DiagramIcon />
              </Link>
            </NavMenuModal>
            <TotalBalanceWrapper>
              <Title>Your balance</Title>
              <Balance balance={balance} />
            </TotalBalanceWrapper>
          </BoxStyledModal>
        </BoxWrapper>
      ) : (
        <BoxWrapper>
          <BoxStyled>
            <NavMenu>
              <Link to="/">
                <HomeIcon />
                <span>Home</span>
              </Link>
              <Link to="statistic">
                <DiagramIcon />
                <span>Statistics</span>
              </Link>
            </NavMenu>
            <TotalBalanceWrapper>
              <Title>Your balance</Title>
              <Balance balance={balance} />
            </TotalBalanceWrapper>
          </BoxStyled>
          <Currency />
        </BoxWrapper>
      )}
    </>
  );
};
