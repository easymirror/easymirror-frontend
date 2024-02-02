import React from "react"
import style from "./style.module.scss"

interface CheckboxProps {
    id?: string
    isChecked?: boolean
    handleClick?: React.ChangeEventHandler
    style?: React.CSSProperties
    className?: string
}

export const Checkbox = (props:CheckboxProps) => {
    return (
        <input
            id={props.id}
            type='checkbox'
            onChange={props.handleClick}
            checked={props.isChecked}
            style={props.style}
            className={`${style.checkbox} ${props.className}`}
        />
    )
}