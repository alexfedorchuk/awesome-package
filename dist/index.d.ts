import React from 'react';

declare type ButtonProps = {
    size?: 'small' | 'medium' | 'large';
    children?: React.ReactNode;
};
declare const Button: React.FC<ButtonProps>;

declare function theme(type: 'light' | 'dark'): void;

export { Button, theme };
