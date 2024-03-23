import React from "react";
import style from "./style.module.scss"

interface BackgroundCardProps {
    children?: React.ReactNode, 
}

export const BackgroundCard = (props:BackgroundCardProps) => {
    return (
        <div className={style.backgroundCard}>
            {props.children}
        </div>
    )
}