import {useRoutes} from "react-router-dom"
import {routes} from "./routes"
import {Home, Sun} from "./icons";


function App() {

  const showRoutes = useRoutes(routes)

  return (
    <div className="h-screen w-full bg-bg">

      <div className="container mx-auto">
          <img src="Images/Logo/LongLogo.png" alt="logoImage"/>

          {showRoutes}

        <div className="flex flex-col gap-4 absolute bottom-3 left-5">
            <h4 className="icons">EN</h4>
            <Home className="icons"/>
            <Sun className="icons" />
        </div>
          
      </div>
      
    </div>
  );
}

export default App;
