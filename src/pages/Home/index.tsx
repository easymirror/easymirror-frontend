import { PageLayout } from "../../layouts/page-layout"
import style from "./style.module.scss"

export const HomePage = () => {
    return (
        <PageLayout title="EasyMirror" description="File sharing made easy!">
            <div className={style.homePage}>
                {/* TODO add drag & drop functionality */}
                <button className={style.selectBtn}>Select File(s)</button>

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