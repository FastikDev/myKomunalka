import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/Redux';
import { setRegister, setProfile, setTariffs } from 'src/Redux/slice/register';
import { useTheme } from '@mui/system';
import type { FormField } from '@entities/form/types';

import * as Styled from './index.styled';

type FormProps = {
  fields: FormField[];
  page?: 'page-1' | 'page-2' | 'page-3';
  onChange?: (values: Record<string, string | number>) => void;
};

const Form: React.FC<FormProps> = ({ fields, page, onChange }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { register, profile, tariffs } = useSelector((state: RootState) => state.register);

  const [values, setValues] = useState<Record<string, string | number>>(
    fields.reduce((acc, f) => ({ ...acc, [f.name]: '' }), {}),
  );

  useEffect(() => {
    const reduxValues = page === 'page-1' ? register : page === 'page-2' ? profile : tariffs;
    setValues(reduxValues);
  }, [page, register, profile, tariffs, fields]);

  const handleChange = (name: string, value: string | number) => {
    const newValues = { ...values, [name]: value };
    setValues(newValues);

    onChange?.(newValues);

    switch (page) {
      case 'page-1':
        dispatch(setRegister(newValues));
        break;
      case 'page-2':
        dispatch(setProfile(newValues));
        break;
      case 'page-3':
        dispatch(setTariffs(newValues));
        break;
    }
  };

  return (
    <Styled.Form>
      {fields.map(field => (
        <Styled.InputWrapper key={field.name}>
          <Styled.InputLabel>{field.label}</Styled.InputLabel>
          <Styled.FormInput
            type={(field.type ?? 'text').toString()}
            value={values[field.name] ?? ''}
            placeholder={field.placeholder}
            bgColor={field.error ? theme.palette.status.errorInput : '#eee'}
            onChange={e => handleChange(field.name, e.target.value)}
          />
        </Styled.InputWrapper>
      ))}
    </Styled.Form>
  );
};

export default Form;
