import React from "react";

//Styles
import "./Footer";

//Assets
import Github from "../../Assets/github-icon-1.svg";
import Gmail from "../../Assets/gmail-icon.svg";
import Linkedin from "../../Assets/linkedin-icon.svg";
import CV from "../../Assets/cv.png";
import Curriculum from "../../Assets/Jacobo_Jacome_CV.pdf";
import Foto from "../../Assets/foto.jpeg";

const Footer = (props) => {
  const { darkMode } = props;

  return (
    <div
      className={`${
        darkMode ? "bg-color_4" : "bg-gray-700"
      } flex flex-col md:flex-row md:justify-center ms:content-center flex-wrap w-full box-border font-text py-6`}
    >
      <div className="flex md:flex-row w-screen md:w-1/3 ">
        <div className="flex flex-wrap w-full md:justify-center md:content-center md:flex-col">
          <div className="flex w-full">
            <h3
              className={`${
                darkMode ? "text-cyan-700" : "text-dark_4"
              } font-bold mx-auto text-3xl sm:text-4xl`}
            >
              ¿Quien soy?
            </h3>
          </div>
          <div className="flex md:flex-wrap w-full md:mx-auto py-5">
            <div
              className={`${
                darkMode ? "text-cyan-700" : "text-gray-100"
              } w-4/5 md:w-7/8 mx-auto text-justify font-mono font-medium`}
            >
              <p>
                Soy Jacobo Jácome, tengo 25 años, estoy casado y tengo un
                pequeño hijo que me motiva a mejorar constantemente. Soy{" "}
                <span className="font-bold">Desarrollador web Full Stack</span>{" "}
                de Academlo, aprendiendo las mejores practicas para el
                desarrollo web; Además,{" "}
                <span className="font-bold">
                  Desarrollador web Full Stack con JavaScript
                </span>{" "}
                de Platzi, me gustan los retos, mantenerme actualizado, se
                trabajar en equipo y estoy dispuesto a aprender de mis
                compañeros y superiores todo lo que sea necesario para prestar
                un mejor servicio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row w-screen md:w-1/3 ">
        <div className="flex w-full h-96 ">
          <img
            src={Foto}
            alt="Jacobo Jácome"
            className=" object-cover mx-auto rounded-full"
          />
        </div>
      </div>
      <div className="flex w-screen md:w-1/3 md:flex-row">
        <div className="flex flex-wrap w-screen md:justify-center md:content-center md:flex-col">
          <div className="flex w-screen md:w-1/2">
            <h3
              className={`${
                darkMode ? "text-cyan-700" : "text-dark_4"
              } font-bold mx-auto text-3xl sm:text-4xl`}
            >
              Contacto
            </h3>
          </div>
          <div className="flex md:flex-wrap md:justify-center md:content-center w-screen md:w-1/2 mx-auto py-5">
            <div
              className={`w-1/5 m-2 mx-auto md:mx-2 flex flex-col md:w-20 md:p-0 rounded-full shadow-xl ${
                darkMode ? "shadow-gray-700/40" : "shadow-gray-200/40"
              }  hover:-translate-y-2 hover:scale-110 transition ease-in-out delay-150`}
            >
              <a
                href="https://github.com/JacoboJacome"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Github} alt="Html 5" className="my-auto p-2" />
              </a>
            </div>
            <div
              className={`w-1/5 m-2 mx-auto md:mx-2 flex flex-col md:w-20 md:p-0 rounded-full shadow-xl ${
                darkMode ? "shadow-gray-700/40" : "shadow-gray-200/40"
              }  hover:-translate-y-2 hover:scale-110 transition ease-in-out delay-150`}
            >
              <a
                className=""
                href="https://www.linkedin.com/in/jacobo-j%C3%A1come-acosta-5bab44213/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Linkedin} alt="Html 5" className="my-auto p-2" />
              </a>
            </div>
            <div
              className={`w-1/5 m-2 mx-auto md:mx-2 flex flex-col md:w-20 md:p-0 rounded-full shadow-xl ${
                darkMode ? "shadow-gray-700/40" : "shadow-gray-200/40"
              }  hover:-translate-y-2 hover:scale-110 transition ease-in-out delay-150`}
            >
              <a
                className=""
                href={Curriculum}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={CV}
                  alt="Html 5"
                  className="my-auto p-2 rounded-full"
                />
              </a>
            </div>
          </div>
          <div className="flex md:flex-wrap mx-auto md:flex-row justify-center content-center ">
            <img className="h-10 mx-2 p-2 " src={Gmail} alt="Gmail" />
            <spam
              className={`${
                darkMode ? "text-cyan-700" : "text-gray-100"
              } my-auto`}
            >
              jacobojacome@gmail.com
            </spam>
          </div>
        </div>
      </div>
      <div className="flex justify-center content-center mx-auto">
        <span
          className={`${
            darkMode ? "text-cyan-700" : "text-gray-100"
          } mx-auto text-bold text-sm mt-6`}
        >
          Toda la Gloria sea para Dios
        </span>
      </div>
    </div>
  );
};

export default Footer;
