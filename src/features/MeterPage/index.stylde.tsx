import styled from 'styled-components';
import { Container, Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Section = styled(Container)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  margin-top: 63px;
  margin-bottom: 30px;
`;

export const TitleWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 52px;
`;

export const Title = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
`;

export const TitleIcon = styled(FontAwesomeIcon)<{ iconColor: string }>`
  margin-left: 6px;
  font-size: 25px;
  color: ${({ iconColor }) => iconColor || '#000'};
`;
