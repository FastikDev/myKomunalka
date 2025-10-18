import React from 'react';
import AuthPageLayout from '@layouts/AuthPageLayaut';
import Button from '@common/components/Button';
import AuthForm from '@features/AuthForm';
import { useTheme } from '@mui/system';
import { useRouter } from 'next/router';

import * as Styled from './index.styled';

const AuthPage = () => {
  const theme = useTheme();
  const router = useRouter();

  const { mode } = router.query;

  const handleCkick = () => {
    router.push('/auth?mode=sign');
  };

  const handleRegisterClick = () => {
    router.push('/register');
  };

  return (
    <AuthPageLayout>
      {!mode && (
        <>
          <Styled.Title>Моя Комуналка</Styled.Title>
          <Styled.AuthButtons>
            <Button
              text="почати"
              color={theme.palette.button.auth}
              colorText="#fff"
              onClick={handleRegisterClick}
            />
            <Styled.secondaryButton onClick={handleCkick}>увійти</Styled.secondaryButton>
          </Styled.AuthButtons>
        </>
      )}
      {mode && <AuthForm />}
    </AuthPageLayout>
  );
};

export default AuthPage;
