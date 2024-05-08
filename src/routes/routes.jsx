import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";

const router = createBrowserRouter([
  { path: "/LoginPage", element: <LoginPage /> },
  { path: "/HomePage", element: <HomePage /> },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
