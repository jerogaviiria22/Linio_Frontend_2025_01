export default function HeaderComponent() {
  return (

    <header className="w-full">
      {/* Barra superior blanca */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="max-w-[1200px] flex items-center gap-8 h-8 px-4">
          <img
            src="https://images.falabella.com/v3/assets/blt7c5c2f2f888a7cc3/blt422ee1291fbab2a2/marketplace-disabled.svg"
            alt="Falabella"
            className="h-3.5"
          />
          <img
            src="https://images.falabella.com/v3/assets/blt7c5c2f2f888a7cc3/blt55f993da75fa018d/homecenter-disabled.svg"
            alt="Homecenter"
            className="h-2.5"
          />
          <img
            src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blta5a44443cc0e501c/63b6ff659233961262fbd64c/logo-linio.svg"
            alt="Linio"
            className="h-8"
          />
        </div>
      </div>

      <div className="w-full bg-[#C300A2]">
        <div className="max-w-[1200px]  flex items-center h-16 px-4">

          {/* Logo */}
          <div className="mr-15">
            <img
              src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltf580cd4c16460848/64feccbe1d03ade334df3b16/linio.svg"
              alt="Linio"
              className="h-10"
            />
          </div>

          {/* Categorías */}
          <button className="flex items-center gap-2 px-4 py-1.5 border border-white text-white font-semibold rounded-full bg-[#C300A2] hover:bg-[#a00085] transition">
            Categorías
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>


          {/* Barra de búsqueda */}
          <div className="flex items-center w-full max-w-lg bg-white rounded-full overflow-hidden ml-5">
            <input
              type="text"
              placeholder="Buscar en Linio"
              className="flex-1 px-4 py-3.5 text-sm text-gray-2000 outline-none border-none"
            />
            <button className="bg-[#3b4552] w-9 h-9 flex items-center justify-center rounded-full mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
              </svg>
            </button>
          </div>


          {/* Opciones de usuario */}
          <nav className="flex items-center gap-4 text-white text-sm font-medium ml-4">
            <a href="#" className="hover:underline">Hola, Inicia sesión</a>
            <a href="#" className="hover:underline">Mis compras</a>
            <span className="border-r border-white h-5"></span>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </a>
            <a href="#" className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h12l2-9M10 21a2 2 0 104 0" />
              </svg>
              <span className="absolute -top-1 -right-2 bg-white text-[#C300A2] text-xs font-bold rounded-full px-1">0</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
