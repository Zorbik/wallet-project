import { Box } from '../Box';
import { NavMenu, Link, TotalBalanceWrapper, Title } from './AppBar.styled';

import { ReactComponent as HomeIcon } from '../../icons/HomeIcon.svg';
import { ReactComponent as DiagramIcon } from '../../icons/statIcon.svg';
import Balance from '../balance/balance';
import { useSelector } from 'react-redux';
import { Currency } from '../currency/currency';
//import { ReactComponent as MoneyIcon } from 'images/icons/DollarIcon.svg';

export const AppBar = () => {
  const { balance } = useSelector(state => state.userData.user);

  return (
    <Box>
      <Box display="flex" flexDirection="column">
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
      </Box>
      <Currency />
    </Box>
  );
};
