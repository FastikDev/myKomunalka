import styled from 'styled-components';
import { Typography, Button } from '@mui/material';

export const EditBtn = styled(Button)`
  width: 90px;
  height: 30px;
  border: 1px solid #000;
  border-radius: 8px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
  text-transform: lowercase;
  background-color: #fff;
`;

export const BtnText = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;
