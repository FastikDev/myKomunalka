import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const Title = styled(Typography)`
  font-size: 40px;
  font-weight: 900;
  color: #edf5e1;
  margin-top: 329px;
`;

export const AuthButtons = styled(Box)<{ margin?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto
  margin-bottom: 87px;
`;

export const secondaryButton = styled(Typography)`
  font-size: 24px;
  font-weight: 600;
  color: '#000';
  margin-top: 10px;
`;
