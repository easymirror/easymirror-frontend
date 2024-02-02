import React from "react";
import { PageLayout } from "../../layouts/page-layout"
import style from "./styles.module.scss"
import { Table } from "../../components/ResizeableTable";
import { HistoryContent } from "./historyContent";
import { Convert } from "./historyItem";

const tableHeaders = [
    // "Items",
    <input type="checkbox"/>,
    "ID",
    "Name",
    "Link",
    "Date",
    "Duration",
    "Status"
];

export const HistoryPage = () => {
  const json = `{"id":"id","nickname":"name","link":"link","date":"2024-02-01T19:14:32+00:00","duration":"duration","status":"complete","additionalInfo":[""]}`
  let users = []
  try {
    const user = Convert.toHistoryItem(json);

    for (let index = 0; index < 100; index++) {
      users.push(user)
    }
  } catch (e) {
    // TODO need to handle the error better
    console.log("Handle error", e);
  }


    return (
        <PageLayout title="History" description="Previous Uploads">
            <div className={style.historyPage}>
              <div className={style.header}>History</div>
              <div className={style.backgroundCard}>
                <Table
                    headers={tableHeaders}
                    minCellWidth={120}
                    tableContent={<HistoryContent items={users} />}
                />

              </div>
            </div>
        </PageLayout>
    )
}