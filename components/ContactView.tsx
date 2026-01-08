import React from 'react';
import { ViewName } from '../App';

interface ContactViewProps {
    navigate: (view: ViewName, params?: Record<string, string>) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ navigate }) => {
    return (
        <div className="w-full animate-fade-in pb-24">
             <section className="bg-[#FAFAFA] border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
                    <div className="max-w-4xl">
                        <span className="text-xs font-bold uppercase tracking-widest text-black/40 mb-3 block">Soporte y Ventas</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-black mb-4">
                            Contacto
                        </h1>
                        <p className="text-lg text-text-muted font-light max-w-2xl leading-relaxed">
                            Estamos listos para asesorarte en tu próximo proyecto de infraestructura. Escríbenos y un ingeniero certificado te responderá en breve.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <div className="bg-black text-white p-8 md:p-12 mb-12">
                            <h3 className="text-2xl font-serif italic mb-8">Información Directa</h3>
                            <div className="space-y-8">
                                <div>
                                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Oficinas Centrales</span>
                                    <p className="text-sm font-light leading-relaxed text-gray-200">
                                        Av. Insurgentes Sur 1234, Piso 8<br />
                                        Col. Del Valle, Benito Juárez<br />
                                        Ciudad de México, CDMX 03100
                                    </p>
                                </div>
                                <div>
                                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Teléfono / WhatsApp</span>
                                    <p className="text-sm font-light leading-relaxed text-gray-200">
                                        +52 (55) 1234 5678
                                    </p>
                                </div>
                                <div>
                                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Correo Electrónico</span>
                                    <p className="text-sm font-light leading-relaxed text-gray-200">
                                        proyectos@sofetech.com.mx
                                    </p>
                                </div>
                                <div>
                                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Horario de Atención</span>
                                    <p className="text-sm font-light leading-relaxed text-gray-200">
                                        Lunes a Viernes: 9:00 AM – 6:00 PM<br />
                                        Sábados: 9:00 AM – 1:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-7 order-1 lg:order-2">
                         <h2 className="text-2xl font-medium tracking-tight text-black mb-8">Envíanos un mensaje</h2>
                         <form className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black" htmlFor="nombre">Nombre Completo <span className="text-red-600">*</span></label>
                                    <input className="w-full border-gray-300 focus:border-black focus:ring-0 text-sm py-3 px-4 placeholder:text-gray-300 transition-colors" id="nombre" type="text" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black" htmlFor="email">Correo Electrónico <span className="text-red-600">*</span></label>
                                    <input className="w-full border-gray-300 focus:border-black focus:ring-0 text-sm py-3 px-4 placeholder:text-gray-300 transition-colors" id="email" type="email" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black" htmlFor="asunto">Asunto</label>
                                <select className="w-full border-gray-300 focus:border-black focus:ring-0 text-sm py-3 px-4 bg-white transition-colors cursor-pointer" id="asunto">
                                    <option>Cotización de Proyecto</option>
                                    <option>Soporte Técnico</option>
                                    <option>Bolsa de Trabajo</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                             <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black" htmlFor="mensaje">Mensaje <span className="text-red-600">*</span></label>
                                <textarea className="w-full border-gray-300 focus:border-black focus:ring-0 text-sm py-3 px-4 placeholder:text-gray-300 transition-colors h-40 resize-none" id="mensaje" required></textarea>
                            </div>
                            <div className="pt-4">
                                <button type="submit" className="px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    Enviar Mensaje
                                </button>
                            </div>
                         </form>
                    </div>
                </div>
            </div>
            
            <div className="w-full h-[400px] bg-gray-200 mt-24 relative grayscale">
                 {/* Placeholder for Map - In a real app, integrate Google Maps or similar */}
                 <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                        <span className="material-symbols-outlined text-4xl text-gray-400 mb-2">map</span>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Mapa de Ubicación</p>
                    </div>
                 </div>
            </div>
        </div>
    );
};