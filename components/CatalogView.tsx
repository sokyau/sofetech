import React, { useState, useEffect } from 'react';
import { ViewName } from '../App';

interface CatalogViewProps {
    navigate: (view: ViewName, params?: Record<string, string>) => void;
    searchQuery?: string;
}

export const CatalogView: React.FC<CatalogViewProps> = ({ navigate, searchQuery }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // If a search query is present, ensure we aren't filtering by category unless explicitly clicked afterwards
    useEffect(() => {
        if (searchQuery) {
            setSelectedCategory(null);
        }
    }, [searchQuery]);

    const categories = [
        {
            title: "CCTV & VIDEO",
            subtitle: "VIGILANCIA INTELIGENTE",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhsYuBgOrkmVaQeUrwxgJT5j72bnLDbSleWK-gZhI4G5oww-j8U0Ux5ph8mTfSyqiIlDXlzPUtwtI7YrDPOaceZknA4S8l-TBer6zWb2fD6pKv7eLtiVl2W2E4iVPZXgNPij-qFrDLioaDW-vgz2Ljoo6fKts3IBCLx7Oc1qZmbloNeaPF-4iqXooF5yxLiazJVCUOCSFRaW12GU97xvdupRCDqrmJNXN-YOK4Fb70sV81UHsIScD9_3FKW47L9bH2ekKgjAoUmB4"
        },
        {
            title: "NETWORKING",
            subtitle: "CONECTIVIDAD EMPRESARIAL",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3gzdsRzvq6-35viaoVLXFltYzTZAD2Ty-DcE1DfjOi3i476YgSvQX_NY6Vj8fgNk5W6HJBJU04nON4azyzPCRXbe9y5JljO3w_H6S4Wk-wxZuERsZoiB4BGnMz39_EUw0n-a7FBtNhH26HZMv2cXQBaPWf6zZBG-8Ak2cNPsNiDADUa_E0Wk9_9bVShHF2mNXL7F6NPQySNY0kLmhAtJ1lmcQIFLgVgdyX9gXlJFGBr7sagD9DXC9MVctvhRq5B6G7OPG8zot_aI"
        },
        {
            title: "CONTROL DE ACCESO",
            subtitle: "BIOMETRÍA Y SEGURIDAD",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUTp2KvHVwZRGx8_qf_S6RbgLm_po5LKglsSaS_fSjTGV7q8SYvG7dKyMi_sWsGga2wpvdkRjLnP1ZFia22fyQSXpS-triagOsSvhzzC2ikbjkycqRxTuT508-D_vaqSMqyLNMFhc-n7keZBfQQv8wE9hFi6_guoS1p4mSbR2icPaobDrUskKq974dcDO0kn7HO__w_yzCHDOcglAYhf0gyGnt5LR3zJNh6UG6Gr40UtypNySqXAwpVYkjLjuxJ6EQfadwk9HPR-E"
        },
        {
            title: "INCENDIO",
            subtitle: "DETECCIÓN TEMPRANA",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCucotQzooJpiNO0sX9VUivpD2qCOboC_JiTa6jfrmITNbT7QiQHnKmWOHh_UeYnL6dJKtK9UAKZNv7ggCFxuhP4HDnvXhoga7t_5PbAQdlywQVHjnuIybe9k50rgbbPbCusnEybOJDux02t2B9F_3DxDeUmNJz7EKzc-btvUDVU-gGoDeUpPE-i4Cmm5R2J_4JpQFlQYwdq4chf-QO9I0_r1jFcQLScxryPpvUqG_pnQMki3SjPg_Fg7npZPBF0ShlLbz2sTFzsR8"
        }
    ];

    // Product data to render, simulating a collection view (e.g., Access Control or General Catalog)
    const allProducts = [
        {
            title: "Cámara IP Dome 4MP IR30m",
            sku: "HIK-2CD-2143",
            price: "$2,499.00",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMf-T7_6MdoLZVVay_HQkSGHiTA2KXInRCJt0nrx95--9j5L8B3eryybp6hLPF-8UOJ5QUSDXPBzNTuUCx4-pPONTJ3GXoxUa3UFw3TQtl3wPWcTuxZBh-ADtrCcOTd4Zt3_o0UNHrCwKE6HkKjRobp_8EDzeuz9COZ-bbQNVKIEE8vWbi67kQba94ZyWbimOG0pIma8TNdsW_PMAwmVP9nK_0bBvn8EX9OgA7TkjAgklJDfZwUpimnCiMAt3elHnM-YSigBa2Mr0"
        },
        {
            title: "Switch PoE+ 24 Puertos Gigabit",
            sku: "UBI-USW-24",
            price: "$8,250.00",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7giQuMDqXCroDgdiDobRWaYLldZBiHCHCBOgbnvQNy62dB8FEsYDOLbRfrmZ9v0jBIXPv_biFgsjd6CWHXDfz9zQwpth_XjEz3_k0pChMpgCSRiCF36itsv9QW-5Km56JdEdDBUvwzW4CK1qZtzcmZCjagfbwKk41sTvKIDKgKhJjV2rdZP0RPtY1rIAMZzFB0h3dRXXme0yteHeSaJ6wh32bsRfYK0cL3AYN-0rDSTVxiljUMIzK_7qt7cdc2DutthqXBgRLBgs"
        },
        {
            title: "Terminal Biométrica IP Huella",
            sku: "ZKT-SF400",
            price: "$3,150.00",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm5XOFrrzu34aGbHknecOOAKG1pl4QwWrjQhcsToiAn6EVKynYE7X_ef0YpBczSuXgfWRij9g8UEaNCutpa0lfMCU-Baql_zpcbV1SSZq5OjkeolFJQDgrszqVlbaTMAZBffRLbdxrUd0zQH44DXAUQB77Jl4s_eSafH0mk1z2N7R78yRSOpsg8LeUlFWHKiV5b_1wZ7vIx3PYqR16pnaTjqxMsE32XUtlCAjSR0g5yBbVmPpFvjQLWBDg4xoaD8Mwv9WMlByrxFk"
        },
        {
            title: "NVR 16 Canales 4K H.265+",
            sku: "DAH-NVR5216",
            price: "$5,890.00",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASr_6TWfAMp67r8QKBJCaIykH4YJ1JudvnkLahHUfOcxS8IR5AJhWexBCwm1Dkh4XXOZjLxXEtZZReNKDjVW9PSuBpmzMUs42m3Yszqpw7zY2ac8Wy5KcxyzbJMwfgzExOzyrjI-9xw_Eyys_XMbI-nJWshlM97kEOacU1LM789K-ZfnJsKvOHTc63NtXAyK-nOR2Mj_vcGI0LsmmKEjVLqzQcO7JKOzq2Un72qAY0-X3QwAEZeF7sTBPZ7Jq3KVpdC1_6gc7y9TM"
        },
         {
            title: "Cámara Bullet 8MP 4K",
            sku: "HIK-2CD-2T86",
            price: "$3,890.00",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMf-T7_6MdoLZVVay_HQkSGHiTA2KXInRCJt0nrx95--9j5L8B3eryybp6hLPF-8UOJ5QUSDXPBzNTuUCx4-pPONTJ3GXoxUa3UFw3TQtl3wPWcTuxZBh-ADtrCcOTd4Zt3_o0UNHrCwKE6HkKjRobp_8EDzeuz9COZ-bbQNVKIEE8vWbi67kQba94ZyWbimOG0pIma8TNdsW_PMAwmVP9nK_0bBvn8EX9OgA7TkjAgklJDfZwUpimnCiMAt3elHnM-YSigBa2Mr0"
        },
        {
            title: "Kit de Alarma Inalámbrica",
            sku: "DSC-NEO-KIT",
            price: "$4,200.00",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASr_6TWfAMp67r8QKBJCaIykH4YJ1JudvnkLahHUfOcxS8IR5AJhWexBCwm1Dkh4XXOZjLxXEtZZReNKDjVW9PSuBpmzMUs42m3Yszqpw7zY2ac8Wy5KcxyzbJMwfgzExOzyrjI-9xw_Eyys_XMbI-nJWshlM97kEOacU1LM789K-ZfnJsKvOHTc63NtXAyK-nOR2Mj_vcGI0LsmmKEjVLqzQcO7JKOzq2Un72qAY0-X3QwAEZeF7sTBPZ7Jq3KVpdC1_6gc7y9TM"
        },
         {
            title: "Video Portero IP WiFi",
            sku: "HIK-DS-KV6",
            price: "$2,850.00",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm5XOFrrzu34aGbHknecOOAKG1pl4QwWrjQhcsToiAn6EVKynYE7X_ef0YpBczSuXgfWRij9g8UEaNCutpa0lfMCU-Baql_zpcbV1SSZq5OjkeolFJQDgrszqVlbaTMAZBffRLbdxrUd0zQH44DXAUQB77Jl4s_eSafH0mk1z2N7R78yRSOpsg8LeUlFWHKiV5b_1wZ7vIx3PYqR16pnaTjqxMsE32XUtlCAjSR0g5yBbVmPpFvjQLWBDg4xoaD8Mwv9WMlByrxFk"
        },
         {
            title: "Access Point WiFi 6 Pro",
            sku: "UBI-U6-PRO",
            price: "$3,450.00",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7giQuMDqXCroDgdiDobRWaYLldZBiHCHCBOgbnvQNy62dB8FEsYDOLbRfrmZ9v0jBIXPv_biFgsjd6CWHXDfz9zQwpth_XjEz3_k0pChMpgCSRiCF36itsv9QW-5Km56JdEdDBUvwzW4CK1qZtzcmZCjagfbwKk41sTvKIDKgKhJjV2rdZP0RPtY1rIAMZzFB0h3dRXXme0yteHeSaJ6wh32bsRfYK0cL3AYN-0rDSTVxiljUMIzK_7qt7cdc2DutthqXBgRLBgs"
        }
    ];

    // Filter products based on search query
    const displayedProducts = searchQuery 
        ? allProducts.filter(p => 
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            p.sku.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : allProducts;

    if (!selectedCategory && !searchQuery) {
        return (
            <div className="w-full animate-fade-in">
                 <section className="w-full py-16 md:py-20 px-6 md:px-12 max-w-[1440px] mx-auto text-center border-b border-gray-100">
                    <div className="max-w-3xl mx-auto space-y-4">
                        <h1 className="text-5xl md:text-6xl font-light tracking-tight text-black">
                            Categorías Principales
                        </h1>
                        <p className="text-lg text-text-muted font-light">
                            Selecciona una categoría para explorar nuestras soluciones.
                        </p>
                    </div>
                </section>
                <section className="w-full py-12 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {categories.map((cat, index) => (
                             <button key={index} onClick={() => setSelectedCategory(cat.title)} className="group relative aspect-square w-full block overflow-hidden text-left">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                                    style={{ backgroundImage: `url("${cat.image}")` }}></div>
                                <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 md:p-14">
                                    <h3 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">{cat.title}</h3>
                                    <p className="text-white/90 text-sm md:text-base uppercase tracking-widest font-medium">{cat.subtitle}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="w-full animate-fade-in">
             <section className="w-full py-16 md:py-20 px-6 md:px-12 max-w-[1440px] mx-auto text-center border-b border-gray-100">
                 <div className="flex justify-center mb-8">
                    <button onClick={() => { setSelectedCategory(null); navigate('catalog'); }} className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 transition-colors">
                        &larr; Volver a Categorías
                    </button>
                 </div>
                <div className="max-w-3xl mx-auto space-y-4">
                    <h1 className="text-5xl md:text-6xl font-light tracking-tight text-black">
                        {searchQuery ? `Resultados: "${searchQuery}"` : selectedCategory}
                    </h1>
                    <p className="text-lg text-text-muted font-light">
                        {searchQuery 
                            ? `${displayedProducts.length} productos encontrados.` 
                            : "Explora nuestra gama completa de soluciones de seguridad."}
                    </p>
                </div>
            </section>
            
            <section className="w-full py-8 px-6 md:px-12 max-w-[1440px] mx-auto sticky top-20 bg-white/95 backdrop-blur z-40 border-b border-black/5">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                     <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-gray-500 whitespace-nowrap">
                            <span className="material-symbols-outlined text-lg">filter_list</span>
                            Filtrar
                        </button>
                        <div className="h-4 w-[1px] bg-gray-300 mx-2 hidden md:block"></div>
                        <button className="text-xs font-bold uppercase tracking-widest hover:text-gray-500 whitespace-nowrap">Ordenar por: Relevancia</button>
                    </div>
                     <div className="relative w-full md:w-64">
                        <input className="w-full bg-gray-50 border-none py-2 px-4 text-xs uppercase tracking-wide focus:ring-1 focus:ring-black placeholder:text-gray-400" type="text" placeholder="Buscar producto..." />
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
                {displayedProducts.length === 0 ? (
                     <div className="py-24 text-center">
                        <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">search_off</span>
                        <h3 className="text-xl font-medium text-black">No se encontraron productos</h3>
                        <p className="text-gray-500 mt-2">Intenta con otros términos de búsqueda.</p>
                     </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                        {displayedProducts.map((product, index) => (
                            <div key={index} className="group flex flex-col cursor-pointer" onClick={() => navigate('product', { sku: product.sku })}>
                                <div className="relative bg-[#F4F4F4] aspect-[4/5] mb-6 overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center p-8">
                                        <div className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
                                            style={{ backgroundImage: `url("${product.image}")` }}></div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-medium text-lg leading-tight text-black group-hover:underline underline-offset-4 decoration-1">{product.title}</h3>
                                    <p className="text-sm text-gray-500 font-light">SKU: {product.sku}</p>
                                    <div className="mt-2 text-lg font-medium text-black">{product.price} <span className="text-xs text-gray-400 font-normal">MXN</span></div>
                                    <div className="mt-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button 
                                            onClick={(e) => { 
                                                e.stopPropagation(); 
                                                navigate('cart', { addSku: product.sku }); 
                                            }} 
                                            className="w-full py-2 bg-black text-white text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors"
                                        >
                                            Agregar a cotización
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};