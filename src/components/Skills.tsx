const skills = [
  { title: "Frontend", items: ["React", "TypeScript", "Tailwind", "Vite"] },
  { title: "Backend", items: ["Django", "PostgreSQL", "API REST"] },
  { title: "IoT", items: ["ESP32", "Sensores", "Red local / nube"] },
  { title: "Herramientas", items: ["Git/GitHub", "Vercel", "Figma (básico)"] },
]

const Skills = () => {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-xl font-semibold text-zinc-100">
        Habilidades
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((block) => (
          <div
            key={block.title}
            className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40 p-6"
          >
            <p className="text-sm tracking-wide text-zinc-400">
              {block.title.toUpperCase()}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {block.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full bg-zinc-900/60 px-3 py-1 text-sm text-zinc-200 ring-1 ring-zinc-800"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills