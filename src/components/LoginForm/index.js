import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { LoginContext } from '../../context/LoginContext';

const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required'),
    password: Yup.string()
      .required('Password is required'),
});

const LoginForm = () => {
    const history = useHistory();
    const [formError, setFormError] = useState()
    const { setLoggedIn }  = React.useContext(LoginContext);

    return (
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={({ username, password}) => {
            if(username !== 'admin') {
                setFormError('Invalid username')
                setLoggedIn(false)
                return 
            }
            if(password !== 'admin') {
                setFormError('Invalid password')
                setLoggedIn(false)
                return 
            }
            setLoggedIn(true)
            history.push('/pokemons')
          }}
        >
          {({ errors, touched }) => (
            <Form>
                {formError && (
                    <div>{formError}</div>
                ) }
                <div>
                    <Field name="username" placeholder="username" />
                    {errors.username && touched.username ? (
                        <div>{errors.username}</div>
                    ) : null}
                </div>
                <div>
                    <Field name="password" placeholder="password"/>
                    {errors.password && touched.password ? (
                        <div>{errors.password}</div>
                    ) : null}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </Form>
          )}
        </Formik>
    )
}    

export default LoginForm;