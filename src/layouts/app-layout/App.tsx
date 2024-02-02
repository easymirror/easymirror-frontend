import React from 'react';
import style from "./app.module.scss"
import { Navbar } from '../navbar';
import { Route, Routes } from 'react-router';
import { HomePage } from '../../pages/Home';
import { AccountPage } from '../../pages/Account';
import { HistoryPage } from '../../pages/History';
import "./styles.css"

function App() {
  return (
    <div className={style.app}>
      <Navbar/>
      <div className="page-container">
          <Routes>
            <Route path="/"element={<HomePage/>} />
            <Route path="/home"element={<HomePage/>} />
            <Route path="/account"element={<AccountPage/>} />
            <Route path="/history"element={<HistoryPage/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
