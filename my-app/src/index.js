
import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/NotLogged/index.css';
import './Css/NotLogged/Header.css';
import './Css/NotLogged/Base.css';
import './Css/Logged/Base_Logged.css'
import './Css/Logged/Header_Logged.css'
import './Css/Logged/Screen_Logged.css'
import reportWebVitals from './reportWebVitals';
import BaseL from './compenentsL/Base_Logged'
import { MoralisProvider } from "react-moralis";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <MoralisProvider serverUrl="https://clo4nzzqkkml.usemoralis.com:2053/server" appId="gB38WrnjyvaCZ4lREzs9RgsIebteJ3qYME1atE54">

    <BaseL/> 
    </MoralisProvider>

    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
