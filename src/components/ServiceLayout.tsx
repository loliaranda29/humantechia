import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Quote } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

interface ValueProp {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  painTitle: string;
  painBody: string;
  agitationTitle: string;
  agitationBody: string;
  solutionTitle: string;
  solutionBody: string;
  ctaLabel: string;
  valueProps: ValueProp[];
  benefits: string[];
  defaultService: string;
  breadcrumb?: string;
}

export default function ServiceLayout({
  title,
  subtitle,
  painTitle,
  painBody,
  agitationTitle,
  agitationBody,
  solutionTitle,
  solutionBody,
  ctaLabel,
  valueProps,
  benefits,
  defaultService,
  breadcrumb,
}: ServiceLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-main">
      <Navbar />

      <main className="pt-28 pb-0">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500" aria-label="breadcrumb">
            <Link to="/" className="hover:text-indigo-400 transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/" className="hover:text-indigo-400 transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-neutral-300">{breadcrumb || title}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold uppercase tracking-widest text-indigo-300"
              style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
            >
              Humantechia · Servicio
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed mb-10">{subtitle}</p>
            <a
              href="#contacto-servicio"
              id={`cta-hero-${defaultService.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-600/30"
            >
              {ctaLabel} <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </section>

        {/* PAS – Pain · Agitation · Solution */}
        <section className="py-20 px-6" style={{ background: 'rgba(239,68,68,0.04)', borderTop: '1px solid rgba(239,68,68,0.08)', borderBottom: '1px solid rgba(239,68,68,0.08)' }}>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
            {/* Problema */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl"
              style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-3">Problema</p>
              <h2 className="text-xl font-bold text-white mb-4">{painTitle}</h2>
              <p className="text-sm text-neutral-400 leading-relaxed">{painBody}</p>
            </motion.div>

            {/* Agitación */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl"
              style={{ background: 'rgba(251,146,60,0.06)', border: '1px solid rgba(251,146,60,0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-3">Agitación</p>
              <h2 className="text-xl font-bold text-white mb-4">{agitationTitle}</h2>
              <p className="text-sm text-neutral-400 leading-relaxed">{agitationBody}</p>
            </motion.div>

            {/* Solución */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl"
              style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">Solución</p>
              <h2 className="text-xl font-bold text-white mb-4">{solutionTitle}</h2>
              <p className="text-sm text-neutral-400 leading-relaxed">{solutionBody}</p>
            </motion.div>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Cómo lo hacemos</p>
              <h2 className="text-3xl font-bold text-white">Nuestra propuesta de valor</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {valueProps.map((vp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl group hover:border-indigo-500/40 transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="inline-flex p-3 rounded-2xl bg-indigo-600/10 text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
                    {vp.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{vp.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{vp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits + Trust Block */}
        <section className="py-16 px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">Beneficios clave</p>
                <h2 className="text-3xl font-bold text-white mb-8">Lo que ganás con Humantechia</h2>
                <ul className="space-y-4">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-300">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative p-10 rounded-3xl text-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(16,185,129,0.12))', border: '1px solid rgba(99,102,241,0.25)' }}
              >
                <div className="absolute top-4 left-6 text-indigo-500/30">
                  <Quote className="w-12 h-12" />
                </div>
                <p className="text-2xl font-bold text-white leading-snug mb-5 relative z-10">
                  "Tecnología cuando acelera. Criterio humano cuando importa decidir bien."
                </p>
                <p className="text-sm text-neutral-500">— Filosofía Humantechia</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA / Contact Form */}
        <section id="contacto-servicio" className="py-24 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Sin compromiso</p>
              <h2 className="text-3xl font-bold text-white mb-4">¿Querés saber más?</h2>
              <p className="text-neutral-400">Completá el formulario y un especialista te contacta en menos de 24 hs.</p>
            </div>
            <div className="p-8 rounded-3xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ContactForm defaultService={defaultService} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
