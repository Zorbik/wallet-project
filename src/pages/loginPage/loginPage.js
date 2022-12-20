import LoginForm from '../../components/loginForm/loginForm';
import { LoginFormStyled } from './loginPageStyled';
import Frame from '../../images/Frame.svg';

const LoginPage = () => {
  return (
    <LoginFormStyled>
      <div>
        <img src={Frame} alt="" width="436" />
        <h1> Finance App </h1>
      </div>
      <LoginForm />
    </LoginFormStyled>
  );
};
export default LoginPage;