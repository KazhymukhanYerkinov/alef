import cn from 'classnames';
import { ReactComponent as PlusIcon } from './plus.svg';
import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';

export const Button = ({ plusIcon, className, appearance, children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className = {cn(styles.button, className, {
      [styles.primary]: appearance === 'primary',
      [styles.outlined]: appearance === 'outlined',
      [styles.empty]: appearance === 'empty',
    })} {...props}>
      { plusIcon && 
        <span className = {styles.plus}>
          <PlusIcon />
        </span> } 
      { children }
    </button>
  )
}