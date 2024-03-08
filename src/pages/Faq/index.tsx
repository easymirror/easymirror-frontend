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
                        <FaqItem question="What is EasyMirror?" answer="EasyMirror is a convenient way to mirror your files to other sites!"/>
                        <FaqItem question="What is allowed to be uploaded on EasyMirror?" answer={
                            "We prohibit the upload and sharing of:\n\n- Child pornography/abuse\n- Animal abuse\n- Terrorism\n- Malware\n- Movies\n- TV Shows\n\nWe are fully compliant with U.S. laws and will be reported to the proper authorities if you fail to comply.\n\nShould you encounter any of this on our service, please scroll down to the contact us tab and send us an email asap."
                            }/>
                        <FaqItem question="Will my files stay online forever?" answer="It depends on which hosts you upload to. We recommend visiting the FAQ of the sites you choose to mirror to."/>
                        <FaqItem question="How can I report abuse?" answer="Please send an email to abuse@easymirror.io"/>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}