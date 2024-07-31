import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/Routes'
import AuthProvider from './firebase/AuthProvider'
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </HelmetProvider>
  </QueryClientProvider>
  </React.StrictMode>,
)
