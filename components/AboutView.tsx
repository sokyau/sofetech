import React from 'react';
import { ViewName } from '../App';

interface AboutViewProps {
    navigate: (view: ViewName, params?: Record<string, string>) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ navigate }) => {
    return (
        <div className="w-full animate-fade-in pb-24">
            <section className="bg-[#FAFAFA] border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
                    <div className="max-w-4xl">
                        <span className="text-xs font-bold uppercase tracking-widest text-black/40 mb-3 block">Nuestra Identidad</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-black mb-6">
                            Ingeniería y Seguridad<br />
                            <span className="font-serif italic text-gray-500">sin compromisos.</span>
                        </h1>
                    </div>
                </div>
            </section>

             <section className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 md:pt-24">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-6">
                        <p className="text-xl md:text-2xl leading-relaxed font-light text-black mb-8">
                            Sofe Tech nació con una misión clara: elevar el estándar de la integración de seguridad en México, ofreciendo soluciones donde la estética, la funcionalidad y la robustez técnica convergen.
                        </p>
                        <div className="prose prose-neutral prose-lg text-gray-500 font-light leading-relaxed">
                            <p>
                                Fundada en 2015 por un grupo de ingenieros especialistas en telecomunicaciones, nos dimos cuenta de que el mercado estaba saturado de proveedores que movían cajas sin entender la infraestructura crítica detrás de ellas.
                            </p>
                            <p>
                                Nos diferenciamos por ser consultores antes que vendedores. Cada cable que tendemos, cada cámara que configuramos y cada servidor que desplegamos responde a una estrategia de seguridad integral diseñada a la medida de los riesgos y operaciones de nuestros clientes.
                            </p>
                        </div>
                         <div className="flex flex-col sm:flex-row gap-4 pt-12">
                            <button onClick={() => navigate('contact')} className="px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">
                                Trabaja con nosotros
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <div className="aspect-[3/4] bg-gray-100 w-full relative overflow-hidden">
                             <div className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 ease-out" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3gzdsRzvq6-35viaoVLXFltYzTZAD2Ty-DcE1DfjOi3i476YgSvQX_NY6Vj8fgNk5W6HJBJU04nON4azyzPCRXbe9y5JljO3w_H6S4Wk-wxZuERsZoiB4BGnMz39_EUw0n-a7FBtNhH26HZMv2cXQBaPWf6zZBG-8Ak2cNPsNiDADUa_E0Wk9_9bVShHF2mNXL7F6NPQySNY0kLmhAtJ1lmcQIFLgVgdyX9gXlJFGBr7sagD9DXC9MVctvhRq5B6G7OPG8zot_aI")' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white mt-24 py-24">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
                        <div className="space-y-4">
                            <span className="material-symbols-outlined text-4xl text-white/80">verified_user</span>
                            <h3 className="text-xl font-medium">Certificación Total</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-light">
                                Todo nuestro personal técnico cuenta con certificaciones vigentes de fabricantes como Hikvision, Cisco y Panduit.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <span className="material-symbols-outlined text-4xl text-white/80">speed</span>
                            <h3 className="text-xl font-medium">Agilidad Logística</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-light">
                                Almacenes estratégicos en CDMX, Guadalajara y Monterrey para garantizar tiempos de entrega récord en proyectos nacionales.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <span className="material-symbols-outlined text-4xl text-white/80">support_agent</span>
                            <h3 className="text-xl font-medium">Soporte 24/7</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-light">
                                Centro de Operaciones de Red (NOC) dedicado al monitoreo proactivo de la infraestructura de nuestros clientes Enterprise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};