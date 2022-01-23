import React from 'react'

//Assets
import Sun from "../../Assets/icons8-sol-30.png"
import Moon from "../../Assets/icons8-no-molestar-2-30.png"

const Header = props => {

const { darkMode, handleDarkMode } = props

    return (
      <div className={`${darkMode ? "bg-cyan-700" : "bg-dark_1"} w-full flex flex-col`}>
        <h2 className={`${darkMode ? "text-color_4" : "text-dark_4"} mx-auto font-bold text-3xl sm:text-4xl font-sans`}>Jacobo Jácome Acosta</h2>
        <h1 className={`${darkMode ? "text-color_4" : "text-dark_4"} mx-auto font-bold text-2xl sm:text-3xl font sans py-2`}>Desarrollador FrontEnd</h1>
        <button onClick={handleDarkMode} className={`${ darkMode ? "bg-cyan-700 text-color_4 h-10" : "bg-dark_1 text-dark_4 h-10"} sm:absolute mx-auto md:left-20  `}><img src={darkMode? Moon : Sun} rel="noreferrer" alt="Dark Mode"/></button>
      </div>
    )
}

export default Header
