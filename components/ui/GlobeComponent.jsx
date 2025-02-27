// GlobeComponent.tsx
"use client";

import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import ThreeGlobe from "three-globe";
import countries from "@/data/globe.json";

const GlobeComponent = () => {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const { scene } = useThree();

  useEffect(() => {
    // Crear una instancia de ThreeGlobe
    const globe = new ThreeGlobe({
      waitForGlobeReady: true,
      animateIn: true,
    });

    // Configurar el globo
    globe
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .hexPolygonColor(() => "rgba(255, 255, 255, 0.7)");

    // Agregar el globo a la escena
    scene.add(globe);
    globeRef.current = globe;

    // Limpieza al desmontar el componente
    return () => {
      if (globeRef.current) {
        scene.remove(globeRef.current);
      }
    };
  }, [scene]);

  return null; // No necesitamos renderizar nada en el JSX
};

export default GlobeComponent;