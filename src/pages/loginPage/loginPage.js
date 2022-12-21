import LoginForm from '../../components/loginForm/loginForm';
import { LoginPageStyled, LoginPageForm } from './loginPageStyled';
import Frame from '../../images/Frame.svg';

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <div>
        <img src={Frame} alt="" width="436" />
        <h1> Finance App </h1>
      </div>
      <LoginPageForm>
        <LoginForm />
      </LoginPageForm>
    </LoginPageStyled>
  );
};
export default LoginPage;
