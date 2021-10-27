import cn from 'classnames';
import { CardProps } from "./Card.props";
import styles from './Card.module.css';

export const Card = ({ isCard, children, className, ...props }: CardProps): JSX.Element => {
  return (
    <div className = {cn(styles.card, className, {
      [styles.primary]: isCard,
    })} {...props}>
      { children }
    </div>
  )
}