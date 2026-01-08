import React, { useState } from 'react';
import { ViewName } from '../App';

interface HeaderProps {
    navigate: (view: ViewName, params?: Record<string, string>) => void;
}

export const Header: React.FC<HeaderProps> = ({ navigate }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (searchTerm.trim()) {
                navigate('catalog', { search: searchTerm.trim() });
            }
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-black transition-all duration-300">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between relative">
                
                {/* Left: Navigation (Desktop) & Menu (Mobile) */}
                <div className="flex items-center flex-1">
                    <button className="lg:hidden flex items-center justify-center size-10 hover:bg-gray-100 rounded-full transition-colors text-black mr-4">
                        <span className="material-symbols-outlined font-light">menu</span>
                    </button>
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        <button onClick={() => navigate('home')} className="text-xs font-bold uppercase tracking-widest hover-underline-animation">Inicio</button>
                        <button onClick={() => navigate('catalog')} className="text-xs font-bold uppercase tracking-widest hover-underline-animation">Catálogo</button>
                        <button onClick={() => navigate('services')} className="text-xs font-bold uppercase tracking-widest hover-underline-animation">Soluciones</button>
                        <button onClick={() => navigate('blog')} className="text-xs font-bold uppercase tracking-widest hover-underline-animation">Blog</button>
                        <button onClick={() => navigate('about')} className="text-xs font-bold uppercase tracking-widest hover-underline-animation">Nosotros</button>
                        <button onClick={() => navigate('contact')} className="text-xs font-bold uppercase tracking-widest hover-underline-animation">Contacto</button>
                    </nav>
                </div>

                {/* Center: Logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <button onClick={() => navigate('home')} className="flex items-center justify-center group">
                         <div className="flex items-baseline tracking-tighter leading-none select-none">
                            <div className="relative">
                                <span className="text-4xl font-bold text-black uppercase">SOFE</span>
                                {/* Stylized cut on the 'E' */}
                                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-white/95 rotate-45 translate-x-1 -translate-y-1 pointer-events-none"></span>
                            </div>
                            <span className="text-4xl font-normal text-black ml-2">Tech</span>
                        </div>
                    </button>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-1 justify-end items-center gap-4">
                    <div className="hidden md:flex items-center border-b border-gray-300 hover:border-black transition-colors w-48 pb-1 mr-2">
                        <span className="material-symbols-outlined text-gray-400 text-[18px] mr-2">search</span>
                        <input 
                            className="w-full bg-transparent border-none p-0 text-xs focus:ring-0 placeholder:text-gray-400" 
                            placeholder="Buscar..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleSearch}
                        />
                    </div>
                    <button onClick={() => navigate('cart')} aria-label="Carrito" className="relative flex items-center justify-center size-9 hover:bg-gray-100 rounded-full transition-colors text-black">
                        <span className="material-symbols-outlined font-light text-[20px]">shopping_bag</span>
                         <span className="absolute top-2 right-2 size-1 bg-black rounded-full"></span>
                    </button>
                    <button onClick={() => navigate('account')} aria-label="Cuenta" className="flex items-center justify-center size-9 hover:bg-gray-100 rounded-full transition-colors text-black">
                        <span className="material-symbols-outlined font-light text-[20px]">account_circle</span>
                    </button>
                </div>
            </div>
        </header>
    );
};