import React from 'react';

//Typewriter
import Typewriter from 'typewriter-effect';

const Description = () => {

  return (
    <Typewriter
        options={{
            strings: ['Desarrollador FrontEnd',
                 'Desarrollador MERN Stack',
                 "Desarrollador Full Stack",
                 "Profesional",
                 "Responsable",
                 "Emprendedor"],
            autoStart: true,
            loop: true,
            pauseFor: 2000,
            delay:70,
            deleteSpeed:70
    }}
/>
  );
};

export default Description;
