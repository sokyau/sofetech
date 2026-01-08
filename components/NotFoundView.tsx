import React from 'react';
import { ViewName } from '../App';

interface NotFoundViewProps {
    navigate: (view: ViewName, params?: Record<string, string>) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ navigate }) => {
    return (
        <div className="w-full flex-grow flex flex-col items-center justify-center min-h-[70vh] px-6 animate-fade-in text-center">
            <h1 className="text-[120px] md:text-[180px] font-bold leading-none tracking-tighter text-black/5 select-none">
                404
            </h1>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black -mt-8 mb-6 relative z-10">
                Página no encontrada
            </h2>
            <p className="text-lg text-text-muted font-light max-w-md leading-relaxed mb-12 relative z-10">
                Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <button onClick={() => navigate('home')} className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all relative z-10">
                Regresar al inicio
            </button>
        </div>
    );
};