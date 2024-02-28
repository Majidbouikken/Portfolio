import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import AboutPage from './pages/AboutPage';
import HireMePage from './pages/HireMePage';
import ForFunPage from './pages/ForFunPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "works",
        element: <WorksPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "hire-me",
        element: <HireMePage />,
      },
      {
        path: "for-fun",
        element: <ForFunPage />,
      },
    ],
    errorElement: <h1>Error page</h1>,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
