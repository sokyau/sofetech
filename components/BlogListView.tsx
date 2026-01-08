import React from 'react';
import { ViewName } from '../App';

interface BlogListViewProps {
    navigate: (view: ViewName, params?: Record<string, string>) => void;
}

export const BlogListView: React.FC<BlogListViewProps> = ({ navigate }) => {
    return (
        <div className="w-full animate-fade-in">
            <section className="pt-20 pb-8 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
                <div className="flex flex-col gap-6">
                    <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-black">Blog</h1>
                    <p className="text-lg md:text-xl text-text-muted font-light max-w-2xl leading-relaxed">
                        Guías, listas de precios, buenas prácticas y novedades para integradores.
                    </p>
                </div>
                <div className="w-full h-px bg-black/10 mt-12"></div>
            </section>
            <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-black/5 py-4 px-6 md:px-12">
                <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-6 justify-between items-center">
                    <div className="relative w-full lg:w-80">
                        <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">search</span>
                        <input className="w-full border-none border-b border-gray-200 focus:border-black focus:ring-0 pl-8 pr-0 py-2 bg-transparent text-sm placeholder:text-gray-400 transition-colors" placeholder="Buscar artículos…" type="text" />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
                        <div className="flex gap-2 overflow-x-auto w-full sm:w-auto no-scrollbar pb-2 sm:pb-0 mask-image-fade">
                            <button className="px-4 py-1.5 rounded-full border border-black bg-black text-white text-[11px] uppercase tracking-widest font-bold whitespace-nowrap transition-transform hover:scale-105">Todos</button>
                            <button className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-colors text-[11px] uppercase tracking-widest font-bold whitespace-nowrap bg-white">CCTV</button>
                            <button className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-colors text-[11px] uppercase tracking-widest font-bold whitespace-nowrap bg-white">Redes</button>
                            <button className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-colors text-[11px] uppercase tracking-widest font-bold whitespace-nowrap bg-white">Control de acceso</button>
                            <button className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-colors text-[11px] uppercase tracking-widest font-bold whitespace-nowrap bg-white">Alarmas</button>
                            <button className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-colors text-[11px] uppercase tracking-widest font-bold whitespace-nowrap bg-white">Proyectos</button>
                        </div>
                        <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
                        <div className="flex gap-4 text-[11px] uppercase tracking-widest font-bold text-gray-400 whitespace-nowrap w-full sm:w-auto justify-end">
                            <button className="text-black">Recientes</button>
                            <button className="hover:text-black transition-colors">Popular</button>
                            <button className="hover:text-black transition-colors">Guías</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1440px] mx-auto min-h-[60vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-20">
                    <article className="group flex flex-col gap-5 cursor-pointer" onClick={() => navigate('blog-post')}>
                        <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                            <div className="absolute inset-0 bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpUDcHf-EAVo2mmXcMEKKrSX6Hy2IYLaY-akVs6DLopzI2N_vGAg_dVXaUA95X-D7d11tebHJUF1V2QRGbQtgmiXeO4WZucZTHAtDhq3D5jLJMgE-vtttocs_LJzAwfuA4ZzPa8Ceb34ONR8TiZgthqJ2aP4JtTx39QhSKal12SJ7Dmj59BQFk0gdNRZeN7oRqkGHzqqWxD3UkxEC4q4fAsKcxBTLpwfuK77ePKDHv7V948Wd8Qnlmh4oOFDE3Cp-SE7c-4mmZnLo")' }}></div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">CCTV</span>
                                <span className="text-xs font-serif italic text-gray-400">24 Oct, 2023</span>
                            </div>
                            <h3 className="text-2xl font-medium leading-[1.2] tracking-tight group-hover:text-black/70 transition-colors">Tecnología AI: El futuro de la detección perimetral</h3>
                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 font-light">Análisis profundo sobre cómo los algoritmos de aprendizaje automático están reduciendo las falsas alarmas en un 95%.</p>
                            <div className="pt-1">
                                <span className="text-[11px] font-bold uppercase tracking-widest hover-underline-animation">Leer artículo</span>
                            </div>
                        </div>
                    </article>
                    <article className="group flex flex-col gap-5 cursor-pointer" onClick={() => navigate('blog-post')}>
                        <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                            <div className="absolute inset-0 bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3gzdsRzvq6-35viaoVLXFltYzTZAD2Ty-DcE1DfjOi3i476YgSvQX_NY6Vj8fgNk5W6HJBJU04nON4azyzPCRXbe9y5JljO3w_H6S4Wk-wxZuERsZoiB4BGnMz39_EUw0n-a7FBtNhH26HZMv2cXQBaPWf6zZBG-8Ak2cNPsNiDADUa_E0Wk9_9bVShHF2mNXL7F6NPQySNY0kLmhAtJ1lmcQIFLgVgdyX9gXlJFGBr7sagD9DXC9MVctvhRq5B6G7OPG8zot_aI")' }}></div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">Redes</span>
                                <span className="text-xs font-serif italic text-gray-400">18 Oct, 2023</span>
                            </div>
                            <h3 className="text-2xl font-medium leading-[1.2] tracking-tight group-hover:text-black/70 transition-colors">Wi-Fi 6E para entornos de alta densidad</h3>
                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 font-light">Comparativa técnica de throughput y latencia en implementaciones corporativas vs industriales.</p>
                            <div className="pt-1">
                                <span className="text-[11px] font-bold uppercase tracking-widest hover-underline-animation">Leer artículo</span>
                            </div>
                        </div>
                    </article>
                    <article className="group flex flex-col gap-5 cursor-pointer" onClick={() => navigate('blog-post')}>
                        <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                            <div className="absolute inset-0 bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUTp2KvHVwZRGx8_qf_S6RbgLm_po5LKglsSaS_fSjTGV7q8SYvG7dKyMi_sWsGga2wpvdkRjLnP1ZFia22fyQSXpS-triagOsSvhzzC2ikbjkycqRxTuT508-D_vaqSMqyLNMFhc-n7keZBfQQv8wE9hFi6_guoS1p4mSbR2icPaobDrUskKq974dcDO0kn7HO__w_yzCHDOcglAYhf0gyGnt5LR3zJNh6UG6Gr40UtypNySqXAwpVYkjLjuxJ6EQfadwk9HPR-E")' }}></div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">Control de Acceso</span>
                                <span className="text-xs font-serif italic text-gray-400">12 Oct, 2023</span>
                            </div>
                            <h3 className="text-2xl font-medium leading-[1.2] tracking-tight group-hover:text-black/70 transition-colors">Biometría sin contacto: Higiene y seguridad</h3>
                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 font-light">La transición post-pandemia hacia soluciones touchless y su impacto en el flujo de personal.</p>
                            <div className="pt-1">
                                <span className="text-[11px] font-bold uppercase tracking-widest hover-underline-animation">Leer artículo</span>
                            </div>
                        </div>
                    </article>
                    <article className="group flex flex-col gap-5 cursor-pointer" onClick={() => navigate('blog-post')}>
                        <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                            <div className="absolute inset-0 bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCucotQzooJpiNO0sX9VUivpD2qCOboC_JiTa6jfrmITNbT7QiQHnKmWOHh_UeYnL6dJKtK9UAKZNv7ggCFxuhP4HDnvXhoga7t_5PbAQdlywQVHjnuIybe9k50rgbbPbCusnEybOJDux02t2B9F_3DxDeUmNJz7EKzc-btvUDVU-gGoDeUpPE-i4Cmm5R2J_4JpQFlQYwdq4chf-QO9I0_r1jFcQLScxryPpvUqG_pnQMki3SjPg_Fg7npZPBF0ShlLbz2sTFzsR8")' }}></div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">Alarmas</span>
                                <span className="text-xs font-serif italic text-gray-400">05 Oct, 2023</span>
                            </div>
                            <h3 className="text-2xl font-medium leading-[1.2] tracking-tight group-hover:text-black/70 transition-colors">Normativas de detección de incendio 2024</h3>
                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 font-light">Actualización crucial sobre los estándares NFPA y su aplicación en naves industriales en México.</p>
                            <div className="pt-1">
                                <span className="text-[11px] font-bold uppercase tracking-widest hover-underline-animation">Leer artículo</span>
                            </div>
                        </div>
                    </article>
                    <article className="group flex flex-col gap-5 cursor-pointer" onClick={() => navigate('blog-post')}>
                        <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50 relative flex items-center justify-center border border-gray-100">
                            <div className="text-center p-8">
                                <span className="material-symbols-outlined text-4xl text-gray-300 mb-4">description</span>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Documentación</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">Recursos</span>
                                <span className="text-xs font-serif italic text-gray-400">01 Oct, 2023</span>
                            </div>
                            <h3 className="text-2xl font-medium leading-[1.2] tracking-tight group-hover:text-black/70 transition-colors">Lista de Precios Q4: Ajustes y Promociones</h3>
                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 font-light">Descarga la lista actualizada con los nuevos modelos de switches PoE y cámaras PTZ.</p>
                            <div className="pt-1">
                                <span className="text-[11px] font-bold uppercase tracking-widest hover-underline-animation">Leer artículo</span>
                            </div>
                        </div>
                    </article>
                    <article className="group flex flex-col gap-5 cursor-pointer" onClick={() => navigate('blog-post')}>
                        <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                            <div className="absolute inset-0 bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhsYuBgOrkmVaQeUrwxgJT5j72bnLDbSleWK-gZhI4G5oww-j8U0Ux5ph8mTfSyqiIlDXlzPUtwtI7YrDPOaceZknA4S8l-TBer6zWb2fD6pKv7eLtiVl2W2E4iVPZXgNPij-qFrDLioaDW-vgz2Ljoo6fKts3IBCLx7Oc1qZmbloNeaPF-4iqXooF5yxLiazJVCUOCSFRaW12GU97xvdupRCDqrmJNXN-YOK4Fb70sV81UHsIScD9_3FKW47L9bH2ekKgjAoUmB4")' }}></div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">Proyectos</span>
                                <span className="text-xs font-serif italic text-gray-400">28 Sep, 2023</span>
                            </div>
                            <h3 className="text-2xl font-medium leading-[1.2] tracking-tight group-hover:text-black/70 transition-colors">Caso de Éxito: Parque Industrial Querétaro</h3>
                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 font-light">Cómo se implementó una solución integral de videovigilancia y control de acceso vehicular.</p>
                            <div className="pt-1">
                                <span className="text-[11px] font-bold uppercase tracking-widest hover-underline-animation">Leer artículo</span>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="flex justify-center items-center gap-12 mt-24 border-t border-gray-100 pt-16 select-none">
                    <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-300 disabled:cursor-not-allowed group" disabled>
                        <span className="material-symbols-outlined text-base">arrow_back</span>
                        <span>Anterior</span>
                    </button>
                    <div className="flex gap-8 font-serif italic text-lg">
                        <span className="text-black border-b border-black">1</span>
                        <span className="text-gray-400 hover:text-black cursor-pointer transition-colors">2</span>
                        <span className="text-gray-400 hover:text-black cursor-pointer transition-colors">3</span>
                        <span className="text-gray-400">...</span>
                        <span className="text-gray-400 hover:text-black cursor-pointer transition-colors">8</span>
                    </div>
                    <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-black hover:opacity-60 transition-opacity group">
                        <span>Siguiente</span>
                        <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                </div>
            </section>
            <section className="py-24 bg-white border-b border-black/5">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Socios Comerciales</h3>
                            <div className="h-px w-12 bg-black/20"></div>
                        </div>
                        <div className="md:w-3/4 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12">
                            <div className="text-xl font-bold font-sans tracking-tighter text-black uppercase opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default">Hikvision</div>
                            <div className="text-xl font-bold font-sans tracking-tighter text-black uppercase opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default">Dahua</div>
                            <div className="text-xl font-bold font-sans tracking-tighter text-black uppercase opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default">Ubiquiti</div>
                            <div className="text-xl font-bold font-sans tracking-tighter text-black uppercase opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default">ZKTeco</div>
                            <div className="text-xl font-bold font-sans tracking-tighter text-black uppercase opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default">Honeywell</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};