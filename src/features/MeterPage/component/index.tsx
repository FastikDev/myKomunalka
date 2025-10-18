import React from 'react';
import { useTheme } from '@mui/system';
import MeterPage from '..';
import { meterConfig } from '../utils/config';

type MeterType = keyof typeof meterConfig;

interface MeterProps {
  type: MeterType;
  setLampColor: (color: string) => void;
  lampColor: string;
  value: string | number;
  onChange: (value: string | number) => void;
}
0;

const MeterWrapper: React.FC<MeterProps> = ({ type, setLampColor, value, onChange, lampColor }) => {
  const theme = useTheme();
  const config = meterConfig[type];

  return (
    <MeterPage
      title={config.title}
      icon={config.icon}
      iconColor={config.iconColor}
      inputPlaceholder={config.inputPlaceholder}
      inputColor={config.inputColor(theme)}
      buttonText={config.buttonText}
      buttonColor={config.buttonColor(theme)}
      setLampColor={setLampColor}
      value={value}
      onChange={onChange}
      lampColor={lampColor}
    />
  );
};

export default MeterWrapper;
