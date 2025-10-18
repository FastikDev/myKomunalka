import styled from 'styled-components';
import { Checkbox } from '@mui/material';

export const CheckboxWrapper = styled.label.attrs({})<React.LabelHTMLAttributes<HTMLLabelElement>>`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
  cursor: pointer;
`;

export const StyledCheckbox = styled(Checkbox)`
  && {
    padding: 0;
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    border-radius: 4px;

    &.Mui-checked {
      background-color: #3f5bff;
      color: #fff;
    }
  }
`;

export const CheckboxText = styled.span`
  font-size: 20px;
  font-weight: 300;
  color: #000;
`;
