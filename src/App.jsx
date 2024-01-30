import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Main from "./Components/Main";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/card/:id" },
]);
const App = () => {
  return (
    <>
      <Header />
      <Main/>
      <RouterProvider router={router} />
    </>
  );
};

export default App;