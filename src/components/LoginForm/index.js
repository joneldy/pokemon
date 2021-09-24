import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { LoginContext } from '../../context/LoginContext';
import { COLORS, Fonts } from '../../const/styles';

const StyledForm = styled.div`
  background: ${COLORS.darkBlue};
  padding: 80px 0;
  max-width: 508px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  .error {
    color: ${COLORS.red};
  }

  input {
    ${{ ...Fonts.h3 }}
    outline: none;
    padding: 10px;
    height: 60px;
    max-width: 380px;
    width: 100%;
    background: #3f414b;
    border: 1px solid #f2c94c;
    box-sizing: border-box;
    border-radius: 6px;
    margin-bottom: 10px;
    outline: none;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: ${COLORS.white};
    border: none;
  }

  .formField {
    margin-bottom: 20px;
  }
`;

const StyledButton = styled.button`
  width: 380px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: #f2c94c;
  border-radius: 6px;
  border: none;
`;

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const history = useHistory();
  const [formError, setFormError] = useState();
  const { setLoggedIn } = React.useContext(LoginContext);

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={({ username, password }) => {
        if (username !== 'admin') {
          setFormError('Invalid username');
          setLoggedIn(false);
          return;
        }
        if (password !== 'admin') {
          setFormError('Invalid password');
          setLoggedIn(false);
          return;
        }
        setLoggedIn(true);
        history.push('/pokemons');
      }}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <Form>
            {formError && <div>{formError}</div>}
            <div className="formField">
              <Field name="username" placeholder="username" />
              {errors.username && touched.username ? (
                <div className="error">{errors.username}</div>
              ) : null}
            </div>
            <div className="formField">
              <Field
                name="password"
                placeholder="password"
                className="formField"
              />
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
            </div>
            <div>
              <StyledButton type="submit">Submit</StyledButton>
            </div>
          </Form>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;
