import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.json';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 
/* Pages */
import Login from "./Pages/AuthPages/Login";
import HomePage from "./Pages/Products/HomePage";
import Signup from "./Pages/AuthPages/Signup";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Account from "./Pages/Account/Account";
import CheckOut from "./Pages/CheckOut/CheckOut";
/* Layout */
import Layout from "./Layout/Layout";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "account", element: <Account /> },
      { path: "/signup", element: <Signup />},
      { path: "checkout", element: <CheckOut /> }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
