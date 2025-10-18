import React from 'react';
import AvatarBox from './componets';
import { setProfile } from 'src/Redux/slice/register';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth } from 'src/firebase/servises/auth';
import { db } from 'src/firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';

import * as Styled from './index.styled';
import { useDispatch } from 'react-redux';

const AvatarPicker = () => {
  const dispatch = useDispatch();

  const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      const storage = getStorage();
      const storageRef = ref(storage, `avatars/${auth.currentUser?.uid}/${file.name}`);
      await uploadBytes(storageRef, file);

      const url = await getDownloadURL(storageRef);

      const userRef = doc(db, 'users', auth.currentUser!.uid);
      await updateDoc(userRef, { 'profile.avatar': url });

      dispatch(setProfile({ avatar: url }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AvatarBox />
      <input
        type="file"
        accept="image/*"
        id="avatarInput"
        onChange={handleAvatarChange}
        style={{ display: 'none' }}
      />
      <Styled.EditBtn onClick={() => document.getElementById('avatarInput').click()}>
        <Styled.BtnText>змінити</Styled.BtnText>
      </Styled.EditBtn>
    </>
  );
};

export default AvatarPicker;
