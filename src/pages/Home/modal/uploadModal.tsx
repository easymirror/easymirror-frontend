import styles from "./style.module.scss"

interface ModalProps {
    onCloseModal: ()=> void
}

export const UploadModal = (props:ModalProps) => {
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
                <div className={styles.modalHeader}>
                    <div className={styles.url}>
                        <div className={styles.separator}></div>New Accounts Group</div>
                </div>
                <div className={styles.modalBody}>
                    <input required className={styles.proxyInput} placeholder={"Enter group name"} spellCheck={false} />
                </div>
                <div className={styles.modalFooter}>
                </div>
            </form>
        </div>
    )
}