import About from "./views/About";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Portfolio from "./views/Portfolio";

import WhoAmI from "./views/About/texts/whoamı";
import Started from "./views/About/texts/started";
import Purpose from "./views/About/texts/purpose";
import WhySoftware from "./views/About/texts/whysoftware";
import Learn from "./views/About/texts/learn";


export const routes = [
    {
        path:"/",
        element:<Home />,
    },
    {
        path:"/about", 
        element: <About />,
        children: [
            {
                path:"whoami",
                element:<WhoAmI />
            },
            {
                path:"started",
                element: <Started />
            },
            {
                path:"purpose",
                element:<Purpose />
            },
            {
                path:"whysoftware",
                element: <WhySoftware />
            },
            {
                path:"learn",
                element: <Learn />
            },
        ]
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