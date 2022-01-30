import React from 'react'

//Styles
import "./header.style.css"

//Components
import Description from '../Description/Description'

//Assets
import Sun from "../../Assets/icons8-sol-30.png"
import Moon from "../../Assets/icons8-no-molestar-2-30.png"

const Header = props => {

const { darkMode, handleDarkMode } = props

    return (
      <div className={`${darkMode ? "bg-cyan-700" : "bg-dark_1"} w-full flex flex-col py-6`}>
        <h2 className={`${darkMode ? "text-color_4" : "text-dark_4"} mx-auto text-2xl font-bold sm:text-3xl clase`}>Jacobo Jácome Acosta</h2>
        <h1 className={`${darkMode ? "text-color_4" : "text-dark_4"} mx-auto text-2xl font-bold sm:text-3xl clase py-2`}>{<Description />}</h1>
        <div className="flex h-14 justify-center content-center mx-auto md:left-20">
          <button onClick={handleDarkMode} className={`${ darkMode ? "bg-cyan-700 text-color_4 h-10" : "bg-dark_1 text-dark_4 h-10"} `}><img className="mx-auto" src={darkMode? Moon : Sun} rel="noreferrer" alt="Dark Mode"/><p className="clase">{darkMode ? "Dark Mode" : "Light Mode"}</p></button>
        </div>
      </div>
    )
}

export default Header
