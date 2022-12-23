import LoginForm from '../../components/loginForm/loginForm';
import {
  LoginPageStyled,
  LoginPageForm,
  LoginPageImg,
  LoginImg,
  LoginPagetitle,
} from './loginPageStyled';
import Frame from '../../images/Frame.svg';
import { Container } from '../../components/appBar/AppBar.styled';

const LoginPage = () => {
  return (
    <Container>
      <LoginPageStyled>
        <LoginPageImg>
          <LoginImg src={Frame} alt="" />
          <LoginPagetitle> Finance App </LoginPagetitle>
        </LoginPageImg>
        <LoginPageForm>
          <LoginForm />
        </LoginPageForm>
      </LoginPageStyled>
    </Container>
  );
};
export default LoginPage;
