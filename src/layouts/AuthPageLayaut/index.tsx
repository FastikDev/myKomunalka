import React from 'react';
import * as Styled from './index.styled';

type AuthPageLayoutProps = {
  children: React.ReactNode;
};

const AuthPageLayout: React.FC<AuthPageLayoutProps> = ({ children }) => {
  return (
    <Styled.Section>
      {children}
      <Styled.VersionText>Версія 1.0</Styled.VersionText>
    </Styled.Section>
  );
};

export default AuthPageLayout;
