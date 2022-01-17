import React from 'react'

//Assets
import Pexels from "../../Assets/pexels-logo.jpg"
import Github from "../../Assets/github-icon-1.svg"
import Ecommers from "../../Assets/Logo_e-commers.jpg"

const Proyectos = () => {
    return (
        <div className="bg-color_4 flex-col flex-wrap flex w-screen justify-center content-center">
            <div className="flex w-screen mx-auto justify-center content-center ">
                <h2 className="text-cyan-700 text-3xl md:text-4xl font-bold">Proyectos</h2>
            </div>
            <div className="flex flex-col md:flex-row w-screen md:w-7/8 justify-center content-center my-4">
                <div className="flex flex-col w-4/5 mx-auto md:w-1/4 my-10 md:my-1 justify-evenly content-center bg-gray-200/30 rounded-lg py-4 shadow-xl shadow-gray-600/50">
                    <div className="flex w-52 mx-auto">
                        <img src={Ecommers} alt="E-commers"/>
                    </div>
                    <div className="flex flex-col justify-center content-center mx-auto">
                        <h3 className="font-bold mx-auto">E-Commers</h3>
                        <p className="text-justify w-3/4 mx-auto">E-commers realizado para un cliente, se utilizaron tecnoloías cómo React Js, UseContext, Tailwind, Firebase.</p>
                        <button className="my-2"><a className="bg-cyan-700 py-1 px-3 rounded-full text-color_4 hover:bg-cyan-700/40 hover:text-black" target="_blank" rel="noreferrer" href="https://e-commers-alpha.vercel.app/">Ir a:</a></button>
                    </div>
                </div>
                <div className="flex flex-col w-4/5 mx-auto md:w-1/4 my-10 md:my-1 justify-evenly content-center bg-gray-200/30 rounded-lg py-4 shadow-xl shadow-gray-600/50">
                    <div className="flex w-52 mx-auto">
                        <img src={Pexels} alt="Pexels Api"  />
                    </div>
                    <div className="flex flex-col justify-center content-center mx-auto">
                        <h3 className="font-bold mx-auto">Pexels Api</h3>
                        <p className="text-justify w-3/4 mx-auto">Consumo de Pexels Api simulando una red social de imagenes, utilicé tecnologías como React Js, Redux, Tailwind, Firebase.</p>
                        <button className="my-2"><a className="bg-cyan-700 py-1 px-3 rounded-full text-color_4 hover:bg-cyan-700/40 hover:text-black" target="_blank" rel="noreferrer" href="https://pexels-api.vercel.app/">Ir a:</a></button>
                    </div>
                </div>
                <div className="flex flex-col w-4/5 mx-auto md:w-1/4 my-10 md:my-1 justify-evenly content-center bg-gray-200/30 rounded-lg py-4 shadow-xl shadow-gray-600/50">
                    <div className="flex w-52 mx-auto">
                        <img src={Github} alt="GitHub Api" />
                    </div>
                    <div className="flex flex-col justify-center content-center mx-auto">
                        <h3 className="font-bold mx-auto">Github Api</h3>
                        <p className="text-justify w-3/4 mx-auto">Consumo de Github Api para investigar usuarios, conocer repocitorios, seguidores y seguidos. Utilicé tecnologias como React Js, Tailwind.</p>
                        <button className="my-2"><a className="bg-cyan-700 py-1 px-3 rounded-full text-color_4 hover:bg-cyan-700/40 hover:text-black" target="_blank" rel="noreferrer" href="https://github-api-5vs7iec2j-jacobojacome.vercel.app/">Ir a:</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyectos
