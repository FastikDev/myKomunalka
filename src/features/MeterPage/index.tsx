import React from 'react';
import Input from '@common/components/Input';
import Button from '@common/components/Button';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import * as Styled from './index.stylde';

type MeterPageProp = {
  title: string;
  icon: IconDefinition;
  iconColor: string;
  inputPlaceholder: string;
  inputColor: string;
  buttonText: string;
  buttonColor: string;
  lampColor: string;
  setLampColor: React.Dispatch<React.SetStateAction<string>>;
  value: string | number;
  onChange: (value: string | number) => void;
};

const MeterPage: React.FC<MeterPageProp> = ({
  title,
  icon,
  iconColor,
  inputPlaceholder,
  inputColor,
  buttonText,
  buttonColor,
  setLampColor,
  lampColor,
  value,
  onChange,
}) => {
  console.log('MeterPage props', setLampColor, lampColor);

  return (
    <Styled.Section>
      <Styled.TitleWrap>
        <Styled.Title>{title}</Styled.Title>
        <Styled.TitleIcon icon={icon} iconColor={iconColor} />
      </Styled.TitleWrap>
      <Input
        BgColor={inputColor}
        placeholder={inputPlaceholder}
        value={value}
        onChange={onChange}
      />
      <Button
        color={buttonColor}
        text={buttonText}
        disabled={!value}
        setLampColor={setLampColor}
        lampColor={lampColor}
      />
    </Styled.Section>
  );
};

export default MeterPage;
