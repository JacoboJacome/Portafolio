import React from "react";

//Assets
import HTML5 from "../../Assets/html-1.svg";
import CSS3 from "../../Assets/css-3.svg";
import JS from "../../Assets/logo-javascript.svg";
import REACTJS from "../../Assets/react-2.svg";
import REDUX from "../../Assets/redux.svg";
import TAILWIND from "../../Assets/tailwindcss.svg";
import BOOTSTRAP from "../../Assets/bootstrap-5-1.svg";
import SASS from "../../Assets/sass-1.svg";
import PostgreSQL from "../../Assets/postgresql.svg";
import NodeJs from "../../Assets/nodejs.svg";
import Python from "../../Assets/python-5.svg"
import Django from "../../Assets/django-community.svg"

const Skills = (props) => {
  const { darkMode } = props;

  return (
    <div
      className={`${
        darkMode ? "bg-cyan-700" : "bg-dark_1"
      } w-full box-border font-text py-6`}
    >
      <div className="flex w-full">
        <h3
          className={`${
            darkMode ? "text-color_4" : "text-dark_4"
          } font-bold mx-auto text-3xl sm:text-4xl`}
        >
          Tecnologías
        </h3>
      </div>
      <div className="flex flex-wrap w-full justify-center content-center mx-auto py-5">
        <div className="w-1/5 m-4 flex flex-col md:w-1/12 bg-color_4/20 rounded-lg shadow-xl shadow-color_4/20 hover:bg-color_4/40 hover:-translate-y-2 hover:scale-110 transition ease-in-out delay-150 text-white/0 hover:text-white hover:text-xl">
          <img src={HTML5} alt="Html 5" className="my-auto p-2" />
          <span className="mx-auto font-bold">HTML 5</span>
        </div>
        <div className="w-1/5 m-4 flex flex-col md:w-1/12 bg-color_4/20 rounded-lg shadow-xl shadow-color_4/20 hover:bg-color_4/40 hover:-translate-y-2 hover:scale-110 transition ease-in-out delay-150 text-white/0 hover:text-white hover:text-xl ">
          <img src={CSS3} alt="CSS 3" className="my-auto p-2" />
          <span className="mx-auto font-bold">CSS 3</span>
        </div>
        <div className="w-1/5 m-4 flex flex-col  md:w-1/12 bg-color_4/20 rounded-lg shadow-xl shadow-color_4/20 hover:bg-color_4/40 hover:-translate-y-2 hover:scale-150 md:hover:scale-110 transition ease-in-out delay-150 text-white/0 hover:text-white ">
          <img src={JS} alt="JavaScript" className="my-auto p-2" />
          <span className="mx-auto font-bold ">JavaScript</span>
        </div>
        <div className="w-1/5 m-4 flex flex-col  md:w-1/12 bg-color_4/20 rounded-lg shadow-xl shadow-color_4/20 hover:bg-color_4/40 hover:-translate-y-2 hover:scale-150 md:hover:scale-110 transition ease-in-out delay-150 text-white/0 hover:text-white  ">
          <img src={REACTJS} alt="React JS" className="my-auto p-2" />
          <span className="mx-auto font-bold">React JS</span>
        </div>
        <div className="w-1/5 m-4 flex flex-col  md:w-1/12 bg-color_4/20 rounded-lg shadow-xl shadow-color_4/20 hover:bg-color_4/40 hover:-translate-y-2 hover:scale-110 transition ease-in-out delay-150 text-white/0 hover:text-white  ">
          <img src={NodeJs} alt="React JS" className="my-auto p-2" />
          <span className="mx-auto font-bold">Node Js</span>
        </div>
        <div className="w-1/5 m-4  flex flex-col md:w-1/12 bg-color_4/20 rounded-lg shadow-xl shadow-color_4/20 hover:bg-color_4/40 hover:-translate-y-2 hover:scale-110 transition ease-in-out delay-150 text-white/0 hover:text-white hover:text-xl ">
          <img src={REDUX} alt="Redux" className="my-auto p-2" />
          <span className="mx-auto font-bold">Redux</span>
        </div>
        <div className="w-1/5 m-4 flex flex-col  md:w-1/12 bg-color_4/20 rounded-lg shadow-xl shadow-color_4/20 hover:bg-color_4/40 hover:-translate-y-2 hover:scale-110 transition ease-in-out delay-150 text-white/0 hover:text-white hover:text-xl ">
          <img src={Python} alt="Sass CSS" className="my-auto p-2" />
          <span className="mx-auto font-bold">Python</span>
        </div>
        <div className="w-1/5 m-4 flex flex-col  md:w-1/12 bg-color_4/20 rounded-lg shadow-xl shadow-color_4/20 hover:bg-color_4/40 hover:-translate-y-2 hover:scale-110 transition ease-in-out delay-150 text-white/0 hover:text-white hover:text-xl ">
          <img src={Django} alt="Sass CSS" className="my-auto p-2" />
          <span className="mx-auto font-bold">Django</span>
        </div>
        <div className="w-1/5 m-4 flex flex-col  md:w-1/12 bg-color_4/20 rounded-lg shadow-xl shadow-color_4/20 hover:bg-color_4/40 hover:-translate-y-2 hover:scale-150 md:hover:scale-110 transition ease-in-out delay-150 text-white/0 hover:text-white  ">
          <img src={PostgreSQL} alt="React JS" className="my-auto p-2" />
          <span className="mx-auto font-bold">PostgreSQL</span>
        </div>
        <div className="w-1/5 m-4 flex flex-col md:w-1/12 bg-color_4/20 rounded-lg shadow-xl shadow-color_4/20 hover:bg-color_4/40 hover:-translate-y-2 hover:scale-110 transition ease-in-out delay-150 text-white/0 hover:text-white hover:text-xl ">
          <img src={TAILWIND} alt="Tailwind CSS" className="my-auto p-2" />
          <span className="mx-auto font-bold">Tailwind</span>
        </div>
        <div className="w-1/5 m-4 flex flex-col md:w-1/12 bg-color_4/20 rounded-lg shadow-xl shadow-color_4/20 hover:bg-color_4/40 hover:-translate-y-2 hover:scale-150 md:hover:scale-110 transition ease-in-out delay-150 text-white/0 hover:text-white">
          <img src={BOOTSTRAP} alt="Bootstrap" className="my-auto p-2" />
          <span className="mx-auto font-bold">Bootstrap</span>
        </div>
        <div className="w-1/5 m-4 flex flex-col  md:w-1/12 bg-color_4/20 rounded-lg shadow-xl shadow-color_4/20 hover:bg-color_4/40 hover:-translate-y-2 hover:scale-110 transition ease-in-out delay-150 text-white/0 hover:text-white hover:text-xl ">
          <img src={SASS} alt="Sass CSS" className="my-auto p-2" />
          <span className="mx-auto font-bold">Sass</span>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
