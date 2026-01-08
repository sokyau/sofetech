import React from 'react';
import { ViewName } from '../App';

interface ServicesViewProps {
    navigate: (view: ViewName, params?: Record<string, string>) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ navigate }) => {
    return (
        <div className="w-full animate-fade-in">
             <section className="mx-auto w-full max-w-[800px] px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <span className="h-[1px] w-8 bg-gray-400"></span>
                        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Sofe Tech / Servicios</span>
                    </div>
                    <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-black sm:text-5xl md:text-6xl">
                        Soluciones Integrales de Seguridad
                    </h1>
                    <p className="text-xl font-normal leading-relaxed text-text-muted max-w-2xl">
                        Infraestructura de red y vigilancia de alto rendimiento diseñada para entornos empresariales críticos y exigentes.
                    </p>
                </div>
                <div className="mt-12 h-px w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
            </section>
            
            <article className="mx-auto w-full max-w-[720px] px-6 pb-20">
                <div className="prose prose-neutral prose-lg max-w-none text-text-muted">
                    <p className="mb-8 leading-8">
                        En <span className="font-bold text-black">Sofe Tech</span>, entendemos que la seguridad no es un producto, sino un proceso continuo. Nos especializamos en arquitectura de redes robustas y sistemas de videovigilancia escalables que garantizan la continuidad operativa de su negocio. Nuestra aproximación combina hardware de grado militar con una consultoría estratégica personalizada.
                    </p>
                </div>
                
                <figure className="my-12 overflow-hidden rounded-sm shadow-sm border border-gray-100">
                    <div className="aspect-[16/9] w-full bg-gray-100 relative group bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3gzdsRzvq6-35viaoVLXFltYzTZAD2Ty-DcE1DfjOi3i476YgSvQX_NY6Vj8fgNk5W6HJBJU04nON4azyzPCRXbe9y5JljO3w_H6S4Wk-wxZuERsZoiB4BGnMz39_EUw0n-a7FBtNhH26HZMv2cXQBaPWf6zZBG-8Ak2cNPsNiDADUa_E0Wk9_9bVShHF2mNXL7F6NPQySNY0kLmhAtJ1lmcQIFLgVgdyX9gXlJFGBr7sagD9DXC9MVctvhRq5B6G7OPG8zot_aI")', filter: 'grayscale(100%)' }}>
                        <div className="absolute inset-0 bg-neutral-900 opacity-20"></div>
                    </div>
                    <figcaption className="mt-3 text-xs text-gray-500 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[14px]">info</span>
                        Infraestructura de centro de datos optimizada para alta disponibilidad.
                    </figcaption>
                </figure>

                <div className="mb-16">
                    <h2 className="mb-6 text-2xl font-bold tracking-tight text-black">Nuestra Metodología</h2>
                    <p className="mb-6 text-text-muted leading-7">
                        Abordamos cada proyecto con una metodología probada de tres fases que asegura que cada cámara, sensor y punto de acceso cumpla una función estratégica dentro de su ecosistema de seguridad.
                    </p>
                    <ul className="space-y-4 border-l-2 border-gray-200 pl-6">
                        <li className="relative">
                            <span className="absolute -left-[31px] top-1 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-black ring-4 ring-white"></span>
                            <h3 className="text-lg font-bold text-black">01. Análisis de Vulnerabilidad</h3>
                            <p className="text-text-muted mt-1">Evaluamos los riesgos físicos y digitales de sus instalaciones actuales.</p>
                        </li>
                        <li className="relative pt-2">
                            <span className="absolute -left-[31px] top-3 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-gray-300 ring-4 ring-white"></span>
                            <h3 className="text-lg font-bold text-black">02. Diseño de Arquitectura</h3>
                            <p className="text-text-muted mt-1">Planificación detallada de la cobertura de cámaras y topología de red.</p>
                        </li>
                        <li className="relative pt-2">
                            <span className="absolute -left-[31px] top-3 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-gray-300 ring-4 ring-white"></span>
                            <h3 className="text-lg font-bold text-black">03. Implementación Certificada</h3>
                            <p className="text-text-muted mt-1">Instalación por técnicos certificados bajo normas ISO y estándares de la industria.</p>
                        </li>
                    </ul>
                </div>

                <blockquote className="my-12 border-l-4 border-black pl-6 py-2 italic text-xl text-black font-medium leading-relaxed">
                    "La tecnología es solo tan efectiva como la estrategia detrás de ella. No vendemos cajas, vendemos tranquilidad operativa."
                    <footer className="mt-3 text-sm font-bold not-italic text-gray-500">— Dirección Técnica, Sofe Tech</footer>
                </blockquote>

                <div className="mt-20 border-t border-gray-200 pt-12">
                    <h2 className="mb-8 text-2xl font-bold tracking-tight text-black">Preguntas Frecuentes</h2>
                    <div className="space-y-4">
                        <details className="group border-b border-gray-100 pb-4">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-black outline-none focus:text-neutral-600">
                                <span>¿Realizan instalaciones fuera de la Ciudad de México?</span>
                                <span className="transition group-open:rotate-45">
                                    <span className="material-symbols-outlined">add</span>
                                </span>
                            </summary>
                            <div className="text-text-muted mt-3 leading-relaxed">
                                Sí, contamos con cobertura nacional para proyectos empresariales. Nuestro equipo de logística coordina implementaciones en múltiples sedes simultáneamente.
                            </div>
                        </details>
                        <details className="group border-b border-gray-100 pb-4">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-black outline-none focus:text-neutral-600">
                                <span>¿Ofrecen pólizas de mantenimiento?</span>
                                <span className="transition group-open:rotate-45">
                                    <span className="material-symbols-outlined">add</span>
                                </span>
                            </summary>
                            <div className="text-text-muted mt-3 leading-relaxed">
                                Absolutamente. Ofrecemos pólizas preventivas y correctivas con SLAs definidos para asegurar que su infraestructura crítica esté siempre operativa.
                            </div>
                        </details>
                        <details className="group border-b border-gray-100 pb-4">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-black outline-none focus:text-neutral-600">
                                <span>¿Qué marcas manejan en su catálogo?</span>
                                <span className="transition group-open:rotate-45">
                                    <span className="material-symbols-outlined">add</span>
                                </span>
                            </summary>
                            <div className="text-text-muted mt-3 leading-relaxed">
                                Trabajamos exclusivamente con líderes del mercado como Hikvision, Dahua, Ubiquiti, ZKTeco y Honeywell para garantizar la durabilidad y soporte a largo plazo.
                            </div>
                        </details>
                    </div>
                </div>
            </article>

            <section className="w-full bg-neutral-50 border-t border-gray-200 py-20 px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-black">¿Necesitas una cotización?</h2>
                    <p className="mb-8 text-lg text-text-muted max-w-2xl mx-auto">
                        Nuestro equipo de especialistas está listo para diseñar la solución que tu empresa necesita. Respuesta en menos de 24 horas hábiles.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={() => navigate('cart')} className="flex min-w-[200px] h-12 cursor-pointer items-center justify-center rounded-sm bg-black px-8 text-base font-bold text-white transition-transform hover:scale-[0.98] hover:bg-neutral-800">
                            Cotizar proyecto
                        </button>
                        <button className="flex min-w-[200px] h-12 cursor-pointer items-center justify-center rounded-sm border border-black bg-transparent px-8 text-base font-bold text-black transition-transform hover:bg-black/5 hover:scale-[0.98]">
                            <span className="mr-2">WhatsApp</span>
                            <span className="material-symbols-outlined text-[18px]">chat</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};