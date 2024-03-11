import React from "react";
import { PageLayout } from "../../layouts/page-layout"
import style from "./style.module.scss"
import { useParams } from "react-router-dom";

const mirrorResponse = { "success": true, "id": "mirror_id_here", "name": "Some folder name here", "upload_date": "", "links": { "bunkr": "bunkr", "gofile": "", "pixeldrain": "", "cyberfile": "", "saint_to": "", "cyberdrop": "" } }
const superlong = "some super long text that should hopefully overfill the cell contents and ellipsis"

export const MirrorsPage = () => {
    const { id } = useParams();

    // TODO: useEffect
    // TODO: Get results from backend
    // TODO: If no results found, display no results
    return (
        <PageLayout title="Mirrors">
            <div className={style.accountPage}>
                <div className={style.header}>{mirrorResponse.name !== "" ? mirrorResponse.name : `${mirrorResponse.id}'s Mirrors`}</div>
                <div className={style.tableContainer}>
                    <table className="mirrorTable">
                    <tr>
                        <th>Host</th>
                        <th>Link</th>
                        <th>Upload Date</th>
                        <th>Status</th>
                    </tr>
                    {/* TODO: Dynamically render results */}
                    <tr>
                        <td>{superlong}</td>
                        <td>{superlong}</td>
                        <td>{superlong}</td>
                        <td>{superlong}</td>
                    </tr>
                    <tr>
                        <td>{superlong}</td>
                        <td>{superlong}</td>
                        <td>{superlong}</td>
                        <td>{superlong}</td>
                    </tr>
                    </table>
                </div>
            </div>
        </PageLayout>
    )
}