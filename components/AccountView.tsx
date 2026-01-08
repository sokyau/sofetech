import React from 'react';
import { ViewName } from '../App';

interface AccountViewProps {
    navigate: (view: ViewName, params?: Record<string, string>) => void;
}

export const AccountView: React.FC<AccountViewProps> = ({ navigate }) => {
    return (
        <div className="flex-grow bg-white pb-24 animate-fade-in">
            <div className="bg-[#FAFAFA] border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
                    <div className="max-w-4xl">
                        <span className="text-xs font-bold uppercase tracking-widest text-black/40 mb-3 block">Dashboard de Cliente</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-black mb-4">
                            Mi Cuenta
                        </h1>
                        <p className="text-lg text-text-muted font-light max-w-2xl leading-relaxed">
                            Gestiona tus cotizaciones, revisa el estado de tus proyectos y actualiza tus datos personales y de facturación.
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-12">
                <div className="grid lg:grid-cols-12 gap-12">
                    <aside className="lg:col-span-3 lg:sticky lg:top-32 h-fit z-10">
                        <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide border-b lg:border-none border-gray-100">
                            <a href="#" className="whitespace-nowrap flex items-center justify-between px-5 py-3.5 bg-black text-white text-sm uppercase tracking-wider font-medium group transition-all">
                                <span>Mis Cotizaciones</span>
                                <span className="material-symbols-outlined text-sm hidden lg:block">chevron_right</span>
                            </a>
                            <a href="#" className="whitespace-nowrap flex items-center justify-between px-5 py-3.5 text-gray-500 hover:text-black hover:bg-gray-50 text-sm uppercase tracking-wider font-medium transition-colors group">
                                <span>Datos de Cuenta</span>
                            </a>
                            <a href="#" className="whitespace-nowrap flex items-center justify-between px-5 py-3.5 text-gray-500 hover:text-black hover:bg-gray-50 text-sm uppercase tracking-wider font-medium transition-colors group">
                                <span>Direcciones</span>
                            </a>
                            <a href="#" className="whitespace-nowrap flex items-center justify-between px-5 py-3.5 text-gray-500 hover:text-black hover:bg-gray-50 text-sm uppercase tracking-wider font-medium transition-colors group">
                                <span>Cambiar Contraseña</span>
                            </a>
                            <div className="h-px bg-gray-100 my-4 hidden lg:block"></div>
                            <a href="#" className="whitespace-nowrap px-5 py-3.5 text-red-600 hover:bg-red-50 text-sm uppercase tracking-wider font-medium transition-colors">
                                Cerrar Sesión
                            </a>
                        </nav>
                    </aside>
                    <div className="lg:col-span-9 space-y-16">
                        <section>
                            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                                <h2 className="text-2xl font-serif italic text-black">Historial de Cotizaciones</h2>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <span className="material-symbols-outlined text-lg">filter_list</span>
                                    <span className="uppercase tracking-wider text-xs font-bold">Filtrar por: Últimos 30 días</span>
                                </div>
                            </div>
                            <div className="w-full overflow-x-auto border border-gray-200 bg-white">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-black/10 bg-gray-50/50">
                                            <th className="py-4 px-6 text-xs font-bold uppercase tracking-widest text-black/60">ID Solicitud</th>
                                            <th className="py-4 px-6 text-xs font-bold uppercase tracking-widest text-black/60">Fecha</th>
                                            <th className="py-4 px-6 text-xs font-bold uppercase tracking-widest text-black/60">Referencia</th>
                                            <th className="py-4 px-6 text-xs font-bold uppercase tracking-widest text-black/60">Estatus</th>
                                            <th className="py-4 px-6 text-xs font-bold uppercase tracking-widest text-black/60 text-right">Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr className="group hover:bg-gray-50 transition-colors border-b border-gray-100">
                                            <td className="py-5 px-6 font-medium text-black">#REQ-2024-892</td>
                                            <td className="py-5 px-6 text-gray-500">22 Oct 2024</td>
                                            <td className="py-5 px-6 text-black">Proyecto Torre Reforma - CCTV</td>
                                            <td className="py-5 px-6">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-yellow-50 text-yellow-800 border border-yellow-100">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                                                    En Revisión
                                                </span>
                                            </td>
                                            <td className="py-5 px-6 text-right">
                                                <button className="text-xs uppercase font-bold tracking-wider border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
                                                    Ver Detalles
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="group hover:bg-gray-50 transition-colors border-b border-gray-100">
                                            <td className="py-5 px-6 font-medium text-black">#REQ-2024-845</td>
                                            <td className="py-5 px-6 text-gray-500">10 Oct 2024</td>
                                            <td className="py-5 px-6 text-black">Renovación Switch Core</td>
                                            <td className="py-5 px-6">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-green-50 text-green-800 border border-green-100">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                                                    Cotizado
                                                </span>
                                            </td>
                                            <td className="py-5 px-6 text-right">
                                                <button className="bg-black text-white px-4 py-2 text-[10px] uppercase font-bold tracking-widest hover:bg-gray-800 transition-colors">
                                                    Descargar PDF
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="group hover:bg-gray-50 transition-colors border-b border-gray-100">
                                            <td className="py-5 px-6 font-medium text-black">#REQ-2024-720</td>
                                            <td className="py-5 px-6 text-gray-500">28 Sep 2024</td>
                                            <td className="py-5 px-6 text-black">Control de Acceso Biométrico</td>
                                            <td className="py-5 px-6">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-600 border border-gray-200">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                                    Cerrada
                                                </span>
                                            </td>
                                            <td className="py-5 px-6 text-right">
                                                <button className="text-xs uppercase font-bold tracking-wider text-gray-400 hover:text-black transition-colors">
                                                    Archivar
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="group hover:bg-gray-50 transition-colors border-b border-gray-100">
                                            <td className="py-5 px-6 font-medium text-black">#REQ-2024-655</td>
                                            <td className="py-5 px-6 text-gray-500">15 Sep 2024</td>
                                            <td className="py-5 px-6 text-black">Suministro Cableado Cat6A</td>
                                            <td className="py-5 px-6">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-green-50 text-green-800 border border-green-100">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                                                    Completada
                                                </span>
                                            </td>
                                            <td className="py-5 px-6 text-right">
                                                <button className="text-xs uppercase font-bold tracking-wider border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
                                                    Reordenar
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4 text-right">
                                <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-transparent hover:border-black transition-all pb-1">
                                    Ver historial completo <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </section>
                        <section className="pt-12 border-t border-gray-100">
                            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                                <h2 className="text-2xl font-serif italic text-black">Datos Personales</h2>
                                <button className="text-xs font-bold uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
                                    Editar Información
                                </button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl">
                                <div className="space-y-1">
                                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Nombre Completo</label>
                                    <div className="text-sm font-medium border-b border-gray-200 pb-2 w-full">Ing. Roberto Méndez</div>
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Correo Electrónico</label>
                                    <div className="text-sm font-medium border-b border-gray-200 pb-2 w-full">roberto.mendez@integradores-seguridad.mx</div>
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Teléfono / WhatsApp</label>
                                    <div className="text-sm font-medium border-b border-gray-200 pb-2 w-full">+52 55 1234 5678</div>
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Empresa / Razón Social</label>
                                    <div className="text-sm font-medium border-b border-gray-200 pb-2 w-full">Sistemas Integrales del Valle S.A. de C.V.</div>
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">RFC</label>
                                    <div className="text-sm font-medium border-b border-gray-200 pb-2 w-full">SIV120520H42</div>
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Cargo</label>
                                    <div className="text-sm font-medium border-b border-gray-200 pb-2 w-full">Gerente de Proyectos</div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-24">
                <div className="bg-[#111111] text-white p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-serif italic mb-2">¿Necesitas ayuda con tu cuenta?</h3>
                        <p className="text-white/60 font-light text-sm md:text-base max-w-md">Nuestro equipo de soporte técnico especializado está disponible para resolver dudas sobre tus cotizaciones o configuraciones.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <button className="px-8 py-3 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors w-full sm:w-auto text-center">
                            Contactar Soporte
                        </button>
                        <button className="px-8 py-3 border border-white/20 text-white text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-sm">chat</span>
                            WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};