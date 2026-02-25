const About = () => {
  return (
    <section className="mt-10">
      <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40 p-8">
        <h2 className="text-xl font-semibold text-zinc-100">
          Sobre mí
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-300">
          Soy estudiante del Instituto Tecnológico de Morelia. Me gusta construir
          interfaces claras, sistemas útiles y proyectos con enfoque real.
          Disfruto el trabajo en equipo, pero también el detalle: pulir, mejorar,
          iterar… hasta que “se sienta bien”.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-lg bg-zinc-900/60 px-3 py-2 text-sm text-zinc-300 ring-1 ring-zinc-800">
             Tiripetio Michoacán, México
          </span>
          <span className="rounded-lg bg-zinc-900/60 px-3 py-2 text-sm text-zinc-300 ring-1 ring-zinc-800">
            Enfoque: Frontend
          </span>
          <span className="rounded-lg bg-zinc-900/60 px-3 py-2 text-sm text-zinc-300 ring-1 ring-zinc-800">
            Me gusta: diseño limpio
          </span>
        </div>
      </div>
    </section>
  )
}

export default About