import styles from "./style.module.scss"
import { useState } from "react"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface ModalProps {
    files?: FileList
    onCloseModal: ()=> void
}

export const UploadModal = (props:ModalProps) => {
    const [showUploadBtn, updateUpdateBtn] = useState(true)
    const [link, updateLink] = useState("")

    // const groupNameRef = useRef<HTMLInputElement>(null);

    // const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    //     // Save to backend then close modal
    //     event.preventDefault()
    //     NewAccountsGroup(props.parentID,groupNameRef.current!.value).then(() => props.onCloseModal())
    // }

    return (
        <div className={styles.ModalContainer}>
            <div className={styles.blurBackground} onClick={() =>props.onCloseModal()}></div>
            <form className={styles.modalContents}>

                {/* TODO site selection section */}
                {/* TODO settings selection */}
                {/* TODO file display section */}
    
                <div className={styles.footerSection}>
                    {showUploadBtn && <button className={styles.uploadBtn}>Upload</button>}
                    {/* TODO generated link section */}
                    <div className={styles.generatedLinkContainer}>
                        <ContentCopyIcon className={styles.icon} onClick={() => {navigator.clipboard.writeText(link)}}/>
                        <input disabled placeholder="Generated Link Will Appear Here"/>
                  </div>
                </div>
            </form>
        </div>
    )
}