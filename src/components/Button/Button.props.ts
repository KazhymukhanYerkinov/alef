import React from 'react';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  plusIcon?: boolean;
  children: React.ReactNode;
  appearance: 'primary' | 'outlined' | 'empty';
}