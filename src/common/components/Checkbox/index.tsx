import React from 'react';
import * as Styled from './index.styled';

type CheckboxProps = {
  text: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ text, checked, onChange }) => {
  const handleToggle = () => {
    onChange?.(!checked);
  };

  return (
    <Styled.CheckboxWrapper onClick={handleToggle}>
      <Styled.StyledCheckbox checked={checked} />
      <Styled.CheckboxText>{text}</Styled.CheckboxText>
    </Styled.CheckboxWrapper>
  );
};

export default Checkbox;
