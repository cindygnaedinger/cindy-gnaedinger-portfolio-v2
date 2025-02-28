"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { GrFormDown, GrFormLocation } from "react-icons/gr";

const Hero = () => {
  return (
    <div className="pb-20 pt-32">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="purple"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="purple" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Modelando Interfaces Atractivas
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-5xl"
            words="Transformando código y diseño en experiencias de usuario únicas"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hola, soy <span className="text-purple font-bold">Cindy</span>,
            desarrolladora y diseñadora web
          </p>
          <div className="flex items-center gap-2 text-center md:tracking-wider mb-4 text-xs md:text-lg lg:text-[16px]">
            <GrFormLocation size="32px" color="#cbacf9" />
            <p>Córdoba, Argentina</p>
          </div>

          <a href="#about" className="mt-4 sm:mt-2">
            <MagicButton
              title="Mi tablero de trabajo"
              icon={<GrFormDown />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
