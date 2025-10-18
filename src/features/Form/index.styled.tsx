import styled from 'styled-components';
import { Input, Box, Typography } from '@mui/material';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  heigh: max-content;
`;

export const InputWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
  margin-bottom: 3px;
`;

export const FormInput = styled(Input).attrs({
  disableUnderline: true,
})<{ bgColor?: string }>`
  && {
    font-size: 20px;
    font-weight: 500;
    border-radius: 8px;
    background: ${({ bgColor }) => bgColor || '#eee'};
    width: 100%;
    height: 45px;

    &:focus-within {
      border: 1px solid #000;
      background: #fff;
    }
  }
`;
