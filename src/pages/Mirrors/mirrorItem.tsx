interface props {
    index: number
    host: string
    link?: string
    upload_date?: string
    status?: string
}
export const MirrorItem = (props:props) => {
    return (
        <tr key={props.index}>
            <td>{props.host}</td>
            <td>{props.link ? props.link : "-"}</td>
            <td>{props.link ? props.upload_date : "-"}</td>
            <td>{props.link ? props.status : "-"}</td>
        </tr>
    )
}