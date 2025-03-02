"use client";

import React, { useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data/testimonials";
import MagicButton from "./ui/MagicButton";
import { MdAdd } from "react-icons/md";
import { TestimonialForm } from "./ui/TestimonialForm";
import { FirstToCommentCard } from "./ui/FirstToCommentCard"; // Asegúrate de que el nombre del archivo sea correcto
import { Testimonial } from "@/data";

const Clients = () => {
  const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar el formulario
  const [currentTestimonials, setCurrentTestimonials] =
    useState<Testimonial[]>(testimonials); // Estado para los testimonios

  // Función para agregar un nuevo testimonio
  const handleAddTestimonial = (newTestimonial: Testimonial) => {
    setCurrentTestimonials([...currentTestimonials, newTestimonial]);
    setShowForm(false); // Ocultar el formulario después de agregar el testimonio
  };

  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        <span className="text-purple font-bold">Palabras</span> de clientes y
        colegas
      </h1>
      <div className="bg-gradient-to-r from-transparent via-[#7243B4] to-transparent my-8 h-[1px] w-full" />

      <p className="text-center py-5 md:tracking-wider text-sm md:text-lg max-w-2xl mx-auto">
        ¡Tu opinión es bienvenida y me ayuda a crecer!
      </p>

      {/* Botón para agregar testimonio */}
      <div className="flex flex-col items-center mb-10">
        <MagicButton
          title="Agregar testimonio"
          icon={<MdAdd />}
          position="right"
          onClick={() => setShowForm(!showForm)} // Alternar visibilidad del formulario
        />
      </div>

      {/* Mostrar el formulario o la lista de testimonios */}
      {showForm ? (
        <TestimonialForm onSubmit={handleAddTestimonial} />
      ) : (
        <div className="flex flex-col items-center max-lg:mt-10">
          {currentTestimonials.length === 0 ? ( // Si no hay testimonios
            <FirstToCommentCard onClick={() => setShowForm(true)} />
          ) : (
            <InfiniteMovingCards
              items={currentTestimonials}
              direction="right"
              speed="slow"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Clients;
