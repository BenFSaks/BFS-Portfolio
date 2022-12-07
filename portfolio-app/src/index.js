import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/route';
import Projects from './pages/Projects';
import Socials from './pages/Socials';
import Resume from './pages/Resume';
import Club from './pages/Club';
import Experience from './pages/Experience';
import ErrorPage from "./error-page";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/projects",
    element: <Projects></Projects>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/club",
    element: <Club/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/socials",
    element: <Socials/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/resume",
    element: <Resume/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/experience",
    element: <Experience/>,
    errorElement: <ErrorPage/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
