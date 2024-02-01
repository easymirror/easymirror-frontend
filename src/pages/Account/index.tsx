import React from "react";
import { PageLayout } from "../../layouts/page-layout"
import { BackgroundCard } from "./backgroundCard";
import { AccountDetail } from "./accountDetail";

export const AccountPage = () => {
    return (
        <PageLayout title="Account" description="Manage account">
            {/* TODO Add title of page here */}
            <div className="header">Account</div>

            <BackgroundCard>
                <AccountDetail name="Name:" value="John Smith"/>
                <AccountDetail name="Email:" value="John Smith"/>
                <AccountDetail name="Phone:" value="John Smith"/>
                <AccountDetail name="Username:" value="John Smith"/>
                <AccountDetail name="Password:" value="John Smith"/>
            </BackgroundCard>
        </PageLayout>
    )
}