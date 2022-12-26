import RegisterForm from '../../components/registrationForm/registrationForm';
import Group from '../../images/Group.svg';
import {
  RegistrationPageImg,
  RegisterPageForm,
  RegistrationPageStyled,
  PageTitle,
  PageImg,
} from './registrationPageStyled';

const RegistrationPage = () => {
  return (

      <RegistrationPageStyled>
        <RegistrationPageImg>
          <PageImg src={Group} alt="" width="436" />
          <PageTitle> Finance App </PageTitle>
        </RegistrationPageImg>
        <RegisterPageForm>
          <RegisterForm />
        </RegisterPageForm>
      </RegistrationPageStyled>

  );
};
export default RegistrationPage;