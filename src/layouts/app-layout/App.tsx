import React, { useState } from 'react';
import style from "./app.module.scss"
import { Navbar } from '../navbar';
import { Route, Routes } from 'react-router';
import { HomePage } from '../../pages/Home';
import { AccountPage } from '../../pages/Account';
import { HistoryPage } from '../../pages/History';
import "./styles.css"
import { FaqPage } from '../../pages/Faq';

function App() {
  const [cookieOpen, setCookieOpen] = useState(true);

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
            <h2>We use cookie</h2>
            <p>This website collects cookies to deliver better user experience</p>
            <button onClick={() => setCookieOpen(false)}>Accept</button>
            <button onClick={() => setCookieOpen(false)}>Close</button>
          </div>
          }
          
      </div>
     
    </div>
  );
}

export default App;
