import style from "./styles.module.scss"
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { convertBytes } from "../../../utils/convertBytes";
import ProgressBar from "@ramonak/react-progress-bar";

interface HistoryContentProps {
    files?: FileList,
    progress: Map<number, number>
}

export const UploadContent = (props:HistoryContentProps) => {
    return (
      <tbody>
        {Array.from(props.files!).map((file, index) => (
            <tr key={index}>
                <td><span>{file.name}</span></td>
                <td><span>{convertBytes(file.size)}</span></td>
                <td><span><ProgressBar completed={props.progress.get(index) ?? 0} /></span></td>
                
            </tr>
        ))}
      </tbody>
    );
  };