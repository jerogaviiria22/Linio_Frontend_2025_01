"use client";

import React, { useState, useEffect } from 'react';
import LoginComponent from '@/components/molecules/LoginComponent';
import HeaderComponent from '@/components/organisms/HeaderComponent';

const AmazonLogin = () => {
    const [currentView, setCurrentView] = useState('header');
    return (
        <div>
            <HeaderComponent />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-lg shadow-lg relative p-6">
          {/* Botón cerrar */}
          <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
            ✕
          </button>

          {/* Logo como imagen (ajusta la ruta en src) */}
          <div className="mb-4">
            <img
              src="https://images.falabella.com/v3/assets/blt7c5c2f2f888a7cc3/blt9a6cb2faab703fa5/65a68ebb130790558acbf0cb/falabella.com_green_icon.svg" // <--- aquí defines tu ruta de logo
              alt="Logo"
              className="h-8"
            />
          </div>

          {/* Título */}
          <h2 className="text-xl font-semibold mb-4">
            Inicia sesión para comprar
          </h2>

          {/* Formulario */}
          <LoginComponent />

          {/* Registrarse */}
          <p className="text-center text-sm text-gray-600 mt-4">
            ¿Aún no tienes cuenta?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Regístrate
            </a>
          </p>
        </div>
            </div>
        </div>






        //   <div className="min-h-screen flex flex-col items-center justify-center bg-white text-sm">
        //       {/* <HeaderComponent /> */}
        //   {/* Logo */}
        //   <img
        //     src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        //     alt="Amazon logo"
        //     className="h-8 mb-4"
        //   />

        //   {/* Card */}
        //   <div className="w-[350px] border border-gray-300 rounded-md p-6 shadow-sm">
        //     <h1 className="text-xl font-semibold mb-4">Inicia sesión o crea una cuenta</h1>

        //     

        //     <p className="text-xs text-gray-700 mt-4">
        //       Al continuar, aceptas las{' '}
        //       <a href="#" className="text-blue-600 hover:underline">
        //         Condiciones de uso
        //       </a>{' '}
        //       y el{' '}
        //       <a href="#" className="text-blue-600 hover:underline">
        //         Aviso de privacidad
        //       </a>{' '}
        //       de Amazon.
        //     </p>

        //     <div className="mt-4">
        //       <a href="#" className="text-blue-600 text-sm hover:underline">
        //         ¿Necesitas ayuda?
        //       </a>
        //     </div>

        //     <hr className="my-4" />

        //     <div>
        //       <p className="font-semibold mb-1">¿Comprando para el trabajo?</p>
        //       <a href="#" className="text-blue-600 text-sm hover:underline">
        //         Crear una cuenta de empresa gratis
        //       </a>
        //     </div>
        //   </div>

        //   {/* Footer */}
        //   <footer className="mt-8 space-x-6 text-xs text-gray-600">
        //     <a href="#" className="hover:underline">
        //       Condiciones de uso
        //     </a>
        //     <a href="#" className="hover:underline">
        //       Aviso de privacidad
        //     </a>
        //     <a href="#" className="hover:underline">
        //       Ayuda
        //     </a>
        //     <p className="mt-2">&copy; 1996–2025, Amazon.com, Inc. o sus filiales</p>
        //   </footer>
        // </div>
    );
};

export default AmazonLogin;