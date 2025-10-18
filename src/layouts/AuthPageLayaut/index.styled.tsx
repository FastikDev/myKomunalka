import styled from 'styled-components';
import { Container, Typography } from '@mui/material';

export const Section = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.bgAuth};
`;

export const VersionText = styled(Typography)`
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 15px;
  font-size: 16px
  font-weight: 100;
`;
