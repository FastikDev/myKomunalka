import styled from 'styled-components';
import { Box, Container, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Section = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 23px;
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

export const VerifyIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: ${({ theme }) => theme.palette.lamp.secondary};
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

export const MenuContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Menu = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Exit = styled(Typography)`
  font-size: 20px;
  color: #ff4f4a;
  margin-top: auto;
  text-align: center;
`;

export const Verification = styled(Typography)`
  font-size: 24px;
  color: #ff4f4a;
  text-align: center;
  margin-bottom: 8px;
`;

export const UserDataBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-item: center;
  margin-top: 10px;
  gap: 5px;
`;

export const DataRow = styled(Box)`
  display: flex;
  gap: 6px;
`;

export const UserEmail = styled(Typography)`
  font-size: 20px;
  font-weight: 300;
`;

export const UserMobile = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
`;

export const EditBtn = styled(Button)`
  width: 90px;
  height: 30px;
  border: 1px solid #000;
  border-radius: 8px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: lowercase;
`;

export const BtnText = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;
