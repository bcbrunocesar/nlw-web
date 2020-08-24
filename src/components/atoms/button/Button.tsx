import React from 'react';
import './Button.scss';

interface IButtonProps {
  textButton: string;
  buttonType: 'submit' | 'button';
  buttonStyle: 'primary' | 'secondary' | 'link';
  disabled?: boolean;
  handleClick?(): void;
}

const Button: React.FC<IButtonProps> = ({textButton, buttonType, buttonStyle, disabled, handleClick}) => {
  function handleButtonStyle(): string {
    return `button--${buttonStyle}`;
  }

  return (
    <button
      type={buttonType}
      className={`button ${handleButtonStyle()}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {textButton}
    </button>
  );
}

export default Button;
