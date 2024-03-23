import React from 'react';
import style from "./styles.module.scss"
import {Helmet} from "react-helmet";


interface PagelayoutProps {
    title: string
    description?: string
    children?: React.ReactNode,
}

export const PageLayout = (props:PagelayoutProps) => {
    return (
        <div className={style.pageContanier}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}{props.description ? ` - ${props.description}` : ""}</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content={props.description} />
            </Helmet>
            {props.children}
        </div>
    )
}