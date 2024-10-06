import { createHashRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services";

export const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/main-page",
    element: <App />,
    children: [
      {
        path: "/main-page/",
        element: <Dashboard />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:id",
        element: <Services />,
      },
    ],
  },
]);
