import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import InfoAuthor from './InfoAuthor';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes, useParams } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/:author' element={<InfoAuthor />} />
      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
