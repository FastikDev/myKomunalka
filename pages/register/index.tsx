import React, { useState } from 'react';
import RegisterForm from '@features/RegisterForm';
import Button from '@common/components/Button';
import Checkbox from '@common/components/Checkbox';
import AuthPageLayout from '@layouts/AuthPageLayaut';
import { useSelector } from 'react-redux';
import { RootState } from 'src/Redux';
import { registerUser } from 'src/firebase/servises/register';
import { useTheme } from '@mui/system';
import { useRouter } from 'next/router';

import * as Styled from './index.styled';

const RegisterPage: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();

  const [isAgreed, setIsAgreed] = useState(false);

  const registerState = useSelector((state: RootState) => state.register);
  const meterState = useSelector((state: RootState) => state.meter);

  const handleRegister = async () => {
    if (!isAgreed) return;

    const { register, profile, tariffs } = registerState;
    const meter = meterState;
    const { user, error } = await registerUser(register, profile, tariffs, meter);
    if (error) {
      alert(`Ошибка регистрации: ${error}`);
    } else if (user) {
      router.push('/');
    }
  };

  const steps = ['page-1', 'page-2', 'page-3'];
  const currentPage = (router.query.page as string) || 'page-1';

  const handleClick = () => {
    const currentIndex = steps.indexOf(currentPage);
    const nextPage = steps[currentIndex + 1] || currentPage;

    router.push(
      {
        query: { page: nextPage },
      },
      undefined,
      { shallow: true },
    );
  };

  return (
    <AuthPageLayout>
      <Styled.Title>Профіль</Styled.Title>
      <RegisterForm />
      {router.query.page === 'page-3' ? (
        <>
          <Checkbox
            text="даю згоду на обробку
персональних даних"
            checked={isAgreed}
            onChange={setIsAgreed}
          />
          <Button
            text="регістрація"
            colorText="#fff"
            color={theme.palette.button.auth}
            margin="50px"
            onClick={handleRegister}
            disabled={!isAgreed}
          />
        </>
      ) : (
        <Button
          text="далі"
          colorText="#fff"
          color={theme.palette.button.auth}
          margin="50px"
          onClick={handleClick}
        />
      )}
    </AuthPageLayout>
  );
};

export default RegisterPage;
