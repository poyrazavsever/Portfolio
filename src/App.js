import {useRoutes} from "react-router-dom"
import {routes} from "./routes"
import {Sun, LongLogo} from "./icons";
import ChangeIcon from "./components/ChangeIcon";

function App() {

  const showRoutes = useRoutes(routes)

  return (
    <div className="h-screen w-full bg-bg overflow-x-hidden">

      <div className="container mx-auto">

        <LongLogo className="w-32 ml-5"/>

        {showRoutes}

        <div className="flex gap-4 mt-5 absolute bottom-7 left-8 bg-bg">
            <button className="icons">EN</button>
            <ChangeIcon type="home"/>
            <Sun className="icons" />
        </div>
        
      </div>

      

      
    </div>
  );
}

export default App;
