const projects = [
  {
    name: "Sprouty",
    desc: "Sistema IoT para monitorear plantas (humedad, temperatura, luz, etc.). Enfoque en dashboard y datos.",
    tags: ["IoT", "ESP32", "React", "Django"],
  },
  {
    name: "AgroGestor",
    desc: "Gestión de dietas, lotes e inventario para ganado. Paneles claros y reportes útiles.",
    tags: ["React", "TypeScript", "Django", "Inventario"],
  },
]

const Projects = () => {
  return (
    <section className="mt-10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold text-zinc-100">Proyectos</h2>
        <p className="text-sm text-zinc-500">
          Selección breve (puedes agregar más)
        </p>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.name}
            className="group rounded-3xl border border-zinc-800/70 bg-zinc-950/40 p-6 transition hover:border-zinc-700"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <span className="text-xs text-zinc-500">2026</span>
            </div>

            <p className="mt-3 leading-relaxed text-zinc-300">
              {p.desc}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-900/60 px-3 py-1 text-xs text-zinc-200 ring-1 ring-zinc-800"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            <p className="mt-4 text-sm text-zinc-500">
              Tip: luego te agrego botones de “Demo” y “Repo”.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects