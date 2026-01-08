import React from 'react';
import { ViewName } from '../App';

interface QuoteSuccessViewProps {
    navigate: (view: ViewName, params?: Record<string, string>) => void;
}

export const QuoteSuccessView: React.FC<QuoteSuccessViewProps> = ({ navigate }) => {
    return (
        <div className="w-full flex-grow flex flex-col items-center justify-center min-h-[70vh] px-6 animate-fade-in text-center">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 animate-bounce-short">
                <span className="material-symbols-outlined text-5xl text-green-600">check</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-6">
                Cotización Recibida
            </h1>
            <p className="text-lg text-text-muted font-light max-w-md leading-relaxed mb-4">
                Hemos recibido tu solicitud correctamente. Tu ID de referencia es <span className="font-mono font-medium text-black">#REQ-2024-999</span>.
            </p>
            <p className="text-sm text-gray-400 font-light max-w-md leading-relaxed mb-12">
                En breve recibirás un correo electrónico con el PDF formal de tu cotización y los datos bancarios para proceder con tu compra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate('catalog')} className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">
                    Seguir explorando
                </button>
                <button onClick={() => navigate('home')} className="px-8 py-3 bg-transparent border border-black text-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    Volver al inicio
                </button>
            </div>
        </div>
    );
};