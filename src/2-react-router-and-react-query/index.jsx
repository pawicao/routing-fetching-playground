import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import { createRouter } from './routes/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const run = () => {
  const queryClient = new QueryClient();
  const router = createRouter(queryClient);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>,
  )
}
