import React from 'react';
import moment from 'moment';
import 'moment/locale/uk';

import * as Styled from './index.styled';

moment.locale('uk');

type HeaderProps = {
  format: 'dd.mm.yy' | 'month yyyy';
  icon?: React.ReactNode;
  color: string;
};

const Header: React.FC<HeaderProps> = ({ format, icon, color }) => {
  const date = format === 'dd.mm.yy' ? moment().format('DD.MM.YY') : moment().format('MMMM YYYY');

  return (
    <Styled.Header>
      <Styled.HeaderDate>{date}</Styled.HeaderDate>
      {icon && <Styled.HeaderIcon color={color}>{icon}</Styled.HeaderIcon>}
    </Styled.Header>
  );
};

export default Header;
