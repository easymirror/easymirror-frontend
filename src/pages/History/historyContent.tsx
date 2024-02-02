import { HistoryItem } from "./historyItem"
import style from "./styles.module.scss"
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

interface HistoryContentProps {
    items: HistoryItem[]
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
                <td>
                  <div className={style.itemActions}>
                    <InfoIcon/>
                    <DeleteIcon/>
                  </div>
                </td>
            </tr>
        ))}
      </tbody>
    );
  };