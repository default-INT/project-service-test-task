import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Content} from "./components/Content";
import {DataState} from "./context/data/DataState";

ReactDOM.render(
  <React.StrictMode>
    <DataState>
        <App header={<Header/>} content={<Content />} footer={<Footer/>} />
    </DataState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
