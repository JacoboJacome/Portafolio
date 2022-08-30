import React from "react";

//Styles
import "./proyectos.styles.css";

//Assets
import Pexels from "../../Assets/pexels-logo.jpg";
import Search from "../../Assets/search_user.png";
import Ecommers from "../../Assets/Logo_e-commers.jpg";

const Proyectos = (props) => {
  const { darkMode } = props;

  return (
    <div
      className={`${
        darkMode ? "bg-color_4" : "bg-gray-700"
      } flex-col flex-wrap flex w-full justify-center content-center box-border py-6`}
    >
      <div className="flex w-full mx-auto justify-center content-center ">
        <h2
          className={`${
            darkMode ? "text-cyan-700" : "text-dark_4"
          } text-3xl md:text-4xl font-bold font-text`}
        >
          Proyectos
        </h2>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-7/8 justify-center content-center my-4">
        <div className="flex flex-col w-4/5 mx-auto md:w-1/4 my-10 md:my-1 justify-evenly content-center bg-gray-200/30 rounded-lg py-4 shadow-xl shadow-gray-600/50">
          <div className="flex w-3/4 mx-auto">
            <img src={Ecommers} alt="E-commers" />
          </div>
          <div className="flex flex-col justify-center content-center mx-auto">
            <h3
              className={`${
                darkMode ? "text-cyan-700" : "text-dark_4"
              } font-bold mx-auto font-text`}
            >
              E-Commers
            </h3>
            <p
              className={`${
                darkMode ? "text-black" : "text-white"
              } text-justify w-3/4 mx-auto font-text`}
            >
              E-commers realizado para un cliente, se utilizaron tecnoloías cómo
              React Js, UseContext, Tailwind, Firebase.
            </p>
            <button className="my-2">
              <a
                className="bg-cyan-700 py-1 px-3 rounded-full text-color_4 hover:bg-cyan-700/40 hover:text-black"
                target="_blank"
                rel="noreferrer"
                href="https://e-commers-alpha.vercel.app/"
              >
                Ir a:
              </a>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-4/5 mx-auto md:w-1/4 my-10 md:my-1 justify-evenly content-center bg-gray-200/30 rounded-lg py-4 shadow-xl shadow-gray-600/50">
          <div className="flex w-3/4 mx-auto">
            <img src={Pexels} alt="Pexels Api" />
          </div>
          <div className="flex flex-col justify-center content-center mx-auto">
            <h3
              className={`${
                darkMode ? "text-cyan-700" : "text-dark_4"
              } font-bold mx-auto font-text`}
            >
              Pexels Api
            </h3>
            <p
              className={`${
                darkMode ? "text-black" : "text-white"
              } text-justify w-3/4 mx-auto font-text`}
            >
              Consumo de Pexels Api simulando una red social de imagenes,
              utilicé tecnologías como React Js, Redux, Tailwind, Firebase.
            </p>
            <button className="my-2">
              <a
                className="bg-cyan-700 py-1 px-3 rounded-full text-color_4 hover:bg-cyan-700/40 hover:text-black"
                target="_blank"
                rel="noreferrer"
                href="https://pexels-api.vercel.app/"
              >
                Ir a:
              </a>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-4/5 mx-auto md:w-1/4 my-10 md:my-1 justify-evenly content-center bg-gray-200/30 rounded-lg py-4 shadow-xl shadow-gray-600/50">
          <div className="flex w-3/4 mx-auto">
            <img src={Search} alt="GitHub Api" />
          </div>
          <div className="flex flex-col justify-center content-center mx-auto">
            <h3
              className={`${
                darkMode ? "text-cyan-700" : "text-dark_4"
              } font-bold mx-auto font-text`}
            >
              Search User
            </h3>
            <p
              className={`${
                darkMode ? "text-black" : "text-white"
              } text-justify w-3/4 mx-auto font-text`}
            >
              Busqueda de usuarios utiliazando TrieThree, un algoritmo para
              filtrar de manera eficiente los nombres de usuario.
            </p>
            <button className="my-2">
              <a
                className="bg-cyan-700 py-1 px-3 rounded-full text-color_4 hover:bg-cyan-700/40 hover:text-black"
                target="_blank"
                rel="noreferrer"
                href="https://trietree-23m31p42f-jacobojacome.vercel.app/"
              >
                Ir a:
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
