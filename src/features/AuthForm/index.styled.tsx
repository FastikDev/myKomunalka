import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Section = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthBox = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 304px;
`;

export const AuthButtons = styled(Box)<{ margin?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const secondaryButton = styled(Typography)`
  font-size: 24px;
  font-weight: 600;
  color: '#000';
  margin-top: 10px;
`;

export const Loading = styled(Box)`
  margin-top: 377px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled(Typography)`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 600;
`;

export const LoadingIcon = styled(FontAwesomeIcon)`
  color: #000;
  font-size: 100px;
`;

export const GoogleIcon = styled(FontAwesomeIcon)`
  color: #000;
  font-size: 24px;
`;

export const ErroRText = styled(Typography)`
  font-size: 20px;
  color: #ff4a4a;
  margin-top: auto;
  margin-bottom: 15px;
`;
