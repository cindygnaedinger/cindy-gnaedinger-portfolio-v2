import React from "react";
import { GlareCardDemo } from "./ui/GlareCardContainer";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Algunos de mis proyectos{" "}
        <span className="text-purple font-bold">favoritos</span>
      </h1>
      <div className="bg-gradient-to-r from-transparent via-[#7243B4] to-transparent my-8 h-[1px] w-full" />

      <p className="text-center py-5 md:tracking-wider mb-4 text-sm md:text-lg max-w-2xl mx-auto">
        Explorá mi trabajo y encontrá soluciones que se adapten a tus
        necesidades
      </p>
      <div className="flex flex-wrap justify-center gap-8 p-4 mt-10">
        <GlareCardDemo />
      </div>
    </div>
  );
};

export default RecentProjects;
