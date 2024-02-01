import style from "./style.module.scss"

interface AccountDetailProps {
    name: string
    value: string
    icon?: any
    action?: any
}

export const AccountDetail = (props:AccountDetailProps) => {
    return (
        <div className={style.accountDetailContainer}>
            <div className="detailName">{props.name}</div>
            <span className={style.detailValue}>{props.value}</span>
        </div>
    )

}