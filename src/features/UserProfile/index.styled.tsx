import styled from 'styled-components';
import { Box, Container } from '@mui/material';

export const Section = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: spase-between;
  min-height: 100vh;
  margin-top: 17px;
  margin-bottom: 15px;
`;

export const TitleWrap = styled(Container)`
  display: flex;
  align-items: flex-end;
  max-height: 65px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
