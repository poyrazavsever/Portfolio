import {NavLink, useRoutes} from "react-router-dom"
import {routes} from "./routes"
import {LongLogo, AudioPlay, AudioStop, Sun, Moon} from "./icons";
import {useAudio} from "./Hooks/useAudio"
import { useState } from "react";
import {useSelector, useDispatch } from "react-redux"
import {changeLanguage} from "./counterSlice"

function App() {

  const showRoutes = useRoutes(routes)
  const [playing, toggle] = useAudio("sound/music.mp3");


  const count = useSelector((state) => state.counter.language)
  const dispatch = useDispatch()

  const [darkMode, setDarkMode] = useState(false)

  const changeMode = () =>{
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }

  const iconStyle = "text-linear-default text-xl mr-5 dark:text-primary-200"

  return (
    <div className={`h-screen w-full bg-bg ${darkMode? `dark !bg-slate-300` : ``} overflow-x-hidden dark:`}>

      <div className="container mx-auto">

        <NavLink to="/" className="flex items-center justify-center sticky top-0 gap-2 pr-4 bg-bg dark:bg-slate-300 z-30 w-full">
          <LongLogo className="w-48 ml-5 dark:text-primary-200"/>
          <p className="text-sm linear-text dark:text-primary-200">v1.0</p>

          <div className="flex items-center justify-center">

            <button className={iconStyle}
            onClick={toggle}
            >
              {playing? <AudioStop className="animate-[text_.2s_ease-in-out_forwards]"/> : <AudioPlay className="animate-[text_.2s_ease-in-out_forwards]"/>  } 
            </button>

            <button className={iconStyle} onClick={() => changeMode()}>
              {darkMode ? <Moon className="animate-[text_.2s_ease-in-out_forwards]"/> : <Sun className="animate-[text_.2s_ease-in-out_forwards]"/> }
            </button>

            <button onClick={() => dispatch(changeLanguage())}
            className="text-linear-default dark:text-primary-200 w-6 dark:font-medium animate-[text_.2s_ease-in-out_forwards]">
              {count === "en" ? "TR" : "EN"}
            </button>

          </div>
        </NavLink>        

        {showRoutes}

      </div>
       
    </div>
  );
}

export default App;
