import { useMedia } from 'react-use';
import { Toaster } from 'react-hot-toast';

import {
  NavMenu,
  Link,
  BoxStyled,
  BoxWrapper,
  BoxStyledModal,
  NavMenuModal,
} from './AppBar.styled';

import { ReactComponent as HomeIcon } from '../../icons/HomeIcon.svg';
import { ReactComponent as DiagramIcon } from '../../icons/statIcon.svg';
import { ReactComponent as DollarIcon } from '../../icons/DollarIcon.svg';
import { ReactComponent as BigHomeIcon } from '../../icons/bigHomeIcon.svg';
import { ReactComponent as BigDiagramIcon } from '../../icons/bigDiagramIcon.svg';
import { TotalBalance } from '../../components/totalBalance/TotalBalance';

import { Currency } from '../currency/currency';

export const AppBar = () => {
  const isWide = useMedia('(max-width:768px)');

  return (
    <>
      {isWide ? (
        <BoxWrapper>
          <BoxStyledModal>
            <NavMenuModal>
              <Link to="/">
                <BigHomeIcon />
              </Link>
              <Link to="statistic">
                <BigDiagramIcon />
              </Link>
              <Link to="currency">
                <DollarIcon />
              </Link>
            </NavMenuModal>
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
            <TotalBalance />
          </BoxStyled>
          <Currency />
        </BoxWrapper>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
