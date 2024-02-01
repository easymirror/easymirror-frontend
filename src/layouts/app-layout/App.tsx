import React from 'react';
import style from "./app.module.scss"
import { Navbar } from '../navbar';
import { Route, Routes } from 'react-router';
import { AccountPage } from '../../pages/Account';

function App() {
  return (
    <div className={style.app}>
      <Navbar/>
      <div className="page-container">
          <Routes>
            <Route path="/account"element={<AccountPage/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
