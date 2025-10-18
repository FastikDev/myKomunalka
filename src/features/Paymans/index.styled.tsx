import styled from 'styled-components';
import { Box, Container, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Section = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 21px;
  min-height: 100vh;
`;

export const TitleWrap = styled(Container)`
  display: flex;
  align-items: center;
  max-height: 65px;
  width: max-content;
`;

export const AvatarBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border: 2px solid #000;
  border-radius: 8px;
  margin-right: 5px;
`;

export const AvatarIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: #000;
`;

export const TitleContent = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const Title = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
`;

export const Adress = styled(Typography)`
  font-size: 14px;
  font-weight: 300;
  margin-top: 5px;
`;

export const Paymants = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 60px;
`;
