import MUIButton from '@mui/material/Button';
import { FC } from 'react';

interface ButtonProps {
  disabled?: boolean;
  click?: () => void;
  children: React.ReactNode;
  render?: (label: string) => JSX.Element;
}

export const Button: FC<ButtonProps> = ({
  disabled = false,
  click = () => null,
  // children,
  render,
}) => (
  <MUIButton
    disabled={disabled}
    variant="contained"
    type="submit"
    onClick={click}
    data-testid="button"
  >
    {render && render('send')}
  </MUIButton>
);
