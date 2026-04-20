import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users, Briefcase, Calculator, Zap, Code2, Globe,
  ArrowRight, CheckCircle, ChevronRight, MapPin, Layers, BarChart3,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../logo.png';

const services = [
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Búsqueda de Personal',
    desc: 'Encontramos el talento ideal con IA y criterio humano. Headhunting regional para cada posición.',
    href: '/busqueda-de-personal',
    color: 'from-emerald-500/20 to-emerald-500/5',
    iconColor: 'text-emerald-400 bg-emerald-400/10',
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: 'Tercerización de Personal',
    desc: 'Delegá funciones operativas y enfocá a tu equipo en lo que realmente hace crecer tu negocio.',
    href: '/tercerizacion-personal-mendoza',
    color: 'from-blue-500/20 to-blue-500/5',
    iconColor: 'text-blue-400 bg-blue-400/10',
  },
  {
    icon: <Calculator className="w-7 h-7" />,
    title: 'Payroll y Gestión Contable',
    desc: 'Liquidaciones sin errores, cierres de mes tranquilos. Cumplimiento con AFIP garantizado.',
    href: '/payroll-contable-mendoza',
    color: 'from-amber-500/20 to-amber-500/5',
    iconColor: 'text-amber-400 bg-amber-400/10',
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: 'Automatizaciones con n8n',
    desc: 'Conectamos tus sistemas y eliminamos tareas repetitivas. Tu operación corre sola.',
    href: '/automatizaciones-n8n',
    color: 'from-purple-500/20 to-purple-500/5',
    iconColor: 'text-purple-400 bg-purple-400/10',
  },
  {
    icon: <Code2 className="w-7 h-7" />,
    title: 'Software a medida',
    desc: 'Sistemas que se adaptan a tu operativa, no al revés. Código que es tuyo para siempre.',
    href: '/software-a-medida',
    color: 'from-rose-500/20 to-rose-500/5',
    iconColor: 'text-rose-400 bg-rose-400/10',
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: 'Desarrollo Web',
    desc: 'Sitios que convierten y posicionan en Google. Mobile-first, rápidos y optimizados para SEO.',
    href: '/desarrollo-web-profesional',
    color: 'from-indigo-500/20 to-indigo-500/5',
    iconColor: 'text-indigo-400 bg-indigo-400/10',
  },
];

const stats = [
  { value: '6+', label: 'Servicios especializados' },
  { value: '100%', label: 'Ejecución local en Mendoza' },
  { value: '24hs', label: 'Tiempo de respuesta' },
  { value: 'IA', label: 'Potenciado con tecnología' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-main">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold uppercase tracking-widest text-indigo-300"
              style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)' }}>
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Mendoza, Argentina · Tecnología Local
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-8 max-w-5xl mx-auto">
              Talento, Procesos y Tecnología para{' '}
              <span className="text-gradient">operar mejor</span>{' '}
              y crecer con más control.
            </h1>

            <p className="text-xl lg:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Unimos gestión de talento e innovación tecnológica local para resolver necesidades reales con rapidez y ejecución.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contacto"
                id="hero-cta-primary"
                className="flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-9 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-600/30"
              >
                Cuéntanos qué necesitas <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/blog"
                id="hero-cta-secondary"
                className="flex items-center gap-2 text-neutral-300 hover:text-white font-semibold px-6 py-4 transition-colors"
              >
                Ver nuestro Blog <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-gradient mb-1">{s.value}</div>
                <div className="text-sm text-neutral-500">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">Lo que hacemos</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Nuestras Soluciones</h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Seis servicios complementarios que cubrían toda la operativa de tu empresa, desde el talento hasta la tecnología.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={s.href}
                  className="group flex flex-col h-full p-8 rounded-3xl transition-all hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-600/10"
                  style={{ background: `linear-gradient(135deg, ${s.color.split(' ')[0].replace('from-', '').replace('/', '')}, rgba(255,255,255,0.02))`.replace('from-', ''), border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className={`inline-flex p-3.5 rounded-2xl mb-6 w-fit ${s.iconColor} group-hover:scale-110 transition-transform`}>
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed flex-1 mb-6">{s.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    Ver más <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Trust Section - PAS Structure */}
      <section id="empresa" className="py-32 px-6 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        {/* Background decorative glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-[10px] font-bold uppercase tracking-widest text-indigo-400"
                  style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
                  Propósito Humantechia
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-[1.15]">
                  Líderes en gestión de talento y <span className="text-gradient">desarrollo de innovación tecnológica.</span>
                </h2>
                
                {/* PAS - Problema/Agitación */}
                <div className="p-8 rounded-3xl mb-8" style={{ background: 'rgba(239,68,68,0.03)', border: '1px solid rgba(239,68,68,0.08)' }}>
                  <p className="text-lg text-neutral-400 leading-relaxed italic">
                    "Combinamos innovación, talento humano y desarrollo para operar mejor y crecer con más control. En Humantechia nacimos para combinar todos los servicios en una solución integral que rompa el ciclo de la improvisación."
                  </p>
                </div>

                {/* PAS - Solución */}
                <p className="text-xl text-white font-medium leading-relaxed mb-6">
                  Sobre nosotros: Somos + Talento, + Humano. Somos el puente entre la gestión de personas y la vanguardia tecnológica local.
                </p>
                
                <p className="text-lg text-indigo-300 font-semibold mb-10">
                  Tecnología cuando acelera. Criterio humano cuando importa decidir bien.
                </p>
              </div>

              <Link
                to="/contacto"
                className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full border border-white/10 transition-all hover:scale-105 active:scale-95"
              >
                Conocé al equipo <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[4rem] blur-[100px]"
                style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.2) 0%, transparent 70%)' }} />
              <div className="relative p-16 rounded-[4rem] flex items-center justify-center overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.15)', aspectRatio: '1/1' }}>
                <img src={logo} alt="Humantechia" className="w-3/4 relative z-10" />
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              </div>
            </motion.div>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Innovación',
                desc: 'Usamos n8n, IA y software a medida para que tu equipo deje de ser esclavo de las tareas repetitivas.'
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Talento Tercerizado',
                desc: 'Nuestro equipo de selección es el encargado de buscar el personal ideal para tu rubro específico.'
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: 'ADN Local',
                desc: 'Conocemos Mendoza y Cuyo. No hablamos desde una oficina lejana, operamos donde vos operás.'
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: 'Resultados Reales',
                desc: 'Entregamos soluciones que se ven reflejadas en tu rentabilidad operativa y en tu tranquilidad diaria.'
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl group hover:border-indigo-500/40 transition-all relative overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {/* Glow effect requested: "card -> luz de fondo" */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: 'radial-gradient(circle at center, rgba(99,102,241,0.05) 0%, transparent 70%)' }} />
                
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-2xl bg-indigo-600/10 text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{pillar.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[2.5rem]"
            style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(16,185,129,0.1))', border: '1px solid rgba(99,102,241,0.2)' }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">Sin compromiso</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Listo para operar mejor?
            </h2>
            <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
              Contanos tu desafío y en menos de 24 horas un especialista de Humantechia te propone cómo resolverlo.
            </p>
            <Link
              to="/contacto"
              id="cta-banner-btn"
              className="inline-flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-600/30"
            >
              Cuéntanos qué necesitas <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
