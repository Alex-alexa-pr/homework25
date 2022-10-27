import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import Home from "./routes/Home";
import Users from "./routes/Users";
import NotFound from "./routes/NotFound";
import User from "./routes/User";

import './index.css';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:userId",
        element: <User />,
      },
      {
        path: "hotels",
        element: <NotFound />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);


