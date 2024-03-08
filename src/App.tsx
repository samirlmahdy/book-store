import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import { Container } from "@mui/material";
import BookPage from "./pages/BookPage.tsx";
import AddBook from "./components/AddBook.tsx";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "/books/:id", element: <BookPage /> },
  { path: "/books/add", element: <AddBook /> },
]);

function App() {
  return (
    <main className="App">
      <Container maxWidth="xl">
        <RouterProvider router={routes} />
      </Container>
    </main>
  );
}

export default App;
