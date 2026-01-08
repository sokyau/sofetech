import React from 'react';
import { ViewName } from '../App';

interface FooterProps {
    navigate: (view: ViewName, params?: Record<string, string>) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
    return (
        <footer className="bg-[#111111] text-white pt-24 pb-8 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16">
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-tight mb-8 text-white">Compañía</h4>
                            <ul className="flex flex-col gap-4 text-sm text-[#999999] font-medium">
                                <li><button onClick={() => navigate('about')} className="hover:text-white transition-colors">Sobre Nosotros</button></li>
                                <li><button onClick={() => navigate('not-found')} className="hover:text-white transition-colors">Carreras</button></li>
                                <li><button onClick={() => navigate('blog')} className="hover:text-white transition-colors">Blog Corporativo</button></li>
                                <li><button onClick={() => navigate('not-found')} className="hover:text-white transition-colors">Prensa</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-tight mb-8 text-white">Productos</h4>
                            <ul className="flex flex-col gap-4 text-sm text-[#999999] font-medium">
                                <li><button onClick={() => navigate('catalog')} className="hover:text-white transition-colors">CCTV &amp; Video</button></li>
                                <li><button onClick={() => navigate('catalog')} className="hover:text-white transition-colors">Networking</button></li>
                                <li><button onClick={() => navigate('catalog')} className="hover:text-white transition-colors">Control de Acceso</button></li>
                                <li><button onClick={() => navigate('catalog')} className="hover:text-white transition-colors">Incendio</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-tight mb-8 text-white">Recursos</h4>
                            <ul className="flex flex-col gap-4 text-sm text-[#999999] font-medium">
                                <li><button onClick={() => navigate('contact')} className="hover:text-white transition-colors">Centro de Ayuda</button></li>
                                <li><button onClick={() => navigate('legal')} className="hover:text-white transition-colors">Garantías</button></li>
                                <li><button onClick={() => navigate('not-found')} className="hover:text-white transition-colors">Descargas</button></li>
                                <li><button onClick={() => navigate('contact')} className="hover:text-white transition-colors">Contacto</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start">
                        <h4 className="text-xl md:text-2xl font-medium tracking-tight mb-6 text-white uppercase">Suscríbete a nuestro boletín</h4>
                        <div className="relative w-full max-w-md">
                            <form className="flex items-center w-full border border-white/20 bg-transparent h-12">
                                <input className="bg-transparent border-none px-4 flex-grow text-sm text-white focus:ring-0 placeholder:text-[#666666] h-full" placeholder="tu@empresa.com" type="email" />
                                <button className="bg-white text-black h-[calc(100%-8px)] mr-1 px-6 text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors my-1" type="submit">
                                    Suscribirse
                                </button>
                            </form>
                        </div>
                        <div className="mt-12">
                            <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-3">Ubicación</h5>
                            <p className="text-sm text-[#999999] leading-relaxed">
                                Av. Insurgentes Sur 1234, Col. Del Valle<br />
                                Ciudad de México, CDMX 03100
                            </p>
                            <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-3 mt-6">Horario de Atención</h5>
                            <p className="text-sm text-[#999999] leading-relaxed">
                                Lun – Vie: 9:00 AM – 6:00 PM
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full border-b border-white/10 pb-0 mb-8 overflow-hidden">
                    <h1 className="text-white font-bold leading-none tracking-tighter text-center w-full block footer-huge-text select-none">
                        SOFE
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4 border-t border-white/10">
                    <div className="flex gap-4">
                        <a className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors text-white" href="#">
                            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                            </svg>
                        </a>
                        <a className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors text-white" href="#">
                            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.588 3.32c.636-.247 1.363-.416 2.427-.465C10.605 2.012 10.963 2 12.315 2zm-4.755 8.461c.338 2.81 2.813 5.093 5.663 4.881 2.062-.153 3.82-1.636 4.314-3.642.668-2.712-1.503-5.275-4.225-4.991-1.957.204-3.539 1.766-3.752 3.752zm3.328 1.884c-.496.22-1.067.062-1.385-.367-.323-.435-.262-1.048.14-1.41.4-.36.996-.34 1.353.033.364.38.358.988-.108 1.744zM16.92 5.064c-.672.086-1.173.66-1.103 1.332.062.597.575 1.056 1.175 1.051.685-.006 1.231-.563 1.222-1.25-.01-.67-.557-1.21-1.294-1.133z" fillRule="evenodd"></path>
                            </svg>
                        </a>
                        <a className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors text-white" href="#">
                            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <p className="text-[10px] text-[#666666] uppercase tracking-widest font-bold">© 2024 SOFE GROUP. All Rights Reserved.</p>
                    <div className="flex gap-8 text-[10px] text-[#666666] uppercase tracking-widest font-bold">
                        <button onClick={() => navigate('legal', { section: 'privacy' })} className="hover:text-white transition-colors">Privacidad</button>
                        <button onClick={() => navigate('legal', { section: 'terms' })} className="hover:text-white transition-colors">Términos</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};