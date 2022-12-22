

import { Box } from '../Box';
import {NavMenu, Link, TotalBalanceWrapper, Title} from "./AppBar.styled"

import { ReactComponent as HomeIcon } from '../../icons/HomeIcon.svg';
import { ReactComponent as DiagramIcon } from '../../icons/statIcon.svg';
//import { ReactComponent as MoneyIcon } from 'images/icons/DollarIcon.svg';

export const AppBar = () => {
  return (
    <Box>
        <NavMenu>
          <Link to="/"><HomeIcon/><span>Home</span></Link>
          <Link to="statistic"><DiagramIcon/><span>Statistics</span></Link>
        </NavMenu>
        <TotalBalanceWrapper>
        <Title>Your balance</Title>
      </TotalBalanceWrapper>
    </Box>
  );
};
