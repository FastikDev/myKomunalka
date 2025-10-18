import styled from 'styled-components';
import { Box } from '@mui/material';

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  padding: 10px;
`;

export const HeaderDate = styled(Box)`
  flex: 1;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
`;

export const HeaderIcon = styled(Box)<{ color?: string }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color || '#000'};
  font-size: 24px;
`;
