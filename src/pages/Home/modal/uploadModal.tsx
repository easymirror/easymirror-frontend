import styles from "./style.module.scss"
import { useState } from "react"

interface ModalProps {
    files?: FileList
    onCloseModal: ()=> void
}

export const UploadModal = (props:ModalProps) => {
    const [showUploadBtn, updateUpdateBtn] = useState(true)

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
    
                <div className="footerSection">
                    {showUploadBtn && <button className={styles.uploadBtn}>Upload</button>}
                    {/* TODO generated link section */}
                </div>
            </form>
        </div>
    )
}