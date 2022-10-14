import {NavLink, useRoutes} from "react-router-dom"
import {routes} from "./routes"
import {LongLogo} from "./icons";

function App() {

  const showRoutes = useRoutes(routes)

  return (
    <div className="h-screen w-full bg-bg overflow-x-hidden">

      <div className="container mx-auto">

        <NavLink to="/" className="flex items-center justify-center gap-2">
          <LongLogo className="w-32 ml-5"/>
          <p className="text-sm linear-text">v1.0</p>
        </NavLink>        

        {showRoutes}

      </div>
      
    </div>
  );
}

export default App;
