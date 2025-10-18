import { useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from 'src/firebase/firebase';
import { useDispatch } from 'react-redux';
import { setRegister, setProfile, setTariffs, setProfileSaved } from 'src/Redux/slice/register';

export const useFireStoreSync = (uid: string, page: 'page-1' | 'page-2' | 'page-3') => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      const ref = doc(db, 'users', uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        const data = snap.data();
        if (page === 'page-1' && data.register) dispatch(setRegister(data.register));
        if (page === 'page-2' && data.profile) dispatch(setProfile(data.profile));
        if (page === 'page-3' && data.tariffs) dispatch(setTariffs(data.tariffs));
      }
    };
    loadData();
  }, [uid, page, dispatch]);

  const saveData = async (values: any) => {
    const ref = doc(db, 'users', uid);
    await setDoc(
      ref,
      { [page === 'page-1' ? 'register' : page === 'page-2' ? 'profile' : 'tariffs']: values },
      { merge: true },
    );
    dispatch(setProfileSaved(true));
    setTimeout(() => dispatch(setProfileSaved(false)), 3000);
  };
  return { saveData };
};
