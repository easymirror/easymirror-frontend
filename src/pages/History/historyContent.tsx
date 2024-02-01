import { History } from "./history"
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
                <td><span>{item.status}</span></td>
                {/* TODO add info icon */}
                {/* TODO add trash icon */}
            </tr>
        ))}
      </tbody>
    );
  };