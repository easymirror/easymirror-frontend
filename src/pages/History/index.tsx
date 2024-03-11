import React, { useState } from "react";
import { PageLayout } from "../../layouts/page-layout"
import style from "./styles.module.scss"
import { Table } from "../../components/ResizeableTable";
import { HistoryContent } from "./historyContent";
import { HistoryItem } from "./historyItem";
import { Checkbox } from "../../components/Checkbox";
import { useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import axiosOg, {AxiosError} from "axios";


const tableHeaders = [
    <Checkbox/>, // TODO make this button functional
    "ID",
    "Name",
    "Link",
    "Date",
    "Duration",
    "Status",
    "", // Leave blank - will be used for buttons
];

const HISTORY_PATH = "/api/v1/history"

export const HistoryPage = () => {
  const axiosPrivate = useAxiosPrivate()
  const [uploads, setUploads] = useState<HistoryItem[]>([])
  useEffect(() => {
    // Get results from backend
    const getHistory = async() => {
        try {
            const resp = await axiosPrivate.get(HISTORY_PATH)
            const response = resp.data as HistoryItem[]
            setUploads(response)
        } catch (error) {
            if (axiosOg.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                if (axiosError.response?.status === 404) {
                  console.error('404 Not Found');
                } else {
                  console.error(`HTTP Error: ${axiosError.response?.status}`);
                }
              } else {
                console.error('An error occurred while fetching data');
              }
        } 
    }
    getHistory()
  }, [axiosPrivate]);


    return (
        <PageLayout title="History" description="Previous Uploads">
            <div className={style.historyPage}>
              <div className={style.header}>History</div>
              <div className={style.backgroundCard}>
                <Table
                    headers={tableHeaders}
                    minCellWidth={120}
                    tableContent={<HistoryContent items={uploads} />}
                />

              </div>
            </div>
        </PageLayout>
    )
}