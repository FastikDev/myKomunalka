import React from 'react';
import Form from '@features/Form';
import Button from '@common/components/Button';
import { useTheme } from '@mui/system';
import { tariffsFields } from '@features/Form/utils/config';
import { useSelector } from 'react-redux';
import { RootState } from 'src/Redux';
import { auth } from 'src/firebase/servises/auth';
import { useFireStoreSync } from '@hooks/index';

import * as Styled from './index.styled';

const Tariffics = () => {
  const theme = useTheme();
  const uid = auth.currentUser?.uid || '';
  const { tariffs } = useSelector((state: RootState) => state.register);
  const { saveData } = useFireStoreSync(uid, 'page-3');

  const handleSave = async () => {
    if (!uid) return;
    await saveData(tariffs);
  };

  const isDisabled = Object.values(tariffs).some(v => v === '' || v === null || v === undefined);

  return (
    <Styled.Section>
      <Form fields={tariffsFields} page="page-3" />
      <Button
        color={theme.palette.button.save}
        text="Зберегти"
        onClick={handleSave}
        disabled={isDisabled}
      />
    </Styled.Section>
  );
};

export default Tariffics;
