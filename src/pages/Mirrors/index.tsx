import React, { useState } from "react";
import { PageLayout } from "../../layouts/page-layout"
import style from "./style.module.scss"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "../../lib/axios";
import axiosOg, {AxiosError} from "axios";
import { NotFound } from "./notFound";

const MIRROR_PATH = "/api/v1/mirrors/"

interface MirrorData {
    success: boolean
    error?: string
    id?: string
    name?: string
    upload_date?: string
    status?: string
    links?: Links
}
  
interface Links {
    bunkr?: string
    gofile?: string
    pixeldrain?: string
    cyberfile?: string
    saint_to?: string
    cyberdrop?: string
}


export const MirrorsPage = () => {
    const { id } = useParams();
    const [mirrorData, updateMirrorData] = useState<MirrorData>({success: false})
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        // Get results from backend
        const getMirrorData = async() => {
            try {
                const resp = await axios.get(MIRROR_PATH + id)
                const response = resp.data as MirrorData
                if (!response.success){
                    // TODO: Handle this error better
                    // TODO: If no results found, display no results
                    console.warn("Failed because:", response.error)
                }
                updateMirrorData(response)
            } catch (error) {
                if (axiosOg.isAxiosError(error)) {
                    const axiosError = error as AxiosError;
                    if (axiosError.response?.status === 404) {
                      setError('404 Not Found');
                      console.log("404 not found")
                    } else {
                      setError(`HTTP Error: ${axiosError.response?.status}`);
                    }
                  } else {
                    setError('An error occurred while fetching data');
                  }
            } 
        }
        getMirrorData()
      }, [id]);
    return (
        <PageLayout title="Mirrors">
            <div className={style.accountPage}>
                {error && <NotFound/>}
                {!error && (
                    <>
                    <div className={style.header}>{mirrorData.name ? mirrorData.name : `Mirror Links`}</div>
                    <div className={style.tableContainer}>
                        <table className="mirrorTable">
                        <tr>
                            <th>Host</th>
                            <th>Link</th>
                            <th>Upload Date</th>
                            <th>Status</th>
                        </tr>
                        {mirrorData.links && Object.keys(mirrorData.links).map((key, index) => (
                        <tr key={index}>
                            <td>{key}</td>
                            <td>{mirrorData.links[key]}</td>
                            <td>{mirrorData.upload_date}</td>
                            <td>{mirrorData.status}</td>
                        </tr>
                        ))}
                        </table>
                    </div>
                    </>
                )}
            </div>
        </PageLayout>
    )
}