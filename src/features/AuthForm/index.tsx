import React, { useState } from 'react';
import Button from '@common/components/Button';
import { useDispatch } from 'react-redux';
import { setProfile } from 'src/Redux/slice/register';
import Form from '@features/Form';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { AuthFields, RestoreFields, FogotFields } from '@features/Form/utils/config';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth } from 'src/firebase/servises/auth';
import { db } from 'src/firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/system';
import * as Styled from './index.styled';

const AuthForm = () => {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  const { mode, oobCode } = router.query;

  const [loading, setLoading] = useState(false);
  const [authValues, setAuthValues] = useState<Record<string, string | number>>({
    login: '',
    password: '',
  });
  const [fields, setFields] = useState(AuthFields);
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState<string>('');

  const handleLoginClick = async () => {
    try {
      setLoading(true);
      setError(false);

      const email = authValues.login as string;
      const password = authValues.password as string;

      await signInWithEmailAndPassword(auth, email, password);

      router.push('/');
    } catch (err: any) {
      setLoading(false);
      setError(true);
      setErrMessage('невірний логін або пароль');
      setFields(prev =>
        prev.map(f => (f.name === 'login' || f.name === 'password' ? { ...f, error: true } : f)),
      );
    }
  };

  const handleRestorePassword = async (values: Record<string, string | number>) => {
    const email = values.restorePassword as string;

    if (!email) {
      setError(true);
      setErrMessage('введіть емаіл');
      return;
    }

    try {
      setLoading(true);
      setError(false);

      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      console.log(querySnapshot);

      // if (querySnapshot.empty) {
      //   setError(true);
      //   setLoading(false);
      //   console.log('error');
      //   return;
      // }

      // Отправляем письмо для восстановления пароля
      await sendPasswordResetEmail(auth, email, {
        url: 'http://localhost:3000/auth?mode=resetPassword',
        handleCodeInApp: true,
      });
      console.log('Лист для відновлення пароля надіслано на вашу пошту.');
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(true);
      setLoading(false);
    }
  };

  const handleFormChange = (values: Record<string, string | number>) => {
    setAuthValues(values);
  };

  const handleFogot = () => router.push('/auth?mode=fogot');

  const handleResetPassword = async () => {
    const newPassword = authValues.newPassword as string;
    const replayPassword = authValues.replayPassword as string;

    if (!newPassword || !replayPassword) {
      setError(true);
      setErrMessage('заповніть всі поля');
      return;
    }

    if (newPassword !== replayPassword) {
      setError(true);
      setErrMessage('паролі не співпадають');
      console.log(errMessage);
      return;
    }

    if (!oobCode || typeof oobCode !== 'string') {
      setError(true);
      setErrMessage('Невалідне посилання для відновлення');
      console.log(errMessage);
      return;
    }

    try {
      setLoading(true);
      setError(false);

      await confirmPasswordReset(auth, oobCode, newPassword);

      router.push('/auth?mode=sign');
    } catch (err) {
      setError(true);
      setErrMessage('помилка при зміні пароля');
      console.log(errMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(userRef);

      let profileData: any;

      if (!docSnap.exists()) {
        // если юзер новый — создаем с гугловым аватаром
        profileData = {
          avatar: user.photoURL || '',
          name: user.displayName?.split(' ')[0] || '',
          surname: user.displayName?.split(' ')[1] || '',
          family: '',
          city: '',
          street: '',
          house: '',
          flat: '',
        };

        await setDoc(userRef, {
          register: {
            email: user.email,
            mobile: user.phoneNumber || '',
          },
          profile: profileData,
          tariffs: {},
          meter: {
            electricity: 0,
            water: 0,
            gas: 0,
          },

          createdAt: new Date().toISOString(),
        });
      } else {
        const data = docSnap.data();

        // сохраняем старый avatar, если он уже был в Firestore
        profileData = {
          avatar: data.profile?.avatar || user.photoURL || '',
          name: data.profile?.name || user.displayName?.split(' ')[0] || '',
          surname: data.profile?.surname || user.displayName?.split(' ')[1] || '',
          family: data.profile?.family || '',
          city: data.profile?.city || '',
          street: data.profile?.street || '',
          house: data.profile?.house || '',
          flat: data.profile?.flat || '',
        };

        await setDoc(userRef, { profile: profileData }, { merge: true });
      }

      // Обновляем Redux
      dispatch(setProfile(profileData));

      return { user, error: null };
    } catch (err) {
      console.log(err);
      return { user: null, error: err };
    }
  };

  const handleBack = () => router.push('/auth');

  return (
    <Styled.Section>
      {mode === 'sign' && !loading && (
        <>
          <Styled.AuthBox>
            {error && <Styled.ErroRText>{errMessage}</Styled.ErroRText>}
            <Form fields={fields} onChange={handleFormChange} />
          </Styled.AuthBox>
          <Styled.AuthButtons>
            <Button
              text="увійти"
              color={theme.palette.button.auth}
              colorText="#fff"
              margin="10px"
              onClick={handleLoginClick}
            />
            <Button
              text="Google"
              color="#fff"
              colorText="#000"
              onClick={async () => {
                const { user, error } = await handleLoginWithGoogle();
                error ? console.log(error) : router.push('/');
              }}
            />
            <Styled.secondaryButton onClick={handleFogot}>забули пароль</Styled.secondaryButton>
          </Styled.AuthButtons>
        </>
      )}
      {loading && (
        <Styled.Loading>
          <Styled.LoadingIcon icon={faSpinner} />
          <Styled.LoadingText>завантаження даних</Styled.LoadingText>
        </Styled.Loading>
      )}
      {mode === 'fogot' && (
        <Styled.AuthBox>
          {error && <Styled.ErroRText>{errMessage}</Styled.ErroRText>}
          <Form fields={RestoreFields} onChange={handleFormChange} />
          <Styled.AuthButtons>
            <Button
              text="відновити"
              color={theme.palette.button.auth}
              colorText="#fff"
              onClick={() => handleRestorePassword(authValues)}
            />
            <Styled.secondaryButton onClick={handleBack}>назад</Styled.secondaryButton>
          </Styled.AuthButtons>
        </Styled.AuthBox>
      )}
      {mode === 'resetPassword' && (
        <Styled.AuthBox>
          {error && <Styled.ErroRText>{errMessage}</Styled.ErroRText>}
          <Form fields={FogotFields} onChange={handleFormChange} />
          <Styled.AuthButtons>
            <Button
              text="підтвердити"
              color={theme.palette.button.auth}
              colorText="#fff"
              onClick={handleResetPassword}
            />
            <Styled.secondaryButton onClick={handleBack}>назад</Styled.secondaryButton>
          </Styled.AuthButtons>
        </Styled.AuthBox>
      )}
    </Styled.Section>
  );
};

export default AuthForm;
