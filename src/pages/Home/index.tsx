import { PageLayout } from "../../layouts/page-layout"
import style from "./style.module.scss"

export const HomePage = () => {
    return (
        <PageLayout title="EasyMirror" description="File sharing made easy!">
            <div className={style.homePage}>
                {/* TODO add drag & drop functionality */}
                {/* TODO add btn to upload files */}
                {/* TODO Add Slogan 1 */}
                {/* TODO Add instructions */}
            </div>
        </PageLayout>
    )
}