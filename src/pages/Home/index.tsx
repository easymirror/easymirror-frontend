import { PageLayout } from "../../layouts/page-layout"
import style from "./style.module.scss"

export const HomePage = () => {
    return (
        <PageLayout title="EasyMirror" description="File sharing made easy!">
        <div className={style.homePage}>
        </div>
        </PageLayout>
    )
}