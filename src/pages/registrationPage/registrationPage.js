import RegisterForm from "../../components/registrationForm/registrationForm";
import Group from '../../images/Group.svg';
import { RegisterPageForm, RegistrationPageStyled } from "./registrationPageStyled";

const RegistrationPage = () => {
  return (
    <RegistrationPageStyled>
      <div>
        <img src={Group} alt="" width="436" />
        <h1> Finance App </h1>
      </div>
      <RegisterPageForm>
      <RegisterForm />
      </RegisterPageForm>
    </RegistrationPageStyled>
  );
};
export default RegistrationPage;
