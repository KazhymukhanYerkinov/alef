import { NavLink } from 'react-router-dom';
import { ReactComponent as BaseLogo } from '../../assets/logo.svg';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className = {styles.header}>
      <BaseLogo />
      <div className = {styles.navs}>
        <NavLink
          exact 
          to = '/' 
          className = {styles.nav}
          activeClassName = {styles.active}> 
          Форма 
        </NavLink>

        <NavLink
          exact 
          to = '/view' 
          className = {styles.nav}
          activeClassName = {styles.active}> 
          Превью 
        </NavLink>
      </div>
    </div>
  )
}