import React from 'react';
import { ViewName } from '../App';

interface BlogPostViewProps {
    navigate: (view: ViewName, params?: Record<string, string>) => void;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({ navigate }) => {
    return (
        <div className="w-full animate-fade-in">
            <section className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 pb-8">
                <div className="max-w-4xl">
                    <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-6">
                        <button onClick={() => navigate('blog')} className="hover:text-black transition-colors">Blog</button>
                        <span>/</span>
                        <a href="#" className="text-black font-semibold">Infraestructura IP</a>
                    </nav>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black leading-[1.1] mb-8">
                        Optimización de Ancho de Banda en Redes de Videovigilancia 4K
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 md:gap-8 text-sm text-gray-500 font-medium pb-8 border-b border-gray-200">
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                            12 Octubre, 2023
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">schedule</span>
                            8 min lectura
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">person</span>
                            Ing. Roberto Méndez
                        </span>
                    </div>
                </div>
            </section>
            <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16">
                <div className="w-full h-[400px] md:h-[500px] overflow-hidden bg-gray-100 relative group">
                    <div className="w-full h-full bg-cover bg-center grayscale transition-all duration-700" 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASr_6TWfAMp67r8QKBJCaIykH4YJ1JudvnkLahHUfOcxS8IR5AJhWexBCwm1Dkh4XXOZjLxXEtZZReNKDjVW9PSuBpmzMUs42m3Yszqpw7zY2ac8Wy5KcxyzbJMwfgzExOzyrjI-9xw_Eyys_XMbI-nJWshlM97kEOacU1LM789K-ZfnJsKvOHTc63NtXAyK-nOR2Mj_vcGI0LsmmKEjVLqzQcO7JKOzq2Un72qAY0-X3QwAEZeF7sTBPZ7Jq3KVpdC1_6gc7y9TM")', backgroundPosition: 'center 30%' }}></div>
                    <div className="absolute bottom-0 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 text-[10px] uppercase tracking-widest text-gray-500">
                        Fig 1.0 — Arquitectura de Servidores NVR
                    </div>
                </div>
            </section>
            <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    <div className="lg:col-span-8 article-content">
                        <p className="font-serif text-xl md:text-2xl leading-relaxed text-black/80 mb-10 italic">
                            La migración a resoluciones Ultra HD presenta desafíos únicos en la infraestructura de red. Descubra cómo calcular, gestionar y optimizar el flujo de datos para proyectos de misión crítica.
                        </p>
                        <div className="space-y-8 text-gray-700 leading-relaxed text-lg font-light">
                            <p>
                                En el ecosistema actual de seguridad electrónica, la demanda por mayor resolución es insaciable. Sin embargo, el aumento exponencial de píxeles conlleva una carga significativa para la infraestructura de red existente. No se trata solo de cambiar cámaras; se trata de rediseñar el flujo de información.
                            </p>
                            <h2 className="text-3xl font-medium text-black tracking-tight pt-8 pb-2">El Desafío del Bitrate Variable</h2>
                            <p>
                                A diferencia del tráfico de datos convencional, el video IP es altamente sensible a la latencia y al jitter. El uso de códecs modernos como H.265+ ha reducido significativamente el ancho de banda necesario, pero la variabilidad del bitrate en escenas con mucho movimiento sigue siendo un factor crítico de diseño.
                            </p>
                            <div className="bg-gray-50 border-l-2 border-black p-6 my-8">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-black mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">settings</span> Nota Técnica
                                </h4>
                                <p className="text-sm text-gray-600">
                                    H.265+ utiliza una codificación predictiva basada en un modelo de fondo estático. En escenas donde el fondo cambia poco (pasillos vacíos), el ahorro puede superar el 70% comparado con H.264. Sin embargo, en escenas complejas (lluvia, multitudes), el bitrate puede triplicarse instantáneamente.
                                </p>
                            </div>
                            <h3 className="text-2xl font-medium text-black tracking-tight pt-4">Estrategias de Segmentación de Red (VLANs)</h3>
                            <p>
                                La convergencia de redes es inevitable, pero peligrosa si no se gestiona correctamente. Recomendamos estrictamente la separación lógica del tráfico de video del tráfico de datos corporativo.
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>VLAN de Gestión:</strong> Exclusiva para acceso a interfaces de administración de switches y NVRs.</li>
                                <li><strong>VLAN de Cámaras:</strong> Tráfico multicast/unicast de video. Sin acceso a internet.</li>
                                <li><strong>VLAN de Clientes:</strong> Estaciones de monitoreo y visualización.</li>
                            </ul>
                            <blockquote className="border-l border-gray-300 pl-8 py-4 my-10">
                                <p className="font-serif text-2xl italic text-black leading-normal">
                                    "La segmentación lógica es tan crítica como la seguridad física. Una red plana es una vulnerabilidad esperando ser explotada."
                                </p>
                                <footer className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-400">— Director de Ingeniería, Sofe Tech</footer>
                            </blockquote>
                            <h2 className="text-3xl font-medium text-black tracking-tight pt-6 pb-2">Lista de Verificación de Pre-Implementación</h2>
                            <div className="border border-gray-200 p-8 my-8 bg-white shadow-sm">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-black mb-6">Checklist de Infraestructura</h4>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-black">check_box</span>
                                        <span className="text-sm">Verificación de presupuesto PoE (Power over Ethernet) total del switch.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-black">check_box</span>
                                        <span className="text-sm">Cálculo de throughput real vs teórico (considerar overhead del 20%).</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-black">check_box</span>
                                        <span className="text-sm">Certificación de cableado estructurado Cat6/6A para 10Gbps en backbone.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-black">check_box</span>
                                        <span className="text-sm">Configuración de QoS priorizando tráfico DSCP 46 (Video).</span>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Para proyectos que requieren alta disponibilidad, considere implementar topologías de anillo con protocolos como RSTP o tecnologías propietarias de recuperación rápida (&lt; 50ms).
                            </p>
                            <div className="bg-black text-white p-6 my-8">
                                <div className="flex gap-4 items-start">
                                    <span className="material-symbols-outlined text-yellow-500 mt-1">warning</span>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-2">Advertencia Crítica</h4>
                                        <p className="text-sm text-gray-300">
                                            Nunca subestime el cuello de botella en la escritura a disco. Un arreglo RAID mal configurado puede causar pérdida de cuadros (frame drop) aunque la red funcione perfectamente. Utilice discos de vigilancia clase Enterprise.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-28 space-y-12">
                            <div>
                                <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Contenido</h5>
                                <ul className="space-y-3 text-sm border-l border-gray-200 pl-4">
                                    <li><a href="#" className="text-black font-medium hover:text-gray-600 transition-colors block border-l-2 border-black -ml-[17px] pl-4">Introducción</a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-black transition-colors block">El Desafío del Bitrate</a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-black transition-colors block">Estrategias VLAN</a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-black transition-colors block">Checklist Implementación</a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-black transition-colors block">Almacenamiento</a></li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 border border-gray-100">
                                <h5 className="text-lg font-serif italic mb-4">¿Necesita asesoría técnica?</h5>
                                <p className="text-xs text-gray-500 mb-6 leading-relaxed">Nuestros ingenieros certificados pueden validar su diseño de red sin costo.</p>
                                <div className="flex flex-col gap-3">
                                    <button onClick={() => navigate('cart')} className="w-full h-10 bg-black text-white text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
                                        Cotizar Proyecto
                                    </button>
                                    <button className="w-full h-10 border border-black bg-transparent text-black text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-sm">chat</span>
                                        WhatsApp
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Etiquetas</h5>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gray-100 text-xs text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">CCTV</span>
                                    <span className="px-3 py-1 bg-gray-100 text-xs text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">Networking</span>
                                    <span className="px-3 py-1 bg-gray-100 text-xs text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">Ancho de Banda</span>
                                    <span className="px-3 py-1 bg-gray-100 text-xs text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">VLAN</span>
                                    <span className="px-3 py-1 bg-gray-100 text-xs text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">H.265+</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};