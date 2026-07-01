import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <main className="bg-white">
        <section className="mx-auto flex h-[200vh] max-w-7xl items-center justify-center">
          <h2 className="text-5xl font-bold">
            Conteúdo Temporário
          </h2>
        </section>
      </main>
    </>
  );
}