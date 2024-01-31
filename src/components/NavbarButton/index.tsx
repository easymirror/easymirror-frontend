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
        className={({ isActive }) => isActive ? styles.active : styles.notActive}
        style={{ textDecoration: 'none', textDecorationLine: "none" }}
        >
            {props.title}
        </NavLink>
    </div>
  );
  