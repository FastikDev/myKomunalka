import styled from 'styled-components';
import { Typography } from '@mui/material';

interface ButtonProps {
  BgColor: string;
  width?: string;
  margin?: string;
  colorText?: string;
}

interface TextProps {
  size: string;
  weight: string;
}

export const CustomButton = styled.button<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>`
  width: ${({ width }) => width || '199px'};
  height: 50px;
  border-radius: 8px;
  padding: 0;
  color: ${({ colorText }) => colorText || '#000'};
  background-color: ${({ BgColor }) => BgColor || 'inherit'};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: none;
  margin-top: auto;
  margin-bottom: ${({ margin }) => margin || '0'};

  &:disabled {
    opacity: 0.5;
  }
`;

export const ButtonText = styled(Typography)<TextProps>`
  font-size: ${({ size }) => size || '24px'};
  font-weight: ${({ weight }) => weight || '600'};
  text-align: center;
`;
