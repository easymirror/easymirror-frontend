import { History } from "./history"
import style from "./styles.module.scss"
interface HistoryContentProps {
    items: History[]
}

export const HistoryContent = (props:HistoryContentProps) => {
    return (
      <tbody>
        {props.items.map((item, index) => (
            <tr key={index}>
                <td><span>{<input type="checkbox"/>}</span></td> 
                <td><span>{item.id}</span></td>
                <td><span>{item.nickname}</span></td>
                <td><span>{item.link}</span></td>
                <td><span>{item.date.toLocaleString()}</span></td>
                <td><span>{item.duration}</span></td>
                <td><div className={
                  `${style.statusBox} ${item.status === "complete" ? style.complete : item.status === "failed" ? style.failed : style.inProgress}`
                  }>
                {item.status}
                </div></td>

                {/* TODO add info icon */}
                {/* TODO add trash icon */}
            </tr>
        ))}
      </tbody>
    );
  };