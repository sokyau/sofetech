import React, { useState } from 'react';
import { ViewName } from '../App';

interface CartViewProps {
    navigate: (view: ViewName, params?: Record<string, string>) => void;
}

interface CartItem {
    id: string;
    sku: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export const CartView: React.FC<CartViewProps> = ({ navigate }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: '1',
            sku: 'HIK-2CD-2143',
            name: 'Cámara IP Dome 4MP IR30m',
            price: 2499.00,
            quantity: 4,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMf-T7_6MdoLZVVay_HQkSGHiTA2KXInRCJt0nrx95--9j5L8B3eryybp6hLPF-8UOJ5QUSDXPBzNTuUCx4-pPONTJ3GXoxUa3UFw3TQtl3wPWcTuxZBh-ADtrCcOTd4Zt3_o0UNHrCwKE6HkKjRobp_8EDzeuz9COZ-bbQNVKIEE8vWbi67kQba94ZyWbimOG0pIma8TNdsW_PMAwmVP9nK_0bBvn8EX9OgA7TkjAgklJDfZwUpimnCiMAt3elHnM-YSigBa2Mr0"
        },
        {
            id: '2',
            sku: 'UBI-USW-24',
            name: 'Switch PoE+ 24 Puertos Gigabit',
            price: 8250.00,
            quantity: 1,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7giQuMDqXCroDgdiDobRWaYLldZBiHCHCBOgbnvQNy62dB8FEsYDOLbRfrmZ9v0jBIXPv_biFgsjd6CWHXDfz9zQwpth_XjEz3_k0pChMpgCSRiCF36itsv9QW-5Km56JdEdDBUvwzW4CK1qZtzcmZCjagfbwKk41sTvKIDKgKhJjV2rdZP0RPtY1rIAMZzFB0h3dRXXme0yteHeSaJ6wh32bsRfYK0cL3AYN-0rDSTVxiljUMIzK_7qt7cdc2DutthqXBgRLBgs"
        },
        {
            id: '3',
            sku: 'DAH-NVR5216',
            name: 'NVR 16 Canales 4K H.265+',
            price: 5890.00,
            quantity: 1,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASr_6TWfAMp67r8QKBJCaIykH4YJ1JudvnkLahHUfOcxS8IR5AJhWexBCwm1Dkh4XXOZjLxXEtZZReNKDjVW9PSuBpmzMUs42m3Yszqpw7zY2ac8Wy5KcxyzbJMwfgzExOzyrjI-9xw_Eyys_XMbI-nJWshlM97kEOacU1LM789K-ZfnJsKvOHTc63NtXAyK-nOR2Mj_vcGI0LsmmKEjVLqzQcO7JKOzq2Un72qAY0-X3QwAEZeF7sTBPZ7Jq3KVpdC1_6gc7y9TM"
        }
    ]);

    const updateQuantity = (id: string, delta: number) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const removeItem = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(amount);
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            navigate('quote-success');
        }, 600);
    };

    return (
        <div className="flex-grow pt-8 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-black/10 pb-6 mb-12">
                <div>
                    <nav className="flex text-xs text-gray-500 mb-2 gap-2 uppercase tracking-wide">
                        <button onClick={() => navigate('home')} className="hover:text-black">Inicio</button>
                        <span>/</span>
                        <span className="text-black font-medium">Cotización</span>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-light text-black">Solicitar Cotización</h1>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-sm text-gray-500">ID de Sesión: <span className="font-mono text-black">#REQ-8921</span></p>
                </div>
            </div>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-7 flex flex-col gap-10">
                    <div>
                        <h2 className="text-lg font-medium uppercase tracking-tight mb-6 flex items-center gap-2">
                            Resumen de Cotización
                            <span className="bg-gray-100 text-xs px-2 py-1 rounded-full text-gray-600 font-bold">{cartItems.length} items</span>
                        </h2>
                        {cartItems.length === 0 ? (
                            <div className="py-12 text-center bg-gray-50 border border-dashed border-gray-300">
                                <span className="material-symbols-outlined text-4xl text-gray-300 mb-3">shopping_cart_off</span>
                                <p className="text-gray-500 text-sm">Tu carrito de cotización está vacío.</p>
                                <button onClick={() => navigate('catalog')} className="mt-4 text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 transition-colors">
                                    Ir al catálogo
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col divide-y divide-gray-100 border-t border-b border-gray-100">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="py-6 flex flex-col sm:flex-row gap-6 items-start group">
                                        <div className="w-24 h-24 bg-gray-50 flex-shrink-0 flex items-center justify-center p-2 border border-gray-100">
                                            <img alt={item.name} className="w-full h-full object-contain mix-blend-multiply" src={item.image} />
                                        </div>
                                        <div className="flex-grow flex flex-col gap-2 w-full">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-medium text-black text-base leading-tight">{item.name}</h3>
                                                    <p className="text-xs text-gray-400 font-mono mt-1">SKU: {item.sku}</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="block font-medium text-black">{formatCurrency(item.price)}</span>
                                                    <span className="text-[10px] text-gray-400 uppercase">Unitario</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-end mt-2">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center border border-gray-200 h-9">
                                                        <button 
                                                            onClick={() => updateQuantity(item.id, -1)}
                                                            className="w-8 h-full flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-black transition-colors" 
                                                            type="button"
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            <span className="material-symbols-outlined text-base">remove</span>
                                                        </button>
                                                        <input 
                                                            className="w-10 h-full border-none text-center text-sm p-0 focus:ring-0 appearance-none bg-transparent font-medium" 
                                                            min="1" 
                                                            type="number" 
                                                            value={item.quantity}
                                                            readOnly
                                                        />
                                                        <button 
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                            className="w-8 h-full flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-black transition-colors" 
                                                            type="button"
                                                        >
                                                            <span className="material-symbols-outlined text-base">add</span>
                                                        </button>
                                                    </div>
                                                    <button 
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-xs text-red-600 hover:text-red-800 underline decoration-red-200 hover:decoration-red-800 underline-offset-4 transition-all"
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-sm font-bold text-black">{formatCurrency(item.price * item.quantity)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {cartItems.length > 0 && (
                            <div className="bg-gray-50 p-6 md:p-8 flex flex-col gap-3 mt-4">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Subtotal (sin IVA)</span>
                                    <span className="font-mono text-black">{formatCurrency(subtotal)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>IVA (16%)</span>
                                    <span className="font-mono text-black">{formatCurrency(iva)}</span>
                                </div>
                                <div className="h-px bg-gray-200 my-2"></div>
                                <div className="flex justify-between text-xl font-medium text-black items-end">
                                    <span>Total (con IVA)</span>
                                    <span className="font-mono">{formatCurrency(total)}</span>
                                </div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">* Precios en MXN. IVA calculado al 16%.</p>
                            </div>
                        )}
                        <div className="hidden lg:flex gap-4">
                            <button onClick={() => navigate('catalog')} className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">Volver al catálogo</button>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-28 bg-white border border-black p-8 shadow-2xl shadow-gray-200/50">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-lg font-medium uppercase tracking-tight">Datos para cotización</h2>
                            <button onClick={() => navigate('account')} className="text-xs font-bold underline decoration-1 underline-offset-2">Iniciar sesión</button>
                        </div>
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black" htmlFor="email">Correo electrónico <span className="text-red-600">*</span></label>
                                <input className="w-full border-gray-300 focus:border-black focus:ring-0 text-sm py-3 px-4 placeholder:text-gray-300 transition-colors" id="email" type="email" placeholder="ej. nombre@empresa.com" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black" htmlFor="nombre">Nombre(s) <span className="text-red-600">*</span></label>
                                    <input className="w-full border-gray-300 focus:border-black focus:ring-0 text-sm py-3 px-4 placeholder:text-gray-300 transition-colors" id="nombre" type="text" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black" htmlFor="apellidos">Apellidos <span className="text-red-600">*</span></label>
                                    <input className="w-full border-gray-300 focus:border-black focus:ring-0 text-sm py-3 px-4 placeholder:text-gray-300 transition-colors" id="apellidos" type="text" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black" htmlFor="empresa">Empresa / Proyecto <span className="text-red-600">*</span></label>
                                <input className="w-full border-gray-300 focus:border-black focus:ring-0 text-sm py-3 px-4 placeholder:text-gray-300 transition-colors" id="empresa" type="text" placeholder="Nombre de la empresa o dependencia" required />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black" htmlFor="direccion">Dirección <span className="text-red-600">*</span></label>
                                <input className="w-full border-gray-300 focus:border-black focus:ring-0 text-sm py-3 px-4 placeholder:text-gray-300 transition-colors" id="direccion" type="text" required />
                            </div>
                            <div className="grid grid-cols-6 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black" htmlFor="cp">C.P. <span className="text-red-600">*</span></label>
                                    <input className="w-full border-red-500 text-red-900 focus:border-red-500 focus:ring-0 text-sm py-3 px-4 placeholder:text-gray-300 bg-red-50 transition-colors" id="cp" type="text" defaultValue="00" />
                                    <span className="text-[10px] text-red-600 mt-1 block">Código postal inválido</span>
                                </div>
                                <div className="col-span-4">
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black" htmlFor="ciudad">Ciudad <span className="text-red-600">*</span></label>
                                    <input className="w-full border-gray-300 focus:border-black focus:ring-0 text-sm py-3 px-4 placeholder:text-gray-300 transition-colors" id="ciudad" type="text" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black" htmlFor="estado">Estado <span className="text-red-600">*</span></label>
                                    <select className="w-full border-gray-300 focus:border-black focus:ring-0 text-sm py-3 px-4 bg-white transition-colors cursor-pointer" id="estado" required>
                                        <option value="">Seleccionar</option>
                                        <option value="CDMX">Ciudad de México</option>
                                        <option value="MEX">Estado de México</option>
                                        <option value="JAL">Jalisco</option>
                                        <option value="NL">Nuevo León</option>
                                        <option value="OTRO">Otro</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black" htmlFor="whatsapp">WhatsApp <span className="text-red-600">*</span></label>
                                    <input className="w-full border-gray-300 focus:border-black focus:ring-0 text-sm py-3 px-4 placeholder:text-gray-300 transition-colors" id="whatsapp" type="tel" placeholder="10 dígitos" required />
                                </div>
                            </div>
                            <div className="pt-4 border-t border-gray-100 mt-2">
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Datos de Facturación (Opcional)</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input className="w-full border-gray-300 focus:border-black focus:ring-0 text-sm py-3 px-4 placeholder:text-gray-400" type="text" placeholder="RFC" />
                                    <input className="w-full border-gray-300 focus:border-black focus:ring-0 text-sm py-3 px-4 placeholder:text-gray-400" type="text" placeholder="Razón Social" />
                                </div>
                                <textarea className="w-full border-gray-300 focus:border-black focus:ring-0 text-sm py-3 px-4 placeholder:text-gray-400 h-24 resize-none" placeholder="Notas adicionales para el proyecto..."></textarea>
                            </div>
                            <div className="flex flex-col gap-3 pt-6 mt-2">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting || cartItems.length === 0}
                                    className={`w-full py-4 bg-black text-white text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg ${isSubmitting || cartItems.length === 0 ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1'}`}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar cotización'}
                                </button>
                                <button type="button" disabled className="w-full py-3 bg-gray-100 text-gray-400 text-xs font-bold uppercase tracking-widest cursor-not-allowed border border-transparent">
                                    Descargar PDF
                                </button>
                                <p className="text-[10px] text-center text-gray-400 mt-2">
                                    Al enviar, aceptas nuestra{' '}
                                    <button 
                                        type="button" 
                                        onClick={() => navigate('legal', { section: 'privacy' })}
                                        className="underline hover:text-black transition-colors"
                                    >
                                        política de privacidad
                                    </button>.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Mobile sticky footer for cart */}
             <div className="fixed bottom-0 left-0 w-full bg-white border-t border-black p-4 lg:hidden z-40 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Total estimado</span>
                    <span className="text-lg font-bold text-black">{formatCurrency(total)}</span>
                </div>
                <button 
                    onClick={() => {
                        // Submit form or navigate
                        const form = document.querySelector('form');
                        if (form) form.requestSubmit();
                    }} 
                    className="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform disabled:opacity-70"
                    disabled={isSubmitting || cartItems.length === 0}
                >
                    Enviar
                </button>
            </div>
        </div>
    );
};