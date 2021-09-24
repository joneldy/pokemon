import React from 'react';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';
import { COLORS } from '../const/styles';

const StyledPage = styled.div`
  background: ${COLORS.dark};
  padding: 20px 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = () => {
  return (
    <StyledPage>
      <LoginForm />
    </StyledPage>
  );
};

export default LoginContainer;
