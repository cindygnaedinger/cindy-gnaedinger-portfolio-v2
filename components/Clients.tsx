import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";
import MagicButton from "./ui/MagicButton";
import { MdAdd } from "react-icons/md";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        <span className="text-purple font-bold">Palabras</span> de clientes y
        colegas
      </h1>
      <p className="text-center py-5 md:tracking-wider text-sm md:text-lg max-w-2xl mx-auto">
        Un espacio para que compartas que te pareció mi portfolio hasta ahora
        y/o tu experiencia trabajando conmigo.
      </p>
      <div className="flex flex-col items-center mb-10">
        <MagicButton
          title="Agregar testimonio"
          icon={<MdAdd />}
          position="right"
        />
      </div>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Clients;
