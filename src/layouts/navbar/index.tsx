import React from "react";
import style from "./navbar.module.scss"
import { SideNavigationButton } from "../../components/NavbarButton";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, updateOpen] = useState(false)

    return (
        <nav className={style.navbar}>

            {/* Response navBar for mobile clients */}
            <span className={style.menuBtn} onClick={() =>updateOpen((prev) => !prev)}>&#9776;</span>
            { isOpen && (
                <div className={style.sideNav} id="sideNav">
                    <div className={style.closeBtn} onClick={() =>updateOpen((prev) => !prev)}>&#10060;</div>
                    <SideNavigationButton title="Home" to="/home"/>
                    <SideNavigationButton title="History" to="/history"/>
                    <SideNavigationButton title="Account" to="/account"/>
                    <SideNavigationButton title="Faq" to="/faq"/>
                </div> 
            )}

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
                <SideNavigationButton title="Faq" to="/faq"/>
            </div>

        </nav>
    )
}