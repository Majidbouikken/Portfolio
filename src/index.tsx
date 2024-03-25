import { StrictMode } from 'react';
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
import WorkDetailsPage from './pages/WorkDetailsPage';
import { workDetailsLoader } from './services/WorkService';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

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
        path: ":title",
        element: <WorkDetailsPage />,
        loader: workDetailsLoader,
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
if (localStorage.getItem('theme') != null) {
  document.documentElement.classList.remove('light', 'sunset', 'dark');
  document.documentElement.classList.add(localStorage.getItem('theme') as string);
} else {
  // window.matchMedia('(prefers-color-scheme: dark)').matches)
}
root.render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
