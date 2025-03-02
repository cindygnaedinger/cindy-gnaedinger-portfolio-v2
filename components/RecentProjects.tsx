import React from "react";
import { GlareCardDemo } from "./ui/GlareCardContainer";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Algunos de mis proyectos{" "}
        <span className="text-purple font-bold">favoritos</span>
      </h1>
      <p className="text-center py-5 md:tracking-wider mb-4 text-sm md:text-lg max-w-2xl mx-auto">
        Descubrí mis proyectos y encontrá soluciones que se adapten a tus
        necesidades.{" "}
        <span className="text-purple font-bold">
          ¡Tu opinión es bienvenida y me ayuda a crecer!
        </span>
      </p>
      <div className="flex flex-wrap justify-center gap-8 p-4 mt-10">
        <GlareCardDemo />
      </div>
    </div>
  );
};

export default RecentProjects;
