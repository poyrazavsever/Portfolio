import Home from "./views/Home";

import WhoAmI from "./views/About/texts/whoamı";
import Started from "./views/About/texts/started";
import Purpose from "./views/About/texts/purpose";
import WhySoftware from "./views/About/texts/whysoftware";
import Learn from "./views/About/texts/learn";


export const routes = [
    {
        path:"/",
        element:<Home />,
        children: [
            {
                path:"",
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
]