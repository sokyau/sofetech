import React, { useState, useEffect } from 'react';
import { HomeView } from './components/HomeView';
import { CatalogView } from './components/CatalogView';
import { ProductDetailView } from './components/ProductDetailView';
import { CartView } from './components/CartView';
import { AccountView } from './components/AccountView';
import { BlogListView } from './components/BlogListView';
import { BlogPostView } from './components/BlogPostView';
import { ServicesView } from './components/ServicesView';
import { ContactView } from './components/ContactView';
import { AboutView } from './components/AboutView';
import { LegalView } from './components/LegalView';
import { QuoteSuccessView } from './components/QuoteSuccessView';
import { NotFoundView } from './components/NotFoundView';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Define available views
export type ViewName = 'home' | 'catalog' | 'product' | 'cart' | 'account' | 'blog' | 'blog-post' | 'services' | 'contact' | 'about' | 'legal' | 'quote-success' | 'not-found';

export interface Route {
  view: ViewName;
  params: Record<string, string>;
}

export default function App() {
  const getRouteFromHash = (): Route => {
    const hash = window.location.hash.slice(1); // Remove '#'
    const path = hash.split('?')[0]; // Simple path parsing

    if (path === '' || path === '/') return { view: 'home', params: {} };
    if (path === '/catalog') return { view: 'catalog', params: {} };
    if (path === '/cart') return { view: 'cart', params: {} };
    if (path === '/account') return { view: 'account', params: {} };
    if (path === '/blog') return { view: 'blog', params: {} };
    if (path === '/services') return { view: 'services', params: {} };
    if (path === '/contact') return { view: 'contact', params: {} };
    if (path === '/about') return { view: 'about', params: {} };
    if (path === '/legal') return { view: 'legal', params: {} };
    if (path === '/quote-success') return { view: 'quote-success', params: {} };
    if (path === '/404') return { view: 'not-found', params: {} };

    // Dynamic routes
    const catalogSearchMatch = path.match(/^\/catalog\/search\/(.+)$/);
    if (catalogSearchMatch) return { view: 'catalog', params: { search: decodeURIComponent(catalogSearchMatch[1]) } };

    const productMatch = path.match(/^\/product\/(.+)$/);
    if (productMatch) return { view: 'product', params: { sku: decodeURIComponent(productMatch[1]) } };

    const blogPostMatch = path.match(/^\/blog\/(.+)$/);
    if (blogPostMatch) return { view: 'blog-post', params: { slug: decodeURIComponent(blogPostMatch[1]) } };

    const legalMatch = path.match(/^\/legal\/(.+)$/);
    if (legalMatch) {
      const section = decodeURIComponent(legalMatch[1]);
      if (section === 'privacy' || section === 'terms') {
        return { view: 'legal', params: { section } };
      }
    }

    return { view: 'not-found', params: {} };
  };

  const [route, setRoute] = useState<Route>(getRouteFromHash);

  // Listen for hash changes (browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.view]);

  const navigate = (view: ViewName, params: Record<string, string> = {}) => {
    let hash = '';
    switch (view) {
      case 'home': hash = '/'; break;
      case 'catalog': 
        hash = params.search ? `/catalog/search/${encodeURIComponent(params.search)}` : '/catalog'; 
        break;
      case 'product': hash = params.sku ? `/product/${params.sku}` : '/catalog'; break;
      case 'cart': hash = '/cart'; break;
      case 'account': hash = '/account'; break;
      case 'blog': hash = '/blog'; break;
      case 'blog-post': hash = params.slug ? `/blog/${params.slug}` : '/blog'; break;
      case 'services': hash = '/services'; break;
      case 'contact': hash = '/contact'; break;
      case 'about': hash = '/about'; break;
      case 'legal': 
        hash = params.section ? `/legal/${params.section}` : '/legal'; 
        break;
      case 'quote-success': hash = '/quote-success'; break;
      case 'not-found': hash = '/404'; break;
      default: hash = '/';
    }
    window.location.hash = hash;
  };

  const renderView = () => {
    switch (route.view) {
      case 'home': return <HomeView navigate={navigate} />;
      // @ts-ignore
      case 'catalog': return <CatalogView navigate={navigate} searchQuery={route.params.search} />;
      // @ts-ignore
      case 'product': return <ProductDetailView navigate={navigate} sku={route.params.sku} />;
      case 'cart': return <CartView navigate={navigate} />;
      case 'account': return <AccountView navigate={navigate} />;
      case 'blog': return <BlogListView navigate={navigate} />;
      // @ts-ignore
      case 'blog-post': return <BlogPostView navigate={navigate} slug={route.params.slug} />;
      case 'services': return <ServicesView navigate={navigate} />;
      case 'contact': return <ContactView navigate={navigate} />;
      case 'about': return <AboutView navigate={navigate} />;
      // @ts-ignore
      case 'legal': return <LegalView navigate={navigate} section={route.params.section} />;
      case 'quote-success': return <QuoteSuccessView navigate={navigate} />;
      case 'not-found': return <NotFoundView navigate={navigate} />;
      default: return <NotFoundView navigate={navigate} />;
    }
  };

  // WhatsApp Configuration
  const WHATSAPP_NUMBER = "5215512345678";
  const WHATSAPP_TEXT = "Hola, quiero una cotización...";
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

  return (
    <div className="bg-background-light text-text-main flex flex-col min-h-screen overflow-x-hidden selection:bg-black selection:text-white">
      <Header navigate={navigate} />
      <main className="flex-grow w-full">
        {renderView()}
      </main>
      <Footer navigate={navigate} />
      
      {/* Floating Action Button (WhatsApp) */}
      <a 
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp" 
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center size-12 bg-black text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group cursor-pointer"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
        </svg>
      </a>
    </div>
  );
}