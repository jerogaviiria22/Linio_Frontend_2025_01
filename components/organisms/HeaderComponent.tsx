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
        <div className=" flex items-center h-18 px-4">

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
          <div className="flex items-center w-full max-w-3xl bg-white rounded-full overflow-hidden ml-5">
            <input
              type="text"
              placeholder="Buscar en Linio"
              className="flex-1 px-3 py-2 text-sm text-gray-2000 outline-none border-none"
            />
            <button className="bg-[#495867] w-[46px] h-[46px] flex items-center justify-center rounded-full ">
              <svg xmlns="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt71d9874fe32f0ffa/63b733a51d6eeb10b65d828c/hr-3-search-desktop.svg" className="h-8 w-8 text-white mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
              </svg>
            </button>
          </div>


          {/* Opciones de usuario */}
          <nav className="flex items-center gap-4 text-white text-base font-medium ml-4">
            <div className="flex items-center gap-4 text-white text-base font-semibold">
              {/* Hola, Inicia sesión */}
              <a href="#" className="flex flex-col leading-tight hover:underline">
                <span className="font-bold leading-[16px] text-[19px] text-[color:var(--text-color)] no-underline mt-[5px] font-semibold">Hola,</span>
                <span className="flex items-center mb-2 gap-1 font-bold leading-[16px] font-black text-[19px] text-[color:var(--text-color)] no-underline mt-[5px]">
                  Inicia sesión
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </a>
              {/* Separador */}
              <span className="border-r border-white/50 h-14"></span>
              {/* Mis compras */}
              <a href="#" className="flex flex-col leading-tight hover:underline">
                <span className="font-bold leading-[16px] text-[19px] text-[color:var(--text-color)] no-underline mt-[5px] font-semibold">Mis</span>
                <span className="flex items-center mb-2  font-bold leading-[16px] font-black text-[19px] text-[color:var(--text-color)] no-underline mt-[3px]">
                  compras
                </span>
              </a>
              {/* Separador */}
              <span className="border-r border-white/50 h-14"></span>
               {/* Favoritos */}
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </a>
              {/* Separador */}
              <span className="border-r border-white/50 h-14"></span>
              {/* Carrito con badge */}
              <a href="#" className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.182 1.625.707 1.625H18m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-2 bg-[#3b4552] text-white text-xs font-bold rounded-full w-[18px] h-[18px] flex items-center justify-center">0</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex justify-center w-full bg-white text-gray-800 border-b border-gray-200">
      <div className="w-full max-w-[14100px] px-4 py-3 flex items-center justify-between">
        {/* Sección de "Ingresa tu ubicación" */}
        <div className="flex items-center space-x-2 cursor-pointer text-sm font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
          </svg>
          <span className="text-[#495867]">Ingresa tu ubicación</span>
        </div>
        {/* Sección de "Vende en Falabella" */}
        <div className="hidden lg:flex items-center space-x-4 text-sm font-medium">
          <a href="#" className="hover:text-[#c300a2] transition-colors text-[#495867]">Vende en falabella.com</a>
          {/* <a href="#" className="hover:text-[#c300a2] transition-colors text-[#495867]">Tarjetas y cuentas</a> */}
                    <a href="#" className="flex items-center space-x-1 hover:text-[#c300a2] transition-colors text-[#495867]">
            <span>Tarjetas y cuentas</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="#" className="hover:text-[#c300a2] transition-colors text-[#495867]">Novios</a>
          <a href="#" className="flex items-center space-x-1 hover:text-[#c300a2] transition-colors text-[#495867]">
            <span>Ayuda</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    </header>
  )
}
