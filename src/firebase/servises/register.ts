import { auth } from './auth';
import { db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import type { Register, UserForm, UserTariffs, Meter } from '@entities/form/types';

export const registerUser = async (
  register: Register,
  profile: UserForm,
  tariffs: UserTariffs,
  meter: Meter,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      register.email,
      register.password,
    );
    const user = userCredential.user;

    await setDoc(doc(db, 'users', user.uid), {
      register,
      profile,
      tariffs,
      meter,
      createdAt: new Date().toISOString(),
    });

    return { user, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};
