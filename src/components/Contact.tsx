const Contact = () => {
  return (
    <footer className="mt-12">
      <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40 p-8">
        <h2 className="text-xl font-semibold text-zinc-100">Contacto</h2>

        <div className="mt-5 grid gap-3 text-zinc-300 md:grid-cols-3">
          <div className="rounded-2xl bg-zinc-900/40 p-4 ring-1 ring-zinc-800">
            <p className="text-xs tracking-[0.3em] text-zinc-500">EMAIL</p>
            <p className="mt-2">raymundo240204@gmail.com</p>
          </div>

          <div className="rounded-2xl bg-zinc-900/40 p-4 ring-1 ring-zinc-800">
            <p className="text-xs tracking-[0.3em] text-zinc-500">GITHUB</p>
            <p className="mt-2">github.com/raymundo240204</p>
          </div>

          <div className="rounded-2xl bg-zinc-900/40 p-4 ring-1 ring-zinc-800">
            <p className="text-xs tracking-[0.3em] text-zinc-500">LINKEDIN</p>
            <p className="mt-2">linkedin.com/in/rayoo123</p>
          </div>
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} · Hecho con React + Tailwind
        </p>
      </div>
    </footer>
  )
}

export default Contact