
export const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-8 py-4">
        <div>
            LOGO MARCA PERSONAL***
        </div>
        <div className="flex gap-6">
            <a href="">Inicio</a>
            <a href="">Sobre mí</a>
            <a href="">Proyectos</a>
            <a href="">Blog</a>
            <a href="">Contacto</a>
        </div>
        <div>
            <button>Descargar CV</button>
        </div>

    </nav>
  )
}
