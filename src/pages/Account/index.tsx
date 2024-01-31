import React from "react";
import "./style.css";
import { PageLayout } from "../../layouts/page-layout"
import { BackgroundCard } from "./backgroundCard";
import { AccountDetail } from "./accountDetail";

export const AccountPage = () => {
    return (
        <PageLayout title="Account" description="Manage account">
            {/* TODO Add title of page here */}

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

export const AccountPage1 = () => {
    return (
      <div className="box">
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper">Name:</div>
            <div className="div">Email:</div>
            <div className="text-wrapper-2">Phone:</div>
            <div className="text-wrapper-3">Username:</div>
            <div className="text-wrapper-4">Password:</div>
            <div className="text-wrapper-5">John Smith</div>
            <div className="text-wrapper-6">johnsmith@rapidfile.com</div>
            <div className="text-wrapper-7">000-000-0000</div>
            <div className="text-wrapper-8">johnsmith001</div>
            <div className="text-wrapper-9">••••••••••</div>
            <img className="eye" alt="Eye" src="eye.png" />
            <img className="edit" alt="Edit" src="edit.png" />
            <img className="img" alt="Edit" src="image.png" />
            <img className="edit-2" alt="Edit" src="edit-2.png" />
            <img className="edit-3" alt="Edit" src="edit-3.png" />
          </div>
          <div className="account-header">Account</div>
        </div>
      </div>
    );
  };