import React from 'react';
import Form from '@features/Form';
import Button from '@common/components/Button';
import AvatarPicker from '@common/components/AvatarPicker';
import { useTheme } from '@mui/system';
import { profileFields } from '@features/Form/utils/config';
import { RootState } from 'src/Redux';
import { useSelector } from 'react-redux';
import { auth } from 'src/firebase/servises/auth';
import { useFireStoreSync } from '@hooks/index';

import * as Styled from './index.styled';

const UserProfile = () => {
  const theme = useTheme();
  const uid = auth.currentUser?.uid || '';
  const { profile } = useSelector((state: RootState) => state.register);

  const { saveData } = useFireStoreSync(uid, 'page-2');

  const handleSave = async () => {
    if (!uid) return;
    await saveData(profile);
  };

  const isDisabled = Object.values(profile).some(v => v === '' || v === null || v === undefined);

  return (
    <>
      <Styled.TitleWrap>
        <AvatarPicker />
      </Styled.TitleWrap>
      <Styled.Section>
        <Form fields={profileFields} page="page-2" />
        <Button
          color={theme.palette.button.save}
          text="Зберегти"
          onClick={handleSave}
          disabled={isDisabled}
        />
      </Styled.Section>
    </>
  );
};

export default UserProfile;
