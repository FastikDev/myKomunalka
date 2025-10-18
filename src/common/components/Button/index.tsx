import React from 'react';
import { useTheme } from '@mui/material/styles';
import * as Styled from './index.styled';

type ButtonProps = {
  color: string;
  text: string | React.ReactNode;
  width?: string;
  margin?: string;
  size?: string;
  weight?: string;
  lampColor?: string;
  setLampColor?: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
  colorText?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  color,
  text,
  width,
  margin,
  size,
  weight,
  setLampColor,
  lampColor,
  disabled,
  colorText,
  ...rest
}) => {
  const theme = useTheme();

  const handleClick = () => {
    setLampColor &&
      setLampColor(
        lampColor === theme.palette.lamp.primary
          ? theme.palette.lamp.secondary
          : theme.palette.lamp.primary,
      );
    console.log('lamp work!');
  };

  return (
    <Styled.CustomButton
      BgColor={color}
      width={width}
      margin={margin}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
      colorText={colorText}
    >
      <Styled.ButtonText size={size} weight={weight}>
        {text}
      </Styled.ButtonText>
    </Styled.CustomButton>
  );
};

export default Button;
