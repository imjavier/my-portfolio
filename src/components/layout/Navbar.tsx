
export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#020d1c]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        <h1 className="text-xl font-extralight tracking-wide text-white">
          imjavv
        </h1>

        {/* Menú desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <a className="text-sm font-medium text-white transition-colors hover:text-[#ca893e]" href="#inicio">
            Inicio
          </a>
          <a className="text-sm font-medium text-white transition-colors hover:text-[#ca893e]" href="#sobre-mi">
            Sobre mí
          </a>
          <a className="text-sm font-medium text-white transition-colors hover:text-[#ca893e]" href="#experiencia">
            Experiencia
          </a>
          <a className="text-sm font-medium text-white transition-colors hover:text-[#ca893e]" href="#blog">
            Blog
          </a>
          <a className="text-sm font-medium text-white transition-colors hover:text-[#ca893e]" href="#contacto">
            Contacto
          </a>
        </div>

        {/* Botón desktop */}
        <button className="hidden rounded-lg bg-[#B5742A] px-5 py-2.5 font-semibold text-white transition-all hover:scale-105 hover:bg-[#A86625] md:block">
          Descargar CV
        </button>

        {/* Botón móvil */}
        <button className="block text-2xl text-white md:hidden">
          ☰
        </button>
      </nav>
    </header>
  );
};