import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from './App';
import { router } from "./root";
import './index.css'
import 'tailwindcss/tailwind.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <App /> {/* Render the App component here */}
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);