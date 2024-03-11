import { PageLayout } from "../../layouts/page-layout"
import style from "./style.module.scss"

export const NotFoundPage = () => {
    return (
        <PageLayout title="EasyMirror" description="uh-oh! Page not found!">
            <div className={style.homePage}>
                <div className={style.textContainer}>
                    <div className={style.slogans}>
                        <div className={style.slogan1}><span>404</span> page not found &#9785;</div>
                        <div className={style.slogan2}>The link you followed was probably removed or you entered something wrong.</div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}