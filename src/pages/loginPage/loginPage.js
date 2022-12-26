import LoginForm from '../../components/loginForm/loginForm';
import {
  LoginPageStyled,
  LoginPageForm,
  LoginPageImg,
  LoginImg,
  LoginPageTitle,
} from './loginPageStyled';
import Frame from '../../images/Frame.svg';

const LoginPage = () => {
  return (

      <LoginPageStyled>
        <LoginPageImg>
          <LoginImg src={Frame} alt="" />
          <LoginPageTitle> Finance App </LoginPageTitle>
        </LoginPageImg>
        <LoginPageForm>
          <LoginForm />
        </LoginPageForm>
      </LoginPageStyled>

  );
};
export default LoginPage;
