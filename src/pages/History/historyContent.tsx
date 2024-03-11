import { HistoryItem } from "./historyItem"
import { HistoryItemData } from "./historyItemData";

interface HistoryContentProps {
    items: HistoryItem[]
}

export const HistoryContent = (props:HistoryContentProps) => {
    return (
      <tbody>
        {props.items.map((item, index) => (
            <HistoryItemData index={index} item={item}/>
        ))}
      </tbody>
    );
  };