import React, { useState } from 'react';
import Form from '@features/Form';
import { MeterFields } from '@features/Form/utils/config';
import Button from '@common/components/Button';
import { useTheme } from '@mui/system';
import { auth } from 'src/firebase/servises/auth';
import { db } from 'src/firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

import * as Styled from './index.styled';

const MeterPopUp = () => {
  const theme = useTheme();

  const [meterValues, setMeterValues] = useState<Record<string, string | number>>({
    electricity: '',
    water: '',
    gas: '',
  });

  const handleFormChange = (values: Record<string, string | number>) => {
    setMeterValues(values);
  };

  const handleSaveClick = async () => {
    const user = auth.currentUser;
    const uid = user.uid;
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, {
      meterValues,
    });
  };

  return (
    <Styled.Section>
      <Styled.MeterWrap>
        <Styled.Title>Лічильники</Styled.Title>
        <Form fields={MeterFields} onChange={handleFormChange} />
        <Button
          text="Записати"
          color={theme.palette.button.save}
          margin="10px"
          onClick={handleSaveClick}
        />
      </Styled.MeterWrap>
    </Styled.Section>
  );
};

export default MeterPopUp;
