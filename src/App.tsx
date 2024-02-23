import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "dashboard", element: <Dashboard /> },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
