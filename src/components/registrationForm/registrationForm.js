import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { createNewUser } from '../../redux/userAuth/userAuthOperations';
import ProgressSwitch from './ProgressSwitch';
import {
  LogoSvg,
  Logo,
  Box,
  Input,
  InputIcon,
  AuthLabel,
  LogBtn,
  RegBtn,
} from './RegistrationFormStyled';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const SignupSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(12, 'Too Long!')
      .required('Required'),
    confirmPassword: Yup.string('Please, confirm your password').oneOf(
      [Yup.ref('password')],
      'Entered password doesn`t match the previous one'
    ),
    firstName: Yup.string()
      .min(1, 'Too Short!')
      .max(12, 'Too Long!')
      .required('Required'),
  });

  return (
    <Box>
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
      <div>
        <Formik
          initialValues={{
            firstName: '',
            password: '',
            email: '',
            confirmPassword: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            dispatch(
              createNewUser({
                email: values.email,
                password: values.password,
                username: values.firstName,
              })
            );
          }}
        >
          {({ errors, touched, values, handleChange }) => (
            <Form>
              <AuthLabel>
                <Input
                  onChange={handleChange}
                  value={values.email}
                  placeholder="E-mail"
                  name="email"
                ></Input>
                <InputIcon width="21" height="16">
                  <path
                    d="M18 0H2C.9 0 .00999999.9.00999999 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V2l8 5 8-5v2Z"
                    fill="#E0E0E0"
                  />
                </InputIcon>
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </AuthLabel>
              <AuthLabel>
                <Input
                  onChange={handleChange}
                  value={values.password}
                  placeholder="Password"
                  name="password"
                  type="password"
                ></Input>
                <InputIcon width="16" height="21">
                  <path
                    d="M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm3.1-9H4.9V5c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2Z"
                    fill="#E0E0E0"
                  />
                </InputIcon>
              </AuthLabel>
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <AuthLabel>
                <Input
                  onChange={handleChange}
                  value={values.confirmPassword}
                  placeholder="Confirm password"
                  name="confirmPassword"
                  type="password"
                ></Input>
                <InputIcon width="16" height="21">
                  <path
                    d="M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm3.1-9H4.9V5c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2Z"
                    fill="#E0E0E0"
                  />
                </InputIcon>
              </AuthLabel>
              <ProgressSwitch value={values.password.length} />

              {errors.confirmPassword && touched.confirmPassword ? (
                <div>{errors.confirmPassword}</div>
              ) : null}
              <AuthLabel>
                <Input
                  onChange={handleChange}
                  value={values.firstName}
                  placeholder="First name"
                  name="firstName"
                ></Input>
                <InputIcon width="18" height="18">
                  <path
                    d="M0 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.89 0 0 .9 0 2Zm12 4c0 1.66-1.34 3-3 3S6 7.66 6 6s1.34-3 3-3 3 1.34 3 3Zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H3v-1Z"
                    fill="#E0E0E0"
                  />
                </InputIcon>
              </AuthLabel>
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              <div>
                <RegBtn type="submit">REGISTER</RegBtn>
                <LogBtn>LOG IN</LogBtn>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Box>
  );
}
