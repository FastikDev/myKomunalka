import React from 'react';
import NavBar from './components/NavBar';

import * as Styled from './index.styled';

type PublicLayoutProps = {
  children: React.ReactNode;
};

const MainPageLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <Styled.PageWrapper>
      <Styled.MainSection>
        <Styled.Content>{children}</Styled.Content>
      </Styled.MainSection>
      <NavBar />
    </Styled.PageWrapper>
  );
};

export default MainPageLayout;
