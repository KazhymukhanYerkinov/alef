import React from 'react';

export interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isCard?: boolean;
  children: React.ReactNode;
}