import React from 'react';
import * as Styled from './index.styled';

type CustomInputType = {
  BgColor?: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: string | number) => void;
};

const Input: React.FC<CustomInputType> = ({ BgColor, placeholder, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const num = val === '' ? '' : Number(val);
    onChange(num);
  };

  return (
    <Styled.CustomInput
      type="number"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      BgColor={BgColor}
    />
  );
};

export default Input;
