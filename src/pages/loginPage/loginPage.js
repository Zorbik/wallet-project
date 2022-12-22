import LoginForm from '../../components/loginForm/loginForm';
import {
  LoginPageStyled,
  LoginPageForm,
  LoginPageImg,
} from './loginPageStyled';
import Frame from '../../images/Frame.svg';
import { Container } from '../../components/appBar/AppBar.styled';

const LoginPage = () => {
  return (
    <Container>
      <LoginPageStyled>
        <LoginPageImg>
          <img src={Frame} alt="" width="436" />
          <h1> Finance App </h1>
        </LoginPageImg>
        <LoginPageForm>
          <LoginForm />
        </LoginPageForm>
      </LoginPageStyled>
    </Container>
  );
};
export default LoginPage;
