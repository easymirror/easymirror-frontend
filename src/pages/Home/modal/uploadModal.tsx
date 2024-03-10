import styles from "./style.module.scss"
import { useState } from "react"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Table } from "../../../components/ResizeableTable";
import { UploadContent } from "./uploadItems";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { v4 as uuidv4 } from "uuid";
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

interface PresignResponse {
    success: boolean
    mirror_id: string
    upload: Upload
}
  
interface Upload {
    uri: string
    valid_until: string
}  

export const UploadModal = (props:ModalProps) => {
    const [showUploadBtn, updateUpdateBtn] = useState(true)
    const [link, updateLink] = useState("")
    const [progress, setProgress] = useState<Map<number, number>>(new Map());
    const axiosPrivate = useAxiosPrivate()
    const getPresign = async (id: string, filename: string): Promise<string | undefined> => {
        try {
            const res = await axiosPrivate.get("/api/v1/mirror", {
                params: {
                    n: filename, // Name of the file
                    id: id // Mirror ID
                }
            });
            let response = res.data as PresignResponse;
            if (!response.success) return;
            return response.upload.uri;
        } catch (error) {
            console.error(error);
            throw error; // Propagate error
        }
    };
    const uploadToPresign = async (uri: string, file: File, index: number): Promise<void> => {
        try {
            await axios.put(uri, file, {
                onUploadProgress: (e) => {
                    const percentCompleted = Math.round((e.loaded * 100) / e.total!);
                    progress.set(index, percentCompleted);
                    setProgress(prevState => new Map([...Array.from(prevState), [index, percentCompleted]]));
                },
                headers: { 'Content-Type': file.type }
            });
        } catch (error) {
            console.error(error);
            throw error; // Propagate error
        }
    };
    const upload = async (mirrorID: string, file: File, index: number): Promise<void> => {
        try {
            // Get Presign URL
            const presign = await getPresign(mirrorID, file.name);
    
            if (!presign) {
                console.error("Presign URL is undefined.");
                return;
            }
    
            // Upload to presign URL
            await uploadToPresign(presign, file, index);
        } catch (error) {
            console.error(error);
            throw error; // Propagate error
        }
    };
    const handleUpload = async () => {
        // Remove the upload button
        updateUpdateBtn(false);
    
        // Generate a UUID
        const mirrorID = uuidv4();
    
        // For each file:
        const asyncProcesses: Promise<void>[] = [];
        console.log(new Date().toLocaleTimeString(), "Beginning the upload process...");
        props.files.forEach((file, index) => {
            asyncProcesses.push(upload(mirrorID, file, index));
        });
    
        try {
            // Wait for all promises to finish then update the mirror link
            console.log(new Date().toLocaleTimeString(), "Waiting for uploads to finish...");
            await Promise.all(asyncProcesses);
            updateLink(`https://easymirror.io/mirror/${mirrorID}`);
            console.log(new Date().toLocaleTimeString(), "Done uploading.");
        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };

    return (
        <div className={styles.ModalContainer}>
            <div className={styles.blurBackground} onClick={props.onCloseModal}></div>
            <form className={styles.modalContents}>

                {/* TODO site selection section */}
                {/* TODO settings selection */}
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
                        <input disabled placeholder="Generated Link Will Appear Here" value={link}/>
                    </div>
                    )}
                </div>
            </form>
        </div>
    )
}