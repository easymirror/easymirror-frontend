import React from "react";
import "./style.css";
import style from "./navbar.module.scss"
import { SideNavigationButton } from "../../components/NavbarButton";

export const Navbar = () => {
    return (
        <nav className={style.navbar}>
            {/* EasyMirror Logo */}
            <div className={style.logo}>
                <p>
                    <span className={style.textWrapper}>Easy</span>
                    <span className={style.span}>Mirror</span>
                </p>
            </div>

            <div className={style.sectionMenu}>
                <SideNavigationButton title="Home" to="/home"/>
                <SideNavigationButton title="History" to="/history"/>
                <SideNavigationButton title="Account" to="/account"/>
                {/* TODO Home page button */}
                {/* TODO History page button */}
                {/* TODO Account page button */}
            </div>

        </nav>
    )
}