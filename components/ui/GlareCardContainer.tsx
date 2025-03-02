import { GlareCard } from "../ui/GlareCard";

export function GlareCardDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-8 w-full">
      <a href="" className="w-full sm:w-[400px] md:w-[400px] lg:w-[400px]">
        <GlareCard className="flex flex-col items-center justify-center h-96">
          <p className="font-bold text-purple text-lg lg:text-2xl">
            Diseño UX/UI
          </p>
        </GlareCard>
      </a>

      <a href="" className="w-full sm:w-[400px] md:w-[400px] lg:w-[400px]">
        <GlareCard className="flex flex-col items-center justify-center h-96">
          <p className="font-bold text-purple text-lg lg:text-2xl">
            Desarrollo Web
          </p>
        </GlareCard>
      </a>
    </div>
  );
}
