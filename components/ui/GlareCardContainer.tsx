import { GlareCard } from "../ui/GlareCard";

export function GlareCardDemo() {
  return (
    <div className="flex gap-10">
      <a href="">
        <GlareCard className="flex flex-col items-center justify-center">
          <p className="font-bold text-purple text-lg lg:text-2xl">
            Desarrollo Web
          </p>
        </GlareCard>
      </a>

      <a href="">
        <GlareCard className="flex flex-col items-center justify-center py-8 px-6">
          <p className="font-bold text-purple text-lg lg:text-2xl">
            Diseño UX/UI
          </p>
        </GlareCard>
      </a>
    </div>
  );
}
