import React from 'react';
import * as Styled from './index.styled';

const PaymantRow = ({ text, value, currency }) => {
  return (
    <Styled.PaymantsRow>
      <Styled.TariffName>{text}</Styled.TariffName>
      <Styled.TariffValueBox>
        <Styled.TariffValue>{value}</Styled.TariffValue>
        <Styled.Currency>{currency}</Styled.Currency>
      </Styled.TariffValueBox>
    </Styled.PaymantsRow>
  );
};

export default PaymantRow;
