import styled from 'styled-components';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AvatarBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border: 2px solid #000;
  border-radius: 8px;
  margin-right: 5px;
  background-color: #fff;
`;

export const AvatarIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: #000;
`;
