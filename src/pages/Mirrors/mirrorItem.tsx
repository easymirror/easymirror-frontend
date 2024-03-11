import { useEffect, useState } from "react"

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
        const d = new Date(props.upload_date);
        setDate(d)
    }, [props.upload_date]);

    return (
        <tr key={props.index}>
            <td>{props.host}</td>
            <td>{props.link ? props.link : "-"}</td>
            <td>{props.link ? date.toLocaleString() : "-"}</td>
            <td>{props.link ? props.status : "-"}</td>
        </tr>
    )
}