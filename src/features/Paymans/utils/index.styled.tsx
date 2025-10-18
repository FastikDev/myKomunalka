import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const PaymantsRow = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TariffValueBox = styled(Box)`
  display: flex;
`;

export const TariffName = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
`;

export const TariffValue = styled(Typography)`
  font-size: 20px;
  font-family: italic;
`;

export const Currency = styled(Typography)`
  font-size: 20px;
  font-weight: 400;
  margin-left: 3px;
`;
