import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./layout.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Authentication/Login.jsx";
import Signup from "./Authentication/Signup.jsx";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import Layout from "./Layout.jsx";
import NavContextProvider from "./Context/NavContextProvider.jsx";
import Charts from "./Pages/Charts/Charts.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavContextProvider>
      <RouterProvider router={routes} />
    </NavContextProvider>
  </StrictMode>,
);
