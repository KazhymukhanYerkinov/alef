import React from 'react';
import cn from 'classnames';

import { InputProps } from './Input.props';
import styles from './Input.module.css';



export const Input = ({ id, label, className, error, errorText, ...props }: InputProps): JSX.Element => {
  return (
    <React.Fragment>
    <div className = {cn(styles.wrapper, {
      [styles.wrapper__error]: error
    })}>
      <label htmlFor = {id} className = {cn(styles.label, {
        [styles.label__error]: error
      })}> {label} </label>
      <input id = {id} className = {cn(styles.input, className)} {...props}/>
    </div>
    {error && <span className = {styles.error}> {errorText} </span>}
    </React.Fragment>
  )
}