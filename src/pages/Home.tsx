import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Users, Briefcase, Calculator, Mail, MessageCircle, ArrowRight, ChevronRight, CheckCircle, Instagram, Linkedin } from 'lucide-react';
import logo from '../logo.png';

const colors = {
  primary: '#6366f1',
  secondary: '#10b981',
  dark: '#1e293b',
  accent: '#0ea5e9',
};

const services = [
  {
    title: 'Innovación y Transformación Digital',
    description: 'Automatización de procesos, consultoría en IA y desarrollo de plataformas a medida.',
    icon: <Terminal className="w-8 h-8" />,
    items: ['Automatización con n8n', 'Integración de Gemini/OpenAI', 'Sistemas Cloud'],
  },
  {
    title: 'Búsqueda y Selección de Personal',
    description: 'Encontramos el talento ideal utilizando algoritmos de emparejamiento potenciados por IA.',
    icon: <Users className="w-8 h-8" />,
    items: ['Headhunting Regional', 'Evaluaciones con IA', 'Cultura Organizacional'],
  },
  {
    title: 'Tercerización de Personal',
    description: 'Delega funciones operativas y enfócate en el núcleo de tu negocio.',
    icon: <Briefcase className="w-8 h-8" />,
    items: ['Outsourcing Comercial', 'Staffing Técnico', 'Gestión de Equipos'],
  },
  {
    title: 'Payroll y Gestión Contable',
    description: 'Cálculo y distribución de remuneraciones con total precisión tecnológica.',
    icon: <Calculator className="w-8 h-8" />,
    items: ['Liquidación de Impuestos', 'Retenciones Legales', 'Auditoría Digital'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-main">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Humantechia Logo" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm font-medium hover:text-primary transition-colors">Servicios</a>
            <a href="#empresa" className="text-sm font-medium hover:text-primary transition-colors">Nosotros</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=soporte@humantechia.com" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-opacity-80 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/30">
              Contáctanos
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Expertos en Tecnología y Talento Humano en Latam
              </motion.div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Lideramos la <span className="text-gradient">Comunicación Digital</span> con Humantechia
              </h1>
              <p className="text-xl text-neutral-400 max-w-lg leading-relaxed">
                En Humantechia combinamos innovación tecnológica, automatización de envíos y gestión de campañas para potenciar el crecimiento de tu empresa.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=soporte@humantechia.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-dark hover:bg-neutral-100 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
                  <Mail className="w-5 h-5" /> Consultar Servicios
                </a>
                <span
                  className="flex items-center gap-2 border border-white/5 bg-white/5 backdrop-blur-sm text-neutral-500 px-8 py-4 rounded-full font-bold cursor-not-allowed"
                  title="Próximamente"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Directo
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-[140px] rounded-full" />
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative glass rounded-[2.5rem] p-8 border-white/10 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-xs text-neutral-500 font-mono tracking-widest uppercase">Panel de Control IA</div>
                </div>
                <div className="space-y-4">
                  {[ 
                    { label: 'Optimización Operativa', val: '98%', color: 'from-primary/50 to-primary' },
                    { label: 'Retención de Talento', val: '95%', color: 'from-accent/50 to-accent' },
                    { label: 'Eficacia en Selección', val: 'Alta', color: 'from-secondary/50 to-secondary' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 rounded-2xl p-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-neutral-400">{stat.label}</span>
                      <div className="flex items-center gap-3">
                        <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${stat.color}`} />
                        <span className="text-white font-bold font-mono">{stat.val}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicios" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-primary/80">Servicios Digitales y Humanos</h2>
            <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">Soluciones para la Era de la IA</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <article
                key={i}
                className="group relative p-8 glass rounded-3xl hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  {s.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    Saber más <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="empresa" className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Sobre <span className="text-primary">Nosotros</span></h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                En Humantechia, nos apasiona conectar el potencial humano con las herramientas tecnológicas más avanzadas. Nuestra misión es simplificar la complejidad digital para que las empresas puedan centrarse en lo que realmente importa: su gente y su crecimiento.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 glass rounded-2xl">
                  <h4 className="text-2xl font-bold text-primary mb-2">100%</h4>
                  <p className="text-sm text-neutral-500">Tecnología Cloud</p>
                </div>
                <div className="p-6 glass rounded-2xl">
                  <h4 className="text-2xl font-bold text-primary mb-2">IA</h4>
                  <p className="text-sm text-neutral-500">Empresa Innovadora</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video glass rounded-[2.5rem] overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                 <img src={logo} alt="Humantechia Branding" className="w-1/2 opacity-50" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="border-t border-white/5 pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Humantechia Logo" className="h-10 w-auto" />
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Optimizando la comunicación masiva mediante la integración de tecnología avanzada y automatización inteligente.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Servicios</h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li><a href="#servicios" className="hover:text-primary transition-colors">Innovación Digital</a></li>
                <li><a href="#servicios" className="hover:text-primary transition-colors">Selección IA</a></li>
                <li><a href="#servicios" className="hover:text-primary transition-colors">Payroll</a></li>
                <li><a href="#servicios" className="hover:text-primary transition-colors">Tercerización</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Compañía</h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li><a href="#empresa" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
                <li><a href="#contacto" className="hover:text-primary transition-colors">Términos y Condiciones</a></li>
                <li><a href="#contacto" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Contacto</h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li className="flex items-center gap-2">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=soporte@humantechia.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" /> soporte@humantechia.com
                  </a>
                </li>
                <li className="flex items-center gap-2 opacity-40 cursor-not-allowed" title="Próximamente">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Corporativo
                </li>
                <li className="flex items-center gap-4 pt-2">
                  <a href="https://www.instagram.com/humantechia_" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-neutral-400 hover:text-white transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/humantechia" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-neutral-400 hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-neutral-600 text-xs">
            <p>© {new Date().getFullYear()} Humantechia. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
