import { Container } from '../../components/appBar/AppBar.styled';
import RegisterForm from '../../components/registrationForm/registrationForm';
import Group from '../../images/Group.svg';
import {
  RegistrationPageImg,
  RegisterPageForm,
  RegistrationPageStyled,
} from './registrationPageStyled';

const RegistrationPage = () => {
  return (
    <Container>
      <RegistrationPageStyled>
        <RegistrationPageImg>
          <img src={Group} alt="" width="436" />
          <h1> Finance App </h1>
        </RegistrationPageImg>
        <RegisterPageForm>
          <RegisterForm />
        </RegisterPageForm>
      </RegistrationPageStyled>
    </Container>
  );
};
export default RegistrationPage;
