'use client'
import { useEffect, useRef, useState } from 'react';

const products = [
    {
        image: 'https://media.falabella.com/falabellaCO/119528256_01/w=276,h=276',
        brand: 'ADATA',
        name: 'Disco duro adata externo hd330 1 tb antigolpes azul usb 3.1',
        originalPrice: '$351.900',
        discountedPrice: '$404.700',
        rating: 4.5,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/118426155_01/w=276,h=276',
        brand: 'ONE PIXEL',
        name: 'Tablet para Niños Krono Kids 2GB Ram 16 GB Azul',
        originalPrice: '$269.900',
        discountedPrice: '$299.900',
        rating: 5,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/119682039_01/w=276,h=276',
        brand: 'CREATIVE LABS',
        name: 'Camara Web Creative LIVE CAM SYNC 1080P V2 Webcam USB',
        originalPrice: '$149.900',
        discountedPrice: '$250.000',
        discount: '-40%',
        rating: 4.2,
    },
    {
        image: 'https://media.falabella.com/falabellaCO/119470212_01/w=276,h=276',
        brand: 'B BRAX&STERN',
        name: 'Radio Carro Android WIFI GPS Bluetooth Pantalla 7" 2 Din Brax&Stern',
        originalPrice: '$249.900',
        discountedPrice: '$399.000',
        discount: '-37%',
        rating: 4.7,
    },
];

const DiscountsTeconology = () => {
    return (
        <div className="w-full max-w-[1200px] mx-auto mt-10 p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">¡Descuentos en Tecnología!</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col items-start bg-white rounded-lg overflow-hidden border border-gray-200">
                        <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
                        <div className="p-3 w-full">
                            <p className="text-xs text-gray-500 font-medium">{product.brand}</p>
                            <p className="text-sm font-semibold text-gray-800 line-clamp-2 mt-1">{product.name}</p>

                            <div className="flex items-center mt-2">
                                <span className="text-xl text-gray-500">{product.discountedPrice}</span>
                                <span className="ml-2 text-xs font-semibold text-white bg-red-600 px-1 rounded-sm">{product.discount}</span>
                            </div>

                            <p className="text-xs text-gray-500 line-through mt-1">{product.originalPrice}</p>

                            <div className="flex items-center mt-2 text-yellow-400">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.961a1 1 0 00.95.69h4.161c.969 0 1.371 1.24.588 1.81l-3.37 2.45c-.412.3-.59.84-.44 1.31l1.287 3.96a1 1 0 01-1.545 1.12L10 14.2l-3.371 2.45a1 1 0 01-1.545-1.12l1.287-3.96c.15-.47-.028-1.01-.44-1.31L2.87 9.388c-.783-.57-.38-1.81.588-1.81h4.161a1 1 0 00.95-.69L9.049 2.927z" />
                                    </svg>
                                ))}
                                <span className="ml-1 text-xs text-gray-500">{product.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscountsTeconology;