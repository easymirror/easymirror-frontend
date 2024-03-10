import React, { useState, useEffect } from 'react';
import style from "./app.module.scss"
import { Navbar } from '../navbar';
import { Route, Routes } from 'react-router';
import { HomePage } from '../../pages/Home';
import { AccountPage } from '../../pages/Account';
import { HistoryPage } from '../../pages/History';
import "./styles.css"
import { FaqPage } from '../../pages/Faq';
import {useCookies} from 'react-cookie';
import useAuth from '../../hooks/useAuth';
import axios from '../../lib/axios';

const API_PATH = "/api/v1/auth/init"

interface JWTResponse{
  access_token: string
  success: boolean
}

function App() {
  const [cookieOpen, setCookieOpen] = useState(true);
  const [cookies, setCookie] = useCookies(['cookie-consent']);
  const { setAuth } = useAuth();
  const acceptConsent = () => {
    // Create the expiration
    const hours = 730 // one month
    const d = new Date();
    d.setTime(d.getTime() + (hours*60*60*1000));

    // Set cookie
    setCookie("cookie-consent", true, {expires: d})

    // Close the modal
    setCookieOpen(false)
  }

  useEffect(() => {
    const getJWT = async() => {
      try {
        const response = await axios.get(API_PATH, {withCredentials: true});
        let data = response?.data as JWTResponse
        if (!data.success) return
        localStorage.setItem("access_token",data.access_token)
        setAuth({accessToken: data.access_token})
      } catch (error) {
        console.error(error)
      }
    }

    // Check if user has accepted cookies
    if (cookies['cookie-consent']){
      setCookieOpen(false)
    }

    // Check if access token is present. If not, get a new one.
    if (!localStorage.getItem("access_token")){
      getJWT()
    }

  }, [cookies, setAuth]);

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
