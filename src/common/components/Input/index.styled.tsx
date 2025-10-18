import styled from 'styled-components';
import { InputBase } from '@mui/material';

export const CustomInput = styled(InputBase)<{ BgColor?: string }>`
  width: 340px;
  height: 45px;
  border-radius: 8px;
  padding-left: 5px;
  display: flex;
  align-items: center;
  background-color: ${({ BgColor }) => BgColor || '#eee'};

  input {
    font-weight: 600;
    font-size: 24px;
    padding: 0;
  }

  input::placeholder {
    font-weight: 400;
  }
`;
