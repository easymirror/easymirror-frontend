import { NavLink } from "react-router-dom";
import styles from './menu.module.scss';

interface NavigationButtonProps {
    title: string;
    to: string;
}


export const SideNavigationButton = (props:NavigationButtonProps) => (
    <div className={`${styles.item}`}>
        <NavLink 
        to={props.to} 
        tabIndex={-1}
        style={{ textDecoration: 'none' }}
        className={({ isActive }) => isActive ? styles.active : ""}
        >
            {props.title}
        </NavLink>
    </div>
  );
  