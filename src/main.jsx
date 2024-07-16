import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider } from "react-router-dom";
import router from './routes';
import SnackbarProvider from 'react-simple-snackbar'

// import Layout from './component/common/Layout';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <SnackbarProvider>
     <RouterProvider router={router}/>
    </SnackbarProvider>
  </React.StrictMode>
);
