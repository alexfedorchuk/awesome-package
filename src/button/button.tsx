import React from 'react';

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ size = 'medium', children, ...rest }) => {
  console.log(size);

  return (
    <button {...rest}>
      {children}
    </button>
  )
};

export default button;
