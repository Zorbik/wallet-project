import LoginForm from '../../components/loginForm/loginForm';
import {
  LoginPageStyled,
  LoginPageForm,
  LoginPageImg,
} from './loginPageStyled';
import Frame from '../../images/Frame.svg';

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <LoginPageImg>
        <img src={Frame} alt="" width="436" />
        <h1> Finance App </h1>
      </LoginPageImg>
      <LoginPageForm>
        <LoginForm />
      </LoginPageForm>
    </LoginPageStyled>
  );
};
export default LoginPage;
