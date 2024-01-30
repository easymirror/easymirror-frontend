import React from "react";
import "./style.css";
import style from "./navbar.module.scss"

export const Navbar_ = () => {
  return (
    <div className="box">
      <div className="navbar">
        <div className="overlap-group">
          <p className="easy-mirror">
            <span className="text-wrapper">Easy</span>
            <span className="span">Mirror</span>
          </p>
          <div className="div">Home</div>
          <div className="text-wrapper-2">History</div>
          <div className="text-wrapper-3">Account</div>
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
    return (
        <div className={style.navbar}>
            {/* TODO EasyMirror Logo */}
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