import { Checkbox } from "../../components/Checkbox";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from "react";
import style from "./styles.module.scss"
import { HistoryItem } from "./historyItem";

interface props {
    index:number
    item: HistoryItem
}

const LINK_BASE = "https://easymirror.io/mirrors/"


export const HistoryItemData = (props:props) =>{
    const [link, setLink] = useState("")
    const [tz, setTz] = useState("")
    const [date, setDate] = useState<Date>()
    useEffect(() => {
        // Create the link
        setLink(LINK_BASE + props.item.id)
        
        // Create the time
        try {
            const d = new Date(props.item.upload_date);
            setDate(d)
            setTz(d.toString().match(/\(([A-Za-z\s].*)\)/)[1])
        } catch (error) {
            console.warn(error)
        }
    }, [props.item.id, props.item.upload_date]);

    return (
        <tr key={props.index}>
            <td><span>{<Checkbox/>}</span></td> 
            <td><span>{props.index+1}</span></td>
            <td><span>{props.item.nickname ? props.item.nickname : "-"}</span></td>
            <td>
                <div className={style.linkContainer}>
                <span>{link}</span>
                {link && (
                    <div className={style.copy} onClick={() => {navigator.clipboard.writeText(link)}}>
                    <ContentCopyIcon/>
                    </div>
                )}
                </div>
            </td>
            <td><span>{date ? `${date.toLocaleString()} ${tz}` : "-"}</span></td>
            <td><span>{props.item.duration}</span></td>
            <td><div className={
                `${style.statusBox} ${props.item.status === "complete" ? style.complete : props.item.status === "failed" ? style.failed : style.inProgress}`
                }>
            {props.item.status}
            </div></td>
            <td>
                <div className={style.itemActions}>
                <InfoIcon/>
                <DeleteIcon/>
                </div>
            </td>
        </tr>
    )
}