import React from 'react';
import './App.css';
import { Navbar } from '../navbar';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="app">
      {/* TODO add Navbar element */}
      <Navbar/>
      {/* TODO add Sidebar element for mobile devices */}
      <div className="page-container">
          <Routes>
              {/* <Route path="/tasks"element={<Tasks/>} />
              <Route path="/accounts"element={<Accounts/>} />
              <Route path="/proxies"element={<Proxies/>} />
              <Route path="/profiles"element={<ProfilesPage/>} />
              <Route path="/settings"element={<Settings/>} /> */}
          </Routes>
      </div>
    </div>
  );
}

export default App;
