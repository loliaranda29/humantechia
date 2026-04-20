import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Linkedin, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
export default function Contacto() {
  return (
    <div className="min-h-screen bg-gradient-main">
      <Navbar />

      <main className="pt-28 pb-0">
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Column */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-widest text-indigo-300"
                style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
                Sin compromiso
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Contáctanos. <br />
                <span className="text-gradient">Hablemos de tu proyecto.</span>
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed mb-12">
                Ya sea que necesités talento, automatizaciones, payroll o un sitio web — contanos qué necesitás y te respondemos en menos de 24 horas hábiles.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="p-2.5 rounded-xl bg-indigo-600/10">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Email</p>
                    <a href="mailto:soporte@humantechia.com" className="text-white font-semibold hover:text-indigo-400 transition-colors">soporte@humantechia.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="p-2.5 rounded-xl bg-indigo-600/10">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Ubicación</p>
                    <p className="text-white font-semibold">Mendoza, Argentina</p>
                    <p className="text-sm text-neutral-500">Cobertura en toda la región de Cuyo y NOA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="p-2.5 rounded-xl bg-indigo-600/10">
                    <Clock className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Tiempo de respuesta</p>
                    <p className="text-white font-semibold">Menos de 24 horas hábiles</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a href="https://www.instagram.com/humantechia_" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="p-3 rounded-xl bg-white/5 hover:bg-indigo-600/20 text-neutral-400 hover:text-white transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/humantechia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                    className="p-3 rounded-xl bg-white/5 hover:bg-indigo-600/20 text-neutral-400 hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column – Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="p-8 rounded-3xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h2 className="text-xl font-bold text-white mb-2">Formulario de contacto</h2>
                <p className="text-sm text-neutral-500 mb-8">Completá los campos y nos ponemos en contacto a la brevedad.</p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
