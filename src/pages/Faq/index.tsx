import React from "react";
import { PageLayout } from "../../layouts/page-layout"
import style from "./styles.module.scss"
import { FaqItem } from "./faqItem";



export const FaqPage = () => {

    return (
        <PageLayout title="History" description="Previous Uploads">
            <div className={style.faqPage}>
                <div className={style.header}>Frequently Asked Questions</div>
                <div className={style.backgroundCard}>
                    <div className={style.items}>
                        <FaqItem question="Question" answer="Answer"/>
                        <FaqItem question="Question" answer="Answer"/>
                        <FaqItem question="Question" answer="Answer"/>
                        <FaqItem question="Question" answer="Answer"/>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}