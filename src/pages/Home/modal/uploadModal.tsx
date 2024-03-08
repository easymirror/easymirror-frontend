import styles from "./style.module.scss"
import { useState } from "react"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Table } from "../../../components/ResizeableTable";
import { UploadContent } from "./uploadItems";
import axios from "axios";

const tableHeaders = [
    "File",
    "Size",
    "Status"
]

interface ModalProps {
    files?: any
    onCloseModal: ()=> void,
}

export const UploadModal = (props:ModalProps) => {
    const [showUploadBtn, updateUpdateBtn] = useState(true)
    const [link, updateLink] = useState("")
    const [progress, setProgress] = useState<Map<number, number>>(new Map());

    // const groupNameRef = useRef<HTMLInputElement>(null);

    // const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    //     // Save to backend then close modal
    //     event.preventDefault()
    //     NewAccountsGroup(props.parentID,groupNameRef.current!.value).then(() => props.onCloseModal())
    // }

    const handleUpload = () => {
        // Remove the upload button
        updateUpdateBtn(false)

        console.log(props.files);
        props.files?.forEach((file: File, index: number) => {
            const formData = new FormData();
            formData.append("file", file);
    
            axios.post('http://localhost:8081/upload_file', formData, {
                headers:{
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (e) => {
                    const percentCompleted = Math.round(
                        (e.loaded * 100) / e.total!
                      );

                    progress.set(index, percentCompleted);

                    setProgress(prevState => new Map([...Array.from(prevState), [index, percentCompleted]]));

                    console.log(percentCompleted);
                }
            })
    
        })
       
        // Display container to generate link
        // TODO Upload files to API
    }

    return (
        <div className={styles.ModalContainer}>
            <div className={styles.blurBackground} onClick={() =>props.onCloseModal()}></div>
            <form className={styles.modalContents}>

                {/* TODO site selection section */}
                {/* TODO settings selection */}
                {/* TODO file display section */}
                <div className="table">
                    <Table
                        headers={tableHeaders}
                        minCellWidth={120}
                        tableContent={<UploadContent files={props.files} progress={progress} />}
                    />
                </div>
    
                <div className={styles.footerSection}>
                    {showUploadBtn && <button className={styles.uploadBtn} onClick={handleUpload}>Upload</button>}
                    {!showUploadBtn && (
                    <div className={styles.generatedLinkContainer}>
                        <ContentCopyIcon className={styles.icon} onClick={() => {navigator.clipboard.writeText(link)}}/>
                        <input disabled placeholder="Generated Link Will Appear Here"/>
                    </div>
                    )}
                </div>
            </form>
        </div>
    )
}