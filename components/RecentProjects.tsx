import React from "react";
import { GlareCardDemo } from "./ui/GlareCardContainer";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Algunos de mis proyectos{" "}
        <span className="text-purple font-bold">favoritos</span>
      </h1>
      <div className="flex flex-nowrap justify-center gap-8 p-4 mt-10">
        <GlareCardDemo />
      </div>
    </div>
  );
};

export default RecentProjects;
