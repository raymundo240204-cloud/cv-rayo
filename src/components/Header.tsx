const Header = () => {
  return (
    <header className="pt-16 pb-10">
      <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/60 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.35em] text-zinc-400">
              PORTAFOLIO / CV
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              Raymundo Carrillo
            </h1>

            <p className="mt-3 max-w-xl text-zinc-300/90">
              Estudiante de Ingeniería en Sistemas · Desarrollo Web
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              “Construyo cosas silenciosas, pero que funcionan.”
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            <span className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-300">
              React
            </span>
            <span className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-300">
              TypeScript
            </span>
            <span className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-300">
              Tailwind
            </span>
            <span className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-300">
              Django
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header