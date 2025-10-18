import styled from 'styled-components';
import { Tabs, Tab, Box } from '@mui/material';

export const NavBar = styled(Box)`
  width: 100%;
`;

export const NavBarConent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const NavTabs = styled(Tabs)`
  position: relative;
  min-height: 0;
  & .MuiTabs-indicator {
    display: none;
  }
`;

export const NavTab = styled(Tab)<{ color?: string }>`
  min-width: 65px;
  width: 65px;
  height: 65px;
  padding: 0;
  margin-right: 25px;
  border: 1px solid #000;
  border-radius: 8px;

  &.Mui-selected {
    border: 2px solid #000;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const RedDot = styled(Box)`
  position: absolute;
  top: 5px;
  right: 30px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: none;
  background-color: #e81111;
`;
