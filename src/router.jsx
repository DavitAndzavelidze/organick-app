import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Services from "./views/Services.jsx";
import About from "./views/About.jsx";
import Contact from "./views/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Portfolio from "./views/Portfolio.jsx";
import Team from "./views/Team.jsx";
import Blog from "./views/Blog.jsx";
import NotFound from "./views/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
