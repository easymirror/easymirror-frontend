import style from "./styles.module.scss"
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { convertBytes } from "../../../utils/convertBytes";

interface HistoryContentProps {
    files?: FileList
}

export const UploadContent = (props:HistoryContentProps) => {
    return (
      <tbody>
        {Array.from(props.files!).map((file, index) => (
            <tr key={index}>
                <td><span>{file.name}</span></td>
                <td><span>{convertBytes(file.size)}</span></td>
                <td><span>{"In-progress"}</span></td>
            </tr>
        ))}
      </tbody>
    );
  };