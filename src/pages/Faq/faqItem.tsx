import React, { useState } from "react";
import { PageLayout } from "../../layouts/page-layout"
import style from "./styles.module.scss"


export const FaqItem = ({question, answer} : any) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`${style.slideDropdown}`}>
        <div className={style.question} onClick={toggleDropdown}>
            {question}
        </div>
        <div className={`${style.anwser} ${isOpen ? style.active : ''}`}>
            {answer}
        </div>
      </div>
    );
}