import React, { useState } from 'react';
import style from "./app.module.scss"
import { Navbar } from '../navbar';
import { Route, Routes } from 'react-router';
import { HomePage } from '../../pages/Home';
import { AccountPage } from '../../pages/Account';
import { HistoryPage } from '../../pages/History';
import "./styles.css"
import { FaqPage } from '../../pages/Faq';
import {useCookies} from 'react-cookie';

function App() {
  const [cookieOpen, setCookieOpen] = useState(true);
  const [, setCookie, ] = useCookies(['cookie-consent']);

  const acceptConsent = () => {
    // Create the expiration
    const hours = 730 // one month
    const d = new Date();
    d.setTime(d.getTime() + (hours*60*60*1000));

    // Set cookie
    setCookie("cookie-consent", true, {expires: d, httpOnly: true})

    // Close the modal
    setCookieOpen(false)
  }

  return (
    <div className={style.app}>
      <Navbar/>
      <div className="page-container">
          <Routes>
            <Route path="/"element={<HomePage/>} />
            <Route path="/home"element={<HomePage/>} />
            <Route path="/account"element={<AccountPage/>} />
            <Route path="/history"element={<HistoryPage/>} />
            <Route path="/faq"element={<FaqPage/>} />
          </Routes>
          {cookieOpen && <div className={style.cookie}>
            <h2>We use cookies</h2>
            <p>This website collects cookies to deliver better user experience</p>
            <button onClick={acceptConsent}>Accept</button>
          </div>
          }
          
      </div>
     
    </div>
  );
}

export default App;
