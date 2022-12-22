import { Box } from '../Box';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

// import { StyledBox, StyledButton, StyledLink } from './Appbar.styled';
import { logOut } from '../../redux/userAuth/userAuthOperations';
import { Logo, LogoSvg } from '../loginForm/LoginFormStyled';
import { LogOutBtn, LogOutSpan, LogOutSvg, UserName } from './header.styled';

export const Header = () => {
  //   const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
  const user = useSelector(state => state.userData.user);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logOut());
  };

  return (
    <Box
      as="header"
      height="80px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Logo>
        <LogoSvg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.69408 9.52382L24.9583 3.85236L23.8851 1.62825C23.183 0.182586 21.4705 -0.41441 20.0606 0.305497L1.91989 9.52382H4.69408Z"
            fill="#24CCA7"
          />
          <path
            d="M31.0166 3.80957C30.7724 3.80957 30.5282 3.84601 30.284 3.91888L25.6552 5.30342L11.5192 9.52386H27.5645H34.5576L33.6917 6.05035C33.3587 4.69617 32.2376 3.80957 31.0166 3.80957Z"
            fill="#24CCA7"
          />
          <path
            d="M35.4497 10.7161H34.9377H34.2414H33.5452H28.2313H8.70522H6.14486H3.98877H3.58899H2.25042C1.54071 10.7161 0.907355 11.0414 0.494104 11.5539C0.305446 11.7901 0.161707 12.0619 0.0808534 12.3605C0.031443 12.5477 0 12.7438 0 12.9443V13.2117V15.7519V37.7716C0 39.0016 1.00618 39.9999 2.24593 39.9999H35.4452C36.685 39.9999 37.6912 39.0016 37.6912 37.7716V31.5548H24.3638C22.2572 31.5548 20.5458 29.8568 20.5458 27.7667V25.7256V25.0349V24.3441V22.8111C20.5458 21.7861 20.959 20.8547 21.6283 20.1728C22.2212 19.5667 23.0163 19.1567 23.9057 19.0542C24.0539 19.0364 24.2066 19.0275 24.3593 19.0275H35.8226H36.5188H37.215H37.6912V12.9443C37.6957 11.7143 36.6895 10.7161 35.4497 10.7161Z"
            fill="#4A56E2"
          />
          <path
            d="M39.2679 21.1578C39.0433 20.9528 38.7783 20.7968 38.4818 20.6943C38.2527 20.6185 38.0102 20.574 37.7541 20.574H37.6957H37.6508H36.9546H34.4436H24.3639C23.1242 20.574 22.118 21.5722 22.118 22.8022V23.9119V24.6027V25.2934V27.7624C22.118 28.9924 23.1242 29.9906 24.3639 29.9906H37.6957H37.7541C38.0102 29.9906 38.2527 29.9461 38.4818 29.8703C38.7783 29.7723 39.0433 29.6118 39.2679 29.4068C39.7171 29.0013 40.0001 28.413 40.0001 27.7624V22.8022C40.0001 22.1516 39.7171 21.5633 39.2679 21.1578ZM29.0534 25.7257C29.0534 26.3407 28.5503 26.8399 27.9304 26.8399H27.1848C26.5649 26.8399 26.0618 26.3407 26.0618 25.7257V24.9859C26.0618 24.6294 26.228 24.313 26.493 24.1125C26.6862 23.9654 26.9243 23.8718 27.1848 23.8718H27.3735H27.9304C28.5503 23.8718 29.0534 24.3709 29.0534 24.9859V25.7257Z"
            fill="#4A56E2"
          />
        </LogoSvg>
        Wallet
      </Logo>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <UserName>{user.username}</UserName>
        <LogOutBtn type="button" onClick={onClick}>
          <LogOutSvg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path d="M11.2788 13.0708H12.6844V15.8818C12.6844 17.0443 11.7386 17.99 10.5761 17.99H2.10814C0.945786 17.99 0 17.0443 0 15.8818V2.10814C0 0.945786 0.945786 0 2.10814 0H10.5761C11.7386 0 12.6844 0.945786 12.6844 2.10814V4.91913H11.2788V2.10814C11.2788 1.72073 10.9637 1.40543 10.5761 1.40543H2.10814C1.72073 1.40543 1.40543 1.72073 1.40543 2.10814V15.8818C1.40543 16.2692 1.72073 16.5845 2.10814 16.5845H10.5761C10.9637 16.5845 11.2788 16.2692 11.2788 15.8818V13.0708ZM14.6872 5.68213L13.6934 6.67598L15.3096 8.29234H6.21922V9.69777H15.3096L13.6934 11.314L14.6872 12.3078L18 8.99506L14.6872 5.68213Z" />
          </LogOutSvg>
          <LogOutSpan>Exit</LogOutSpan>
        </LogOutBtn>
      </Box>
      <Toaster position="top-center" reverseOrder={false} />
    </Box>
  );
};
