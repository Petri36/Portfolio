import React, { useContext } from "react";
import BlobBlur from "../BlobBlur/BlobBlur";
import Context from "../../Context/Themes";
import image from "../../../public/job.jpeg";

export default function AbountMe() {
  const { Themes } = useContext(Context);
  return (
    <div className="min-h-[400px] mb-36  relative" id="abountme">
      <div>
        <h2
          className="py-5 sm:text-3xl text-2xl font-bold"
          style={{ color: Themes.text }}
        >
          Acerca de mi
        </h2>
      </div>
      <div className="flex items-center justify-center md:flex-row flex-col">
        <div className="flex-1">
          <p
            className=" text-start font-normal sm:text-lg text-base"
            style={{ color: Themes.description }}
          >
            Soy un desarrollador Fullstack con experiencia en diversas
            tecnologías de frontend y backend. En el frontend, he trabajado con
            HTML y CSS para crear interfaces de usuario atractivas y
            responsivas, así como con React.js, Next.js, Zustand y Redux para
            desarrollar aplicaciones web dinámicas y escalables. En cuanto al
            backend, cuento con experiencia en Node.js, Express y Hapi para la
            creación de servidores robustos y eficientes, y en bases de datos
            como PostgreSQL, Sequelize y MongoDB para almacenar y gestionar
            grandes cantidades de información. Como apasionado por el desarrollo
            de software, estoy siempre en busca de nuevos retos y oportunidades
            para seguir creciendo profesionalmente y aplicando mis habilidades y
            conocimientos en proyectos innovadores y desafiantes. Si estás
            buscando un desarrollador Fullstack capaz de trabajar en equipo y en
            proyectos ambiciosos, no dudes en contactarme. Estoy emocionado por
            explorar nuevas oportunidades y descubrir cómo puedo contribuir al
            desarrollo de aplicaciones web de alta calidad.
          </p>
        </div>
        <div className="flex-1 flex justify-center relative ml-5 md:mt-0 mt-10">
          <div className="sm:w-[320px] sm:h-[320px] h-[250px] w-[250px] rounded-xl bg-white relative overflow-hidden z-[2]">
            <img src={image} className="w-full h-full object-cover" alt="" />
          </div>
          <BlobBlur
            positionStyles={{
              top: "0",
              right: "0",
              height: "600px",
              width: "70%",
              opacity: "1",
            }}
          />
        </div>
      </div>
    </div>
  );
}
