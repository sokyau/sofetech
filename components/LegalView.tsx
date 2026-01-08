import React from 'react';
import { ViewName } from '../App';

interface LegalViewProps {
    navigate: (view: ViewName, params?: Record<string, string>) => void;
}

export const LegalView: React.FC<LegalViewProps> = ({ navigate }) => {
    return (
        <div className="w-full animate-fade-in pb-24">
            <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="mb-12 border-b border-black pb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-black/40 mb-3 block">Legal</span>
                    <h1 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-4">
                        Términos y Privacidad
                    </h1>
                    <p className="text-gray-500 text-sm">Última actualización: Octubre 2024</p>
                </div>

                <div className="prose prose-neutral max-w-none text-gray-600 font-light leading-relaxed">
                    <h3 className="text-black font-medium text-xl uppercase tracking-wide mt-12 mb-4">1. Aviso de Privacidad</h3>
                    <p>
                        En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, Sofe Tech S.A. de C.V. (en adelante "Sofe Tech"), con domicilio en Av. Insurgentes Sur 1234, Ciudad de México, hace de su conocimiento que los datos personales que usted nos proporcione serán tratados estrictamente para los fines de identificación, operación, administración y comercialización de nuestros productos y servicios.
                    </p>
                    <p>
                        Sus datos no serán transferidos a terceros sin su consentimiento, salvo las excepciones previstas en el artículo 37 de la Ley. Para ejercer sus derechos ARCO, favor de contactar a: privacidad@sofetech.com.mx.
                    </p>

                    <h3 className="text-black font-medium text-xl uppercase tracking-wide mt-12 mb-4">2. Términos de Uso</h3>
                    <p>
                        El acceso y uso de este sitio web están sujetos a los siguientes términos y condiciones. Al navegar en este sitio, usted acepta sin limitaciones ni condiciones los presentes términos.
                    </p>
                    
                    <h4 className="text-black font-bold text-sm uppercase tracking-widest mt-8 mb-2">Propiedad Intelectual</h4>
                    <p>
                        Todo el contenido, logotipos, iconos, imágenes y software de este sitio son propiedad de Sofe Tech o de sus proveedores de contenido y están protegidos por leyes internacionales de derechos de autor.
                    </p>

                    <h4 className="text-black font-bold text-sm uppercase tracking-widest mt-8 mb-2">Precios y Cotizaciones</h4>
                    <p>
                        Los precios mostrados en el catálogo son de referencia y pueden cambiar sin previo aviso debido a fluctuaciones cambiarias. Las cotizaciones formales enviadas a través del sistema tienen una vigencia de 15 días naturales, salvo que se especifique lo contrario en el documento PDF generado.
                    </p>

                    <h4 className="text-black font-bold text-sm uppercase tracking-widest mt-8 mb-2">Envíos y Devoluciones</h4>
                    <p>
                        Los tiempos de entrega son estimados. Sofe Tech no se hace responsable por retrasos imputables a las paqueterías externas. Las devoluciones solo se aceptarán por defectos de fábrica dentro de los primeros 30 días, conservando el empaque original y accesorios completos.
                    </p>

                    <h3 className="text-black font-medium text-xl uppercase tracking-wide mt-12 mb-4">3. Limitación de Responsabilidad</h3>
                    <p>
                        Sofe Tech no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso de este sitio web o de los productos adquiridos.
                    </p>
                </div>
            </section>
        </div>
    );
};