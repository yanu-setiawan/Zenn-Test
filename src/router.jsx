import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Api from "./pages/Api";
import Poke from "./pages/Poke";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Api",
    element: <Api />,
  },
  {
    path: "/Poke",
    element: <Poke />,
  },
]);

export default router;
