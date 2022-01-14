import React from 'react'

//Assets
import Github from "../../Assets/github-icon-1.svg"
import Gmail from "../../Assets/gmail-icon.svg"
import Linkedin from "../../Assets/linkedin-icon-2.svg"

const Footer = () => {
    return (
        <div className="bg-color_4 ">
            <div className="flex w-screen">
                <h3 className="font-bold mx-auto text-3xl sm:text-4xl text-cyan-700">Contacto</h3>
            </div>
            <div className="flex flex-wrap w-screen justify-evenly content-center mx-auto py-5">
            <div className="w-1/5 m-2 flex flex-col md;w-1/5 bg-color_4/20 rounded-lg shadow-xl shadow-cyan-700/20 hover:bg-cyan-700/40 hover:-translate-y-2 hover:scale-110 transition ease-in-out delay-150 ">
                    <a href="https://github.com/JacoboJacome" target="_blank" rel="noreferrer">
                        <img src={Github} alt="Html 5" className="my-auto p-2"/>
                    </a>
                </div>
                <div className="w-1/5 m-2 flex flex-col md;w-1/5 bg-color_4/20 rounded-lg shadow-xl shadow-cyan-700/20 hover:bg-cyan-700/40 hover:-translate-y-2 hover:scale-110 transition ease-in-out delay-150">
                    <a href="https://www.linkedin.com/in/jacobo-jacome-5bab44213/" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="Html 5" className="my-auto p-2"/>
                    </a>
                </div>
            </div>
            <div className="w-screen flex flex-wrap flex-row justify-center content-center ">
                <img className="h-10 mx-4 p-2 " src={Gmail} alt="Gmail"/>
                <spam className="my-auto">jacobojacome@gmail.com</spam>
            </div>
            <div className="w-screen flex">
                <span className="mx-auto text-bold">Toda la Gloria sea para Dios</span>
            </div>
        </div>
    )
}

export default Footer
