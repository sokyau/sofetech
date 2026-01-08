import React from 'react';
import { ViewName } from '../App';

interface ProductDetailViewProps {
    navigate: (view: ViewName, params?: Record<string, string>) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ navigate }) => {
    return (
        <div className="w-full animate-fade-in flex-grow pt-6 pb-24">
             <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <nav aria-label="Breadcrumb" className="mb-12">
                    <ol className="flex items-center space-x-2 text-xs uppercase tracking-widest text-gray-500">
                        <li><button onClick={() => navigate('home')} className="hover:text-black transition-colors">Inicio</button></li>
                        <li><span className="text-gray-300">/</span></li>
                        <li><button onClick={() => navigate('catalog')} className="hover:text-black transition-colors">CCTV &amp; Video</button></li>
                        <li><span className="text-gray-300">/</span></li>
                        <li className="text-black font-medium">Cámara IP Dome 4MP IR30m</li>
                    </ol>
                </nav>
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                    <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
                        <div className="bg-[#F4F4F4] w-full aspect-[4/3] flex items-center justify-center p-12 relative overflow-hidden group">
                            <div className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMf-T7_6MdoLZVVay_HQkSGHiTA2KXInRCJt0nrx95--9j5L8B3eryybp6hLPF-8UOJ5QUSDXPBzNTuUCx4-pPONTJ3GXoxUa3UFw3TQtl3wPWcTuxZBh-ADtrCcOTd4Zt3_o0UNHrCwKE6HkKjRobp_8EDzeuz9COZ-bbQNVKIEE8vWbi67kQba94ZyWbimOG0pIma8TNdsW_PMAwmVP9nK_0bBvn8EX9OgA7TkjAgklJDfZwUpimnCiMAt3elHnM-YSigBa2Mr0")' }}></div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <button className="bg-[#F4F4F4] aspect-square flex items-center justify-center p-2 border border-black cursor-pointer">
                                <div className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMf-T7_6MdoLZVVay_HQkSGHiTA2KXInRCJt0nrx95--9j5L8B3eryybp6hLPF-8UOJ5QUSDXPBzNTuUCx4-pPONTJ3GXoxUa3UFw3TQtl3wPWcTuxZBh-ADtrCcOTd4Zt3_o0UNHrCwKE6HkKjRobp_8EDzeuz9COZ-bbQNVKIEE8vWbi67kQba94ZyWbimOG0pIma8TNdsW_PMAwmVP9nK_0bBvn8EX9OgA7TkjAgklJDfZwUpimnCiMAt3elHnM-YSigBa2Mr0")' }}></div>
                            </button>
                            <button className="bg-[#F4F4F4] aspect-square flex items-center justify-center p-2 border border-transparent hover:border-black transition-colors cursor-pointer">
                                <div className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMf-T7_6MdoLZVVay_HQkSGHiTA2KXInRCJt0nrx95--9j5L8B3eryybp6hLPF-8UOJ5QUSDXPBzNTuUCx4-pPONTJ3GXoxUa3UFw3TQtl3wPWcTuxZBh-ADtrCcOTd4Zt3_o0UNHrCwKE6HkKjRobp_8EDzeuz9COZ-bbQNVKIEE8vWbi67kQba94ZyWbimOG0pIma8TNdsW_PMAwmVP9nK_0bBvn8EX9OgA7TkjAgklJDfZwUpimnCiMAt3elHnM-YSigBa2Mr0")', transform: 'scale(0.8) rotate(45deg)' }}></div>
                            </button>
                            <button className="bg-[#F4F4F4] aspect-square flex items-center justify-center p-2 border border-transparent hover:border-black transition-colors cursor-pointer">
                                <div className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMf-T7_6MdoLZVVay_HQkSGHiTA2KXInRCJt0nrx95--9j5L8B3eryybp6hLPF-8UOJ5QUSDXPBzNTuUCx4-pPONTJ3GXoxUa3UFw3TQtl3wPWcTuxZBh-ADtrCcOTd4Zt3_o0UNHrCwKE6HkKjRobp_8EDzeuz9COZ-bbQNVKIEE8vWbi67kQba94ZyWbimOG0pIma8TNdsW_PMAwmVP9nK_0bBvn8EX9OgA7TkjAgklJDfZwUpimnCiMAt3elHnM-YSigBa2Mr0")', transform: 'scale(1.2)' }}></div>
                            </button>
                        </div>
                        <div className="mt-16 pt-16 border-t border-gray-100">
                            <h3 className="text-lg font-bold uppercase tracking-widest mb-8">Descripción Técnica</h3>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-500">Resolución</span>
                                    <span className="font-medium text-black">4 Megapíxeles (2688 × 1520)</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-500">Lente</span>
                                    <span className="font-medium text-black">Fijo 2.8mm / Gran Angular 103°</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-500">Visión Nocturna (IR)</span>
                                    <span className="font-medium text-black">Hasta 30 metros Smart IR</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-500">Compresión</span>
                                    <span className="font-medium text-black">H.265+ / H.265 / H.264+</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-500">Protección</span>
                                    <span className="font-medium text-black">IP67 (Exterior) / IK10 (Antivandálico)</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-500">Alimentación</span>
                                    <span className="font-medium text-black">12 VDC &amp; PoE (802.3af)</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-500">Garantía</span>
                                    <span className="font-medium text-black">3 Años Directo de Fábrica</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-500">Compatibilidad</span>
                                    <span className="font-medium text-black">ONVIF (Profile S/G/T)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 flex flex-col h-full order-1 lg:order-2">
                        <div className="sticky top-28">
                            <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-black mb-2">Cámara IP Dome 4MP IR30m</h1>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-sm text-gray-500 font-light uppercase tracking-wide">SKU: HIK-2CD-2143</span>
                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wide">
                                    <span className="size-1.5 rounded-full bg-green-600"></span>
                                    En existencia
                                </span>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-8 font-light">
                                Vigilancia de alta definición con tecnología de compresión eficiente. Diseño robusto antivandálico ideal para interiores y exteriores empresariales.
                            </p>
                            <div className="mb-8">
                                <span className="text-3xl font-medium text-black tracking-tight">$2,499.00</span>
                                <span className="text-sm text-gray-500 ml-1">MXN + IVA</span>
                            </div>
                            <div className="flex flex-col gap-4 mb-8">
                                <div className="flex items-center justify-between border border-gray-300 h-12 px-4 w-32 hover:border-black transition-colors">
                                    <button className="text-gray-500 hover:text-black focus:outline-none">-</button>
                                    <input className="w-full text-center border-none focus:ring-0 text-sm font-medium h-full p-0" type="text" defaultValue="1" />
                                    <button className="text-gray-500 hover:text-black focus:outline-none">+</button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 mb-6">
                                <button onClick={() => navigate('cart')} className="w-full py-4 bg-black text-white text-sm uppercase tracking-widest font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                                    <span>Agregar a cotización</span>
                                </button>
                                <button onClick={() => navigate('cart')} className="w-full py-4 bg-white border border-black text-black text-sm uppercase tracking-widest font-bold hover:bg-gray-50 transition-colors">
                                    Cotizar ahora
                                </button>
                            </div>
                            <div className="flex flex-col gap-4 text-xs text-gray-500">
                                <p className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">local_shipping</span>
                                    Envío sujeto a volumen y destino.
                                </p>
                                <a href="#" className="inline-flex items-center gap-2 hover:text-green-600 transition-colors w-fit">
                                    <span className="material-symbols-outlined text-base">chat</span>
                                    <span className="underline underline-offset-2">Hablar por WhatsApp con un asesor</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-32 border-t border-black pt-16">
                    <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-12 uppercase">Productos Relacionados</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                        <div className="group flex flex-col cursor-pointer" onClick={() => navigate('product')}>
                            <div className="relative bg-[#F4F4F4] aspect-[4/5] mb-6 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center p-8">
                                    <div className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7giQuMDqXCroDgdiDobRWaYLldZBiHCHCBOgbnvQNy62dB8FEsYDOLbRfrmZ9v0jBIXPv_biFgsjd6CWHXDfz9zQwpth_XjEz3_k0pChMpgCSRiCF36itsv9QW-5Km56JdEdDBUvwzW4CK1qZtzcmZCjagfbwKk41sTvKIDKgKhJjV2rdZP0RPtY1rIAMZzFB0h3dRXXme0yteHeSaJ6wh32bsRfYK0cL3AYN-0rDSTVxiljUMIzK_7qt7cdc2DutthqXBgRLBgs")' }}></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-medium text-lg leading-tight text-black group-hover:underline underline-offset-4 decoration-1">Switch PoE+ 24 Puertos</h3>
                                <div className="mt-2 text-lg font-medium text-black">$8,250.00 <span className="text-xs text-gray-400 font-normal">MXN</span></div>
                                <button onClick={(e) => { e.stopPropagation(); navigate('cart'); }} className="mt-3 w-full py-2 bg-transparent border border-black text-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                                    Agregar a cotización
                                </button>
                            </div>
                        </div>
                        {/* Repeat for other related products if needed, reusing structure */}
                         <div className="group flex flex-col cursor-pointer" onClick={() => navigate('product')}>
                            <div className="relative bg-[#F4F4F4] aspect-[4/5] mb-6 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center p-8">
                                    <div className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASr_6TWfAMp67r8QKBJCaIykH4YJ1JudvnkLahHUfOcxS8IR5AJhWexBCwm1Dkh4XXOZjLxXEtZZReNKDjVW9PSuBpmzMUs42m3Yszqpw7zY2ac8Wy5KcxyzbJMwfgzExOzyrjI-9xw_Eyys_XMbI-nJWshlM97kEOacU1LM789K-ZfnJsKvOHTc63NtXAyK-nOR2Mj_vcGI0LsmmKEjVLqzQcO7JKOzq2Un72qAY0-X3QwAEZeF7sTBPZ7Jq3KVpdC1_6gc7y9TM")' }}></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-medium text-lg leading-tight text-black group-hover:underline underline-offset-4 decoration-1">NVR 16 Canales 4K</h3>
                                <div className="mt-2 text-lg font-medium text-black">$5,890.00 <span className="text-xs text-gray-400 font-normal">MXN</span></div>
                                <button onClick={(e) => { e.stopPropagation(); navigate('cart'); }} className="mt-3 w-full py-2 bg-transparent border border-black text-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                                    Agregar a cotización
                                </button>
                            </div>
                        </div>
                        <div className="group flex flex-col cursor-pointer" onClick={() => navigate('product')}>
                            <div className="relative bg-[#F4F4F4] aspect-[4/5] mb-6 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center p-8">
                                    <div className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAm5XOFrrzu34aGbHknecOOAKG1pl4QwWrjQhcsToiAn6EVKynYE7X_ef0YpBczSuXgfWRij9g8UEaNCutpa0lfMCU-Baql_zpcbV1SSZq5OjkeolFJQDgrszqVlbaTMAZBffRLbdxrUd0zQH44DXAUQB77Jl4s_eSafH0mk1z2N7R78yRSOpsg8LeUlFWHKiV5b_1wZ7vIx3PYqR16pnaTjqxMsE32XUtlCAjSR0g5yBbVmPpFvjQLWBDg4xoaD8Mwv9WMlByrxFk")' }}></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-medium text-lg leading-tight text-black group-hover:underline underline-offset-4 decoration-1">Terminal Biométrica IP</h3>
                                <div className="mt-2 text-lg font-medium text-black">$3,150.00 <span className="text-xs text-gray-400 font-normal">MXN</span></div>
                                <button onClick={(e) => { e.stopPropagation(); navigate('cart'); }} className="mt-3 w-full py-2 bg-transparent border border-black text-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                                    Agregar a cotización
                                </button>
                            </div>
                        </div>
                         <div className="group flex flex-col cursor-pointer" onClick={() => navigate('product')}>
                            <div className="relative bg-[#F4F4F4] aspect-[4/5] mb-6 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center p-8">
                                    <div className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMf-T7_6MdoLZVVay_HQkSGHiTA2KXInRCJt0nrx95--9j5L8B3eryybp6hLPF-8UOJ5QUSDXPBzNTuUCx4-pPONTJ3GXoxUa3UFw3TQtl3wPWcTuxZBh-ADtrCcOTd4Zt3_o0UNHrCwKE6HkKjRobp_8EDzeuz9COZ-bbQNVKIEE8vWbi67kQba94ZyWbimOG0pIma8TNdsW_PMAwmVP9nK_0bBvn8EX9OgA7TkjAgklJDfZwUpimnCiMAt3elHnM-YSigBa2Mr0")' }}></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-medium text-lg leading-tight text-black group-hover:underline underline-offset-4 decoration-1">Cámara Bullet 8MP</h3>
                                <div className="mt-2 text-lg font-medium text-black">$3,890.00 <span className="text-xs text-gray-400 font-normal">MXN</span></div>
                                <button onClick={(e) => { e.stopPropagation(); navigate('cart'); }} className="mt-3 w-full py-2 bg-transparent border border-black text-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                                    Agregar a cotización
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};