import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '@common/components/Button';
import Checkbox from '@common/components/Checkbox';
import { useTheme } from '@mui/system';
import PaymantRow from './utils';
import { paymantsConfig } from './config';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/Redux';
import { setMeterValue } from 'src/Redux/slice/couters';
import * as Styled from './index.styled';

const Payments = () => {
  const theme = useTheme();

  const registerState = useSelector((state: RootState) => state.register);
  const meterState = useSelector((state: RootState) => state.meter);

  const { tariffs } = registerState;
  const meter = meterState;
  const { electricity, water, gas } = meter;
  const { tube, trash, flatWall } = tariffs;

  return (
    <Styled.Section>
      <Styled.TitleWrap>
        <Styled.AvatarBox>
          <Styled.AvatarIcon icon={faUser} />
        </Styled.AvatarBox>
        <Styled.TitleContent>
          <Styled.Title>Троян Віктор Валерійович</Styled.Title>
          <Styled.Adress>м. Покров, Бориса Джонсона 28/6</Styled.Adress>
        </Styled.TitleContent>
      </Styled.TitleWrap>

      <Styled.Paymants>
        {paymantsConfig.map(({ text, value, currency }, index) => (
          <PaymantRow key={index} text={text} value={value} currency={currency} />
        ))}
      </Styled.Paymants>
      <Checkbox text="тільки лічильники" />
      <Button color={theme.palette.button.save} text="Сплатити" />
    </Styled.Section>
  );
};

export default Payments;
