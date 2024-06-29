import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/Routes'
import AuthProvider from './firebase/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-w-screen-xl mx-auto'>
  <AuthProvider>
  <RouterProvider router={router} /> 
  </AuthProvider>
   </div>
  </React.StrictMode>,
)
