import { PageLayout } from "../../layouts/page-layout"
import style from "./style.module.scss"
import { useState, useRef } from "react"
import { convertBytes } from "../../utils/convertBytes"
import { UploadModal } from "./modal/uploadModal"
import axios from "axios"

export const HomePage = () => {
    const inputFile = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<any> ([]);
    const [showModal, updateShowModal] = useState(false)
    const [progress, setProgress] = useState(0)

    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.currentTarget.files
        if (!f)  return

        const newData= [ ...files, ...Array.from(f) ];
        
        setFiles(newData);
        updateShowModal(true)
    }

    const onSelectClick = () => {
        // `current` points to the mounted file input element
        if (inputFile.current === null) return
        inputFile.current.click();
    }

    return (
        <PageLayout title="EasyMirror" description="File sharing made easy!">
            { showModal && <UploadModal files={files!} onCloseModal={() => {}}/> }
            <div className={style.homePage}>
                {/* TODO add drag & drop functionality */}
                <button className={style.selectBtn} onClick={onSelectClick}>Select File(s)</button>
                <input type={'file'} multiple={true} ref={inputFile} onChange={handleChangeFile} style={{display: 'none'}}/>

                <div className={style.textContainer}>
                    <div className={style.slogans}>
                        <div className={style.slogan1}>The <span>best</span> way to mirror files.</div>
                        <div className={style.slogan2}>Mirror files in seconds with an auto-generated link.</div>
                    </div>
                    {/* <div className={style.intructions1}>Select or drag and drop files to start</div> */}
                </div>
            </div>
        </PageLayout>
    )
}