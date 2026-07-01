import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <HeroVideo />

      {/* Overlay escura */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full items-center justify-center">
      </div>
    </section>
  );
}