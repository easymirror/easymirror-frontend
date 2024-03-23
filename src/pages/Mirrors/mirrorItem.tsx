import { useEffect, useState } from "react"
import style from "./style.module.scss"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface props {
    index: number
    host: string
    link?: string
    upload_date?: string
    status?: string
}
export const MirrorItem = (props:props) => {
    const [date, setDate] = useState<Date>()
    useEffect(() => {
        try {
            console.log("props.upload_date = ",props.upload_date)
            const d = new Date(props.upload_date);
            setDate(d)
        } catch (error) {
            console.warn(error)
        }
    }, [props.upload_date]);

    return (
        <tr key={props.index}>
            <td>{props.host}</td>
            <td>
                <div className={style.linkContainer}>
                    <span>{props.link ? props.link : "-"}</span>
                    {props.link && (
                      <div className={style.copy} onClick={() => {navigator.clipboard.writeText(props.link)}}>
                        <ContentCopyIcon/>
                      </div>
                    )}
                </div>
            </td>
            <td>{props.link && date ? date.toLocaleString() : "-"}</td>
            <td>{props.link ? props.status : "-"}</td>
        </tr>
    )
}