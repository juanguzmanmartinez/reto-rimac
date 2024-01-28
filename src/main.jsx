import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PlanContextProvider } from './core/context/PlanContext.jsx';
import { AuthContextProvider } from './core/context/AuthContext.jsx';
import Plans from './pages/Plans/Plans';
import Resume from './pages/Resume/Resume';
import Auth from './pages/auth/Auth.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  },
  {
    path: 'plans',
    element: <Plans />,
  },
  {
    path: 'resume',
    element: <Resume />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PlanContextProvider>
        <RouterProvider router={router} />
      </PlanContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
