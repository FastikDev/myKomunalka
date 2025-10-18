import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const Section = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(6px);
`;

export const MeterWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 356px;
  height: 362px;
  border-radius: 8px;
  border: 1px solid #000;
  background-color: #fff;
`;

export const Title = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  margin: 18px 0;
`;
