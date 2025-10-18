import styled from 'styled-components';
import { Container } from '@mui/material';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

export const MainSection = styled(Container)`
  display: flex;
  flex-direction: column;
  margin: 0 25px;
`;

export const Content = styled(Container)`
  flex: 1;
`;
