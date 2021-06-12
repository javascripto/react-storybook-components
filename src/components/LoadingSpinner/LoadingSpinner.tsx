import { Property } from 'csstype';
import styled, { keyframes } from 'styled-components';

export interface LoadingSpinnerProps {
  speed?: string;
  size?: keyof typeof sizes;
  color?: Property.Color;
  accentColor?: Property.Color;
}

const sizes = {
  xs: '15px',
  sm: '30px',
  md: '60px',
  lg: '120px',
  xl: '240px',
};

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.span<LoadingSpinnerProps>`
  border-radius: 50%;
  display: inline-block;
  width: ${({ size }) => sizes[size ?? 'md']};
  height: ${({ size }) => sizes[size ?? 'md']};
  border: 2px solid ${({ color }) => color ?? '#ddd'};
  border-right-color: ${({ accentColor }) => accentColor ?? '#000'};
  animation: ${rotate} ${({ speed }) => speed ?? '0.6s'} linear infinite;
`;
