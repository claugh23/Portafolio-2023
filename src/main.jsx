/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import appRoutes from './routes/routesConfig.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { RouterProvider } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <App />
    <RouterProvider router={appRoutes} />
  </StrictMode>,
)
