"use client";
import React, { useState } from "react";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { cn } from "@/utils/cn";
import { Testimonial } from "@/data"; // Importa la interfaz Testimonial

interface TestimonialFormProps {
  onSubmit: (testimonial: Testimonial) => void; // Prop para manejar el envío del formulario
}

export function TestimonialForm({ onSubmit }: TestimonialFormProps) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [comment, setComment] = useState("");
  const [profilePic, setProfilePic] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Crear un nuevo testimonio
    const newTestimonial: Testimonial = {
      id: Date.now(), // ID temporal
      name: `${name} ${lastName}`,
      comment,
      title: jobTitle,
      // Puedes agregar más campos si es necesario
    };

    // Llamar a la función onSubmit con el nuevo testimonio
    onSubmit(newTestimonial);
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-white dark:bg-[#130B1E] shadow-lg shadow-white/10">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Tu opinión importa
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        ¿Qué te ha parecido mi trabajo o la experiencia de trabajar conmigo?
      </p>
      <div className="bg-gradient-to-r from-transparent via-[#7243B4] to-transparent my-8 h-[1px] w-full" />

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Nombre</Label>
            <Input
              id="firstname"
              placeholder="Joana"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Apellido</Label>
            <Input
              id="lastname"
              placeholder="Pérez"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="jobtitle">Puesto actual</Label>
          <Input
            id="jobtitle"
            placeholder="Desarrolladora Frontend"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="comment">Comentario</Label>
          <textarea
            id="comment"
            placeholder="Escribe aquí tu testimonio..."
            className={cn(
              "flex h-20 w-full border-none bg-[#3B2F41] text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
            )}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="profilepic">Foto de perfil</Label>
          <Input
            id="profilepic"
            type="file"
            accept="image/*"
            onChange={(e) => setProfilePic(e.target.files?.[0] || null)}
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br bg-[#362141] relative group/btn w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Enviar testimonio &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#7243B4] to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#7243B4] to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
