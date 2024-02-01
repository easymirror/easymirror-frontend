import React from "react";
import { PageLayout } from "../../layouts/page-layout"
import { BackgroundCard } from "./backgroundCard";
import { AccountDetail } from "./accountDetail";
import style from "./style.module.scss"
export const AccountPage = () => {
    return (
        <PageLayout title="Account" description="Manage account">
            <div className={style.accountPage}>
              <div className={style.header}>Account</div>
              <BackgroundCard>
                  <AccountDetail name="Name:" value="John Smith"/>
                  <AccountDetail name="Email:" value="John Smith"/>
                  <AccountDetail name="Phone:" value="John Smith"/>
                  <AccountDetail name="Username:" value="John Smith"/>
                  <AccountDetail name="Password:" value="John Smith"/>
              </BackgroundCard>
            </div>
        </PageLayout>
    )
}