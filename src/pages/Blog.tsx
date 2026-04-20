import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = ['Todos', 'Talento', 'Tecnología', 'Payroll', 'Automatización', 'SEO & Web'];

const articles = [
  { id: 1, slug: 'liquidacion-sueldos-argentina-2025', title: '¿Cómo funciona la liquidación de sueldos en Argentina en 2025?', excerpt: 'Todo lo que necesitás saber sobre el proceso de payroll, retenciones de AFIP y novedades del SIJP para este año.', category: 'Payroll', readTime: '6 min', date: 'Abr 2025' },
  { id: 2, slug: 'n8n-automatizacion-pymes', title: 'n8n para PYMEs: 5 flujos que podés activar esta semana', excerpt: 'Desde notificaciones de WhatsApp hasta sincronización con Google Sheets. Flujos prácticos sin una línea de código.', category: 'Automatización', readTime: '8 min', date: 'Abr 2025' },
  { id: 3, slug: 'headhunting-mendoza', title: 'Headhunting en Mendoza: cómo encontrar talento en mercados chicos', excerpt: 'La realidad del mercado laboral mendocino y las estrategias que realmente funcionan para atraer perfiles técnicos y comerciales.', category: 'Talento', readTime: '5 min', date: 'Mar 2025' },
  { id: 4, slug: 'tercerizar-personal-pros-contras', title: 'Tercerizar personal: ¿cuándo conviene y cuándo no?', excerpt: 'Análisis honesto de los beneficios y riesgos de la tercerización laboral para empresas en crecimiento.', category: 'Talento', readTime: '7 min', date: 'Mar 2025' },
  { id: 5, slug: 'software-a-medida-vs-saas', title: 'Software a medida vs. SaaS: ¿cuál le conviene a tu empresa?', excerpt: 'Comparativa real con criterios financieros y operativos para tomar la decisión correcta según el tamaño y stage de tu negocio.', category: 'Tecnología', readTime: '9 min', date: 'Feb 2025' },
  { id: 6, slug: 'seo-local-mendoza-2025', title: 'SEO Local en Mendoza: cómo aparecer primero en Google en 2025', excerpt: 'Estrategia paso a paso para posicionar tu empresa en búsquedas locales y capturar clientes que buscan activamente.', category: 'SEO & Web', readTime: '10 min', date: 'Feb 2025' },
  { id: 7, slug: 'ia-seleccion-personal', title: 'IA en selección de personal: ¿aliada o amenaza?', excerpt: 'Cómo los modelos de lenguaje están transformando el screening de CVs y qué rol sigue siendo indispensablemente humano.', category: 'Tecnología', readTime: '6 min', date: 'Ene 2025' },
  { id: 8, slug: 'google-ads-servicios-profesionales', title: 'Google Ads para servicios profesionales en Argentina: guía 2025', excerpt: 'Tipos de campaña, métricas clave y errores frecuentes al invertir en Google Ads para empresas B2B en Argentina.', category: 'SEO & Web', readTime: '11 min', date: 'Ene 2025' },
  { id: 9, slug: 'outsourcing-comercial-mendoza', title: 'Outsourcing comercial: cómo escalar ventas sin contratar un equipo fijo', excerpt: 'Modelo de fuerza de ventas externa que usan empresas de consumo masivo para llegar a canales que no pueden atender directamente.', category: 'Talento', readTime: '7 min', date: 'Dic 2024' },
  { id: 10, slug: 'automatizar-seguimiento-clientes', title: 'Automatizá el seguimiento de clientes con n8n y WhatsApp', excerpt: 'Tutorial: flujo de seguimiento post-reunión con envío automático de WhatsApp, actualización en CRM y recordatorio de cierre.', category: 'Automatización', readTime: '12 min', date: 'Dic 2024' },
  { id: 11, slug: 'desarrollo-web-conversion-mendoza', title: 'Qué hace que un sitio web convierta en Mendoza (y en Argentina)', excerpt: 'Análisis de los 7 elementos más críticos para la conversión web en el contexto local: velocidad, confianza, CTA y más.', category: 'SEO & Web', readTime: '8 min', date: 'Nov 2024' },
  { id: 12, slug: 'cultura-organizacional-pymes', title: 'Cultura organizacional en PYMEs: más allá del "somos una familia"', excerpt: 'Cómo construir una cultura real que retenga talento y mejore los resultados, sin frases vacías y con acciones concretas.', category: 'Talento', readTime: '6 min', date: 'Nov 2024' },
];

const categoryColors: Record<string, string> = {
  'Talento': 'text-emerald-400 bg-emerald-400/10',
  'Tecnología': 'text-blue-400 bg-blue-400/10',
  'Payroll': 'text-amber-400 bg-amber-400/10',
  'Automatización': 'text-purple-400 bg-purple-400/10',
  'SEO & Web': 'text-indigo-400 bg-indigo-400/10',
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-main">
      <Navbar />

      <main className="pt-28 pb-0">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-widest text-indigo-300"
              style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
              Blog · Humantechia
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Tendencias en Talento y Tecnología
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Contenido práctico sobre gestión de personal, automatizaciones, payroll y transformación digital para empresas que quieren operar mejor.
            </p>
          </motion.div>
        </section>


        {/* Category Filter */}
        <section className="max-w-7xl mx-auto px-6 pb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'text-neutral-400 hover:text-white'
                }`}
                style={activeCategory !== cat ? { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="group flex flex-col rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all h-full"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Link to={`/blog/${article.slug}`} className="flex flex-col h-full">
                  {/* Card color bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-indigo-600 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col flex-1 p-7">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${categoryColors[article.category] || 'text-neutral-400 bg-neutral-400/10'}`}>
                        <Tag className="w-3 h-3" />{article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-neutral-600">
                        <Clock className="w-3 h-3" />{article.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-indigo-300 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-neutral-500 leading-relaxed flex-1 mb-6">{article.excerpt}</p>

                    <div className="flex items-center justify-between mt-auto pt-4"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      <span className="text-xs text-neutral-600">{article.date}</span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                        Leer artículo <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-neutral-500 py-16">No hay artículos en esta categoría aún.</p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
