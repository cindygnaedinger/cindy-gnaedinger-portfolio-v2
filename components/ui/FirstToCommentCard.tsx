"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface FirstToCommentCardProps {
  onClick?: () => void; // Define la prop onClick
}

export function FirstToCommentCard({ onClick }: FirstToCommentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative flex flex-col items-center justify-center w-full h-64 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 text-white overflow-hidden shadow-lg",
        onClick && "cursor-pointer hover:opacity-90 transition-opacity" // Agrega estilos si hay onClick
      )}
      onClick={onClick} // Pasa la función onClick al motion.div
    >
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">¡Sé el primero en comentar!</h2>
        <p className="text-sm text-white/80">
          Tu opinión es importante para mí. Compartí tu experiencia y ayuda a
          otros a conocerme mejor.
        </p>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute -bottom-12 -right-12 w-32 h-32 bg-white/5 rounded-full"
      />
    </motion.div>
  );
}
