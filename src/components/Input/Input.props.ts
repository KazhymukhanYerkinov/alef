import React from "react";

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string;
	label: string;
  error?: boolean;
  errorText?: string;
}