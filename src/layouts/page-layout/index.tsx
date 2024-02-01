import React from 'react';
import style from "./styles.module.scss"

interface PagelayoutProps {
    title: string
    description?: string
    children?: React.ReactNode,
}

export const PageLayout = (props:PagelayoutProps) => {
    return (
        <div className={style.pageContanier}>
            <title>{props.title}{props.description ? ` - ${props.description}` : ""}</title>
            {props.children}
        </div>
    )
}