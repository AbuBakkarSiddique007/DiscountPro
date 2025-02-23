import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Root/router.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <RouterProvider router={router} ></RouterProvider> */}

    {/* <AuthProvider>
      <RouterProvider router={router} ></RouterProvider>
      </AuthProvider> */}

    <AuthProvider router={<RouterProvider router={router} ></RouterProvider>} >

    </AuthProvider>

  </StrictMode>,
)
