import React from "react";
import "./style.css";
import style from "./navbar.module.scss"

export const Navbar = () => {
    return (
        <div className={style.navbar}>
            {/* EasyMirror Logo */}
            <div className={style.logo}>
                <p>
                    <span className={style.textWrapper}>Easy</span>
                    <span className={style.span}>Mirror</span>
                </p>
            </div>

            {/* TODO Home page button */}
            {/* TODO History page button */}
            {/* TODO Account page button */}
        </div>
    )
}