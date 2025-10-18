import styled from 'styled-components';
import { Container, Box, Typography, Button } from '@mui/material';

export const Section = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContent = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const TitleWrap = styled(Container)`
  display: flex;
  align-items: flex-end;
  max-height: 65px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
