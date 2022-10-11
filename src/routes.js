import About from "./views/About";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Portfolio from "./views/Portfolio";


export const routes = [
    {
        path:"/",
        element:<Home />,
    },
    {
        path:"/about", 
        element: <About />,
    },
    {
        path:"/contact",
        element: <Contact />
    },
    {
        path:"/portfolio",
        element: <Portfolio />
    }

]