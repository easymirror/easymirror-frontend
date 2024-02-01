import React from "react";
import { PageLayout } from "../../layouts/page-layout"
import style from "./styles.module.scss"

export const HistoryPage = () => {
    return (
        <PageLayout title="History" description="Previous Uploads">
            <div className={style.historyPage}>
              <div className={style.header}>History</div>
              <div className={style.backgroundCard}>
              </div>
            </div>
        </PageLayout>
    )
}