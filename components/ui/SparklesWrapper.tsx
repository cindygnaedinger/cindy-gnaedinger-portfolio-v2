"use client";

import { SparklesCore } from "./Sparkles";

interface SparklesWrapperProps {
  id: number;
}

interface SparklesConfig {
  minSize: number;
  maxSize: number;
  particleDensity: number;
}

type SparklesConfigMap = {
  [key: number]: SparklesConfig;
};

export const SparklesWrapper = ({ id }: SparklesWrapperProps) => {
  const sparklesConfig: SparklesConfigMap = {
    1: { minSize: 0.8, maxSize: 1.5, particleDensity: 250 },
    2: { minSize: 0.4, maxSize: 1, particleDensity: 10 },
    3: { minSize: 0.8, maxSize: 1.8, particleDensity: 15 },
    4: { minSize: 0.4, maxSize: 1.5, particleDensity: 10 },
    5: { minSize: 0.2, maxSize: 1, particleDensity: 20 },
    6: { minSize: 0.4, maxSize: 1, particleDensity: 30 },
  };

  const config = sparklesConfig[id] || {
    minSize: 0.4,
    maxSize: 1,
    particleDensity: 20,
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <SparklesCore
        background="transparent"
        minSize={config.minSize}
        maxSize={config.maxSize}
        particleDensity={config.particleDensity}
        className="w-full h-full"
        particleColor="#7243B4"
      />
    </div>
  );
};
