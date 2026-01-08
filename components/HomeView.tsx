import React, { useState, useEffect } from 'react';
import { ViewName } from '../App';

interface HomeViewProps {
    navigate: (view: ViewName, params?: Record<string, string>) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ navigate }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhsYuBgOrkmVaQeUrwxgJT5j72bnLDbSleWK-gZhI4G5oww-j8U0Ux5ph8mTfSyqiIlDXlzPUtwtI7YrDPOaceZknA4S8l-TBer6zWb2fD6pKv7eLtiVl2W2E4iVPZXgNPij-qFrDLioaDW-vgz2Ljoo6fKts3IBCLx7Oc1qZmbloNeaPF-4iqXooF5yxLiazJVCUOCSFRaW12GU97xvdupRCDqrmJNXN-YOK4Fb70sV81UHsIScD9_3FKW47L9bH2ekKgjAoUmB4",
            title: "CCTV & Video",
            subtitle: "Vigilancia Inteligente",
            icon: "videocam"
        },
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3gzdsRzvq6-35viaoVLXFltYzTZAD2Ty-DcE1DfjOi3i476YgSvQX_NY6Vj8fgNk5W6HJBJU04nON4azyzPCRXbe9y5JljO3w_H6S4Wk-wxZuERsZoiB4BGnMz39_EUw0n-a7FBtNhH26HZMv2cXQBaPWf6zZBG-8Ak2cNPsNiDADUa_E0Wk9_9bVShHF2mNXL7F6NPQySNY0kLmhAtJ1lmcQIFLgVgdyX9gXlJFGBr7sagD9DXC9MVctvhRq5B6G7OPG8zot_aI",
            title: "Networking",
            subtitle: "Conectividad Empresarial",
            icon: "router"
        },
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUTp2KvHVwZRGx8_qf_S6RbgLm_po5LKglsSaS_fSjTGV7q8SYvG7dKyMi_sWsGga2wpvdkRjLnP1ZFia22fyQSXpS-triagOsSvhzzC2ikbjkycqRxTuT508-D_vaqSMqyLNMFhc-n7keZBfQQv8wE9hFi6_guoS1p4mSbR2icPaobDrUskKq974dcDO0kn7HO__w_yzCHDOcglAYhf0gyGnt5LR3zJNh6UG6Gr40UtypNySqXAwpVYkjLjuxJ6EQfadwk9HPR-E",
            title: "Control de Acceso",
            subtitle: "Biometría y Seguridad",
            icon: "fingerprint"
        },
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCucotQzooJpiNO0sX9VUivpD2qCOboC_JiTa6jfrmITNbT7QiQHnKmWOHh_UeYnL6dJKtK9UAKZNv7ggCFxuhP4HDnvXhoga7t_5PbAQdlywQVHjnuIybe9k50rgbbPbCusnEybOJDux02t2B9F_3DxDeUmNJz7EKzc-btvUDVU-gGoDeUpPE-i4Cmm5R2J_4JpQFlQYwdq4chf-QO9I0_r1jFcQLScxryPpvUqG_pnQMki3SjPg_Fg7npZPBF0ShlLbz2sTFzsR8",
            title: "Incendio",
            subtitle: "Detección Temprana",
            icon: "local_fire_department"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="flex flex-col gap-8 lg:col-span-5 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white w-fit">
                            <span className="text-[10px] font-bold uppercase tracking-widest">Distribuidor Autorizado</span>
                        </div>
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-black">
                                Seguridad<br />
                                Inteligente,<br />
                                <span className="font-serif italic font-normal">Era Moderna.</span>
                            </h1>
                            <p className="text-lg text-text-muted leading-relaxed font-light max-w-md">
                                Infraestructura de red y seguridad electrónica de alta gama. Exclusivo para integradores y grandes proyectos.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button onClick={() => navigate('cart')} className="h-12 px-8 bg-black hover:bg-gray-800 text-white text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group">
                                <span>Cotizar Proyecto</span>
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <button onClick={() => navigate('catalog')} className="h-12 px-8 bg-transparent border border-black hover:bg-black hover:text-white text-black text-sm uppercase tracking-wider transition-all duration-300">
                                Explorar Catálogo
                            </button>
                        </div>
                        <div className="flex items-center gap-8 pt-6 border-t border-gray-100 mt-2">
                            <div className="flex flex-col gap-1">
                                <span className="text-xs uppercase tracking-wider text-gray-400">Stock</span>
                                <span className="text-sm font-medium">Tiempo Real</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs uppercase tracking-wider text-gray-400">Garantía</span>
                                <span className="text-sm font-medium">Directa de Fábrica</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative order-1 lg:order-2 lg:col-span-7 h-full min-h-[400px] aspect-[4/3] overflow-hidden group rounded-sm shadow-xl shadow-gray-100">
                        {slides.map((slide, index) => (
                             <div 
                                key={index}
                                onClick={() => navigate('catalog')}
                                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out cursor-pointer ${
                                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                            >
                                <div className="w-full h-full bg-gray-50 relative">
                                     <div className="absolute inset-0 bg-black/5 z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
                                     <div 
                                        className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out" 
                                        style={{ backgroundImage: `url("${slide.image}")` }}
                                    ></div>
                                    <div className="absolute bottom-0 left-0 z-20 bg-black text-white p-6 min-w-[220px]">
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-2xl font-light">{slide.icon}</span>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest mb-1 opacity-70">{slide.title}</p>
                                                <p className="text-lg font-serif italic whitespace-nowrap">{slide.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                         <div className="absolute bottom-4 right-4 z-30 flex gap-2">
                            {slides.map((_, idx) => (
                                <button 
                                    key={idx} 
                                    onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-20 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-xs font-bold uppercase tracking-widest text-black/40 mb-3 block">Nuestras Soluciones</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black mb-4">Categorías Principales</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <button onClick={() => navigate('catalog')} className="group relative aspect-square w-full block overflow-hidden text-left">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhsYuBgOrkmVaQeUrwxgJT5j72bnLDbSleWK-gZhI4G5oww-j8U0Ux5ph8mTfSyqiIlDXlzPUtwtI7YrDPOaceZknA4S8l-TBer6zWb2fD6pKv7eLtiVl2W2E4iVPZXgNPij-qFrDLioaDW-vgz2Ljoo6fKts3IBCLx7Oc1qZmbloNeaPF-4iqXooF5yxLiazJVCUOCSFRaW12GU97xvdupRCDqrmJNXN-YOK4Fb70sV81UHsIScD9_3FKW47L9bH2ekKgjAoUmB4")' }}></div>
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 md:p-14">
                                <h3 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">CCTV &amp; Video</h3>
                                <p className="text-white/90 text-sm md:text-base uppercase tracking-widest font-medium">Vigilancia Inteligente</p>
                            </div>
                        </button>
                        <button onClick={() => navigate('catalog')} className="group relative aspect-square w-full block overflow-hidden text-left">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3gzdsRzvq6-35viaoVLXFltYzTZAD2Ty-DcE1DfjOi3i476YgSvQX_NY6Vj8fgNk5W6HJBJU04nON4azyzPCRXbe9y5JljO3w_H6S4Wk-wxZuERsZoiB4BGnMz39_EUw0n-a7FBtNhH26HZMv2cXQBaPWf6zZBG-8Ak2cNPsNiDADUa_E0Wk9_9bVShHF2mNXL7F6NPQySNY0kLmhAtJ1lmcQIFLgVgdyX9gXlJFGBr7sagD9DXC9MVctvhRq5B6G7OPG8zot_aI")' }}></div>
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 md:p-14">
                                <h3 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">Networking</h3>
                                <p className="text-white/90 text-sm md:text-base uppercase tracking-widest font-medium">Conectividad Empresarial</p>
                            </div>
                        </button>
                        <button onClick={() => navigate('catalog')} className="group relative aspect-square w-full block overflow-hidden text-left">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUTp2KvHVwZRGx8_qf_S6RbgLm_po5LKglsSaS_fSjTGV7q8SYvG7dKyMi_sWsGga2wpvdkRjLnP1ZFia22fyQSXpS-triagOsSvhzzC2ikbjkycqRxTuT508-D_vaqSMqyLNMFhc-n7keZBfQQv8wE9hFi6_guoS1p4mSbR2icPaobDrUskKq974dcDO0kn7HO__w_yzCHDOcglAYhf0gyGnt5LR3zJNh6UG6Gr40UtypNySqXAwpVYkjLjuxJ6EQfadwk9HPR-E")' }}></div>
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 md:p-14">
                                <h3 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">Control de Acceso</h3>
                                <p className="text-white/90 text-sm md:text-base uppercase tracking-widest font-medium">Biometría y Seguridad</p>
                            </div>
                        </button>
                        <button onClick={() => navigate('catalog')} className="group relative aspect-square w-full block overflow-hidden text-left">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCucotQzooJpiNO0sX9VUivpD2qCOboC_JiTa6jfrmITNbT7QiQHnKmWOHh_UeYnL6dJKtK9UAKZNv7ggCFxuhP4HDnvXhoga7t_5PbAQdlywQVHjnuIybe9k50rgbbPbCusnEybOJDux02t2B9F_3DxDeUmNJz7EKzc-btvUDVU-gGoDeUpPE-i4Cmm5R2J_4JpQFlQYwdq4chf-QO9I0_r1jFcQLScxryPpvUqG_pnQMki3SjPg_Fg7npZPBF0ShlLbz2sTFzsR8")' }}></div>
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 md:p-14">
                                <h3 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">Incendio</h3>
                                <p className="text-white/90 text-sm md:text-base uppercase tracking-widest font-medium">Detección Temprana</p>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Top Products */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-black/40 mb-3 block">Top Integración</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black">Lo más cotizado</h2>
                        </div>
                        <button onClick={() => navigate('catalog')} className="text-sm border border-black px-6 py-3 uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 mt-6 md:mt-0">
                            Ver todo el catálogo
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                        {/* Product 1 */}
                        <div className="group flex flex-col cursor-pointer" onClick={() => navigate('product', { sku: 'HIK-2CD-2143' })}>
                            <div className="relative bg-[#F4F4F4] aspect-[4/5] mb-6 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center p-8">
                                    <div className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMf-T7_6MdoLZVVay_HQkSGHiTA2KXInRCJt0nrx95--9j5L8B3eryybp6hLPF-8UOJ5QUSDXPBzNTuUCx4-pPONTJ3GXoxUa3UFw3TQtl3wPWcTuxZBh-ADtrCcOTd4Zt3_o0UNHrCwKE6HkKjRobp_8EDzeuz9COZ-bbQNVKIEE8vWbi67kQba94ZyWbimOG0pIma8TNdsW_PMAwmVP9nK_0bBvn8EX9OgA7TkjAgklJDfZwUpimnCiMAt3elHnM-YSigBa2Mr0")' }}></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-medium text-lg leading-tight text-black group-hover:underline underline-offset-4 decoration-1">Cámara IP Dome 4MP IR30m</h3>
                                <p className="text-sm text-gray-500 font-light">SKU: HIK-2CD-2143</p>
                                <div className="mt-2 text-lg font-medium text-black">$2,499.00 <span className="text-xs text-gray-400 font-normal">MXN</span></div>
                                <div className="mt-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button onClick={(e) => { e.stopPropagation(); navigate('cart'); }} className="w-full py-2 bg-black text-white text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
                                        Agregar a cotización
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="group flex flex-col cursor-pointer" onClick={() => navigate('product', { sku: 'UBI-USW-24' })}>
                            <div className="relative bg-[#F4F4F4] aspect-[4/5] mb-6 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center p-8">
                                    <div className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7giQuMDqXCroDgdiDobRWaYLldZBiHCHCBOgbnvQNy62dB8FEsYDOLbRfrmZ9v0jBIXPv_biFgsjd6CWHXDfz9zQwpth_XjEz3_k0pChMpgCSRiCF36itsv9QW-5Km56JdEdDBUvwzW4CK1qZtzcmZCjagfbwKk41sTvKIDKgKhJjV2rdZP0RPtY1rIAMZzFB0h3dRXXme0yteHeSaJ6wh32bsRfYK0cL3AYN-0rDSTVxiljUMIzK_7qt7cdc2DutthqXBgRLBgs")' }}></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-medium text-lg leading-tight text-black group-hover:underline underline-offset-4 decoration-1">Switch PoE+ 24 Puertos Gigabit</h3>
                                <p className="text-sm text-gray-500 font-light">SKU: UBI-USW-24</p>
                                <div className="mt-2 text-lg font-medium text-black">$8,250.00 <span className="text-xs text-gray-400 font-normal">MXN</span></div>
                                <div className="mt-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button onClick={(e) => { e.stopPropagation(); navigate('cart'); }} className="w-full py-2 bg-black text-white text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
                                        Agregar a cotización
                                    </button>
                                </div>
                            </div>
                        </div>

                         {/* Product 3 */}
                         <div className="group flex flex-col cursor-pointer" onClick={() => navigate('product', { sku: 'ZKT-SF400' })}>
                            <div className="relative bg-[#F4F4F4] aspect-[4/5] mb-6 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center p-8">
                                    <div className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAm5XOFrrzu34aGbHknecOOAKG1pl4QwWrjQhcsToiAn6EVKynYE7X_ef0YpBczSuXgfWRij9g8UEaNCutpa0lfMCU-Baql_zpcbV1SSZq5OjkeolFJQDgrszqVlbaTMAZBffRLbdxrUd0zQH44DXAUQB77Jl4s_eSafH0mk1z2N7R78yRSOpsg8LeUlFWHKiV5b_1wZ7vIx3PYqR16pnaTjqxMsE32XUtlCAjSR0g5yBbVmPpFvjQLWBDg4xoaD8Mwv9WMlByrxFk")' }}></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-medium text-lg leading-tight text-black group-hover:underline underline-offset-4 decoration-1">Terminal Biométrica IP Huella</h3>
                                <p className="text-sm text-gray-500 font-light">SKU: ZKT-SF400</p>
                                <div className="mt-2 text-lg font-medium text-black">$3,150.00 <span className="text-xs text-gray-400 font-normal">MXN</span></div>
                                <div className="mt-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button onClick={(e) => { e.stopPropagation(); navigate('cart'); }} className="w-full py-2 bg-black text-white text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
                                        Agregar a cotización
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="group flex flex-col cursor-pointer" onClick={() => navigate('product', { sku: 'DAH-NVR5216' })}>
                            <div className="relative bg-[#F4F4F4] aspect-[4/5] mb-6 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center p-8">
                                    <div className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASr_6TWfAMp67r8QKBJCaIykH4YJ1JudvnkLahHUfOcxS8IR5AJhWexBCwm1Dkh4XXOZjLxXEtZZReNKDjVW9PSuBpmzMUs42m3Yszqpw7zY2ac8Wy5KcxyzbJMwfgzExOzyrjI-9xw_Eyys_XMbI-nJWshlM97kEOacU1LM789K-ZfnJsKvOHTc63NtXAyK-nOR2Mj_vcGI0LsmmKEjVLqzQcO7JKOzq2Un72qAY0-X3QwAEZeF7sTBPZ7Jq3KVpdC1_6gc7y9TM")' }}></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-medium text-lg leading-tight text-black group-hover:underline underline-offset-4 decoration-1">NVR 16 Canales 4K H.265+</h3>
                                <p className="text-sm text-gray-500 font-light">SKU: DAH-NVR5216</p>
                                <div className="mt-2 text-lg font-medium text-black">$5,890.00 <span className="text-xs text-gray-400 font-normal">MXN</span></div>
                                <div className="mt-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button onClick={(e) => { e.stopPropagation(); navigate('cart'); }} className="w-full py-2 bg-black text-white text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
                                        Agregar a cotización
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-[#F4F4F4] text-black">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-4">
                            <span className="block text-xs font-bold uppercase tracking-widest mb-6 text-black/40">Proceso de Compra</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-8">Simplificamos<br /><span className="italic text-gray-400">lo complejo.</span></h2>
                            <p className="text-gray-600 leading-relaxed mb-8 font-light max-w-sm">Diseñado meticulosamente para integradores y empresas que requieren agilidad y precisión absoluta.</p>
                            <button onClick={() => navigate('catalog')} className="inline-block border-b border-black pb-1 text-sm uppercase tracking-wider hover:text-gray-600 hover:border-gray-600 transition-colors">
                                Comenzar ahora
                            </button>
                        </div>
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                            <div className="flex flex-col gap-6 border-t border-black/10 pt-8">
                                <span className="text-4xl font-serif text-black/10">01</span>
                                <div>
                                    <h3 className="text-lg font-medium mb-3">Explora</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">Navega nuestro extenso catálogo de seguridad y redes con stock actualizado en tiempo real.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 border-t border-black/10 pt-8">
                                <span className="text-4xl font-serif text-black/10">02</span>
                                <div>
                                    <h3 className="text-lg font-medium mb-3">Cotiza</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">Agrega productos a tu carrito de cotización sin compromiso. Transparencia total.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 border-t border-black/10 pt-8">
                                <span className="text-4xl font-serif text-black/10">03</span>
                                <div>
                                    <h3 className="text-lg font-medium mb-3">Recibe Oferta</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">Obtén una propuesta formal con precios de distribuidor en minutos directamente en tu correo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Partners Strip */}
             <section className="py-24 bg-white border-b border-black">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/3">
                            <h3 className="font-serif text-2xl font-light">Socios Tecnológicos<br />por principales marcas</h3>
                        </div>
                        <div className="md:w-2/3 flex flex-wrap justify-between items-center gap-8 md:gap-12 opacity-100">
                            <a href="https://www.panduit.com" target="_blank" rel="noopener noreferrer" className="text-xl font-bold font-sans tracking-tighter text-black uppercase hover:opacity-50 transition-opacity">Panduit</a>
                            <a href="https://www.commscope.com" target="_blank" rel="noopener noreferrer" className="text-xl font-bold font-sans tracking-tighter text-black uppercase hover:opacity-50 transition-opacity">Systimax / CommScope</a>
                            <a href="https://hoffman.nvent.com" target="_blank" rel="noopener noreferrer" className="text-xl font-bold font-sans tracking-tighter text-black uppercase hover:opacity-50 transition-opacity">nVent Hoffman</a>
                            <a href="https://www.apc.com" target="_blank" rel="noopener noreferrer" className="text-xl font-bold font-sans tracking-tighter text-black uppercase hover:opacity-50 transition-opacity">APC (by Schneider Electric)</a>
                            <a href="https://www.samsung.com" target="_blank" rel="noopener noreferrer" className="text-xl font-bold font-sans tracking-tighter text-black uppercase hover:opacity-50 transition-opacity">Samsung</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};