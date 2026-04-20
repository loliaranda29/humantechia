import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Linkedin, MapPin, Phone } from 'lucide-react';
import logo from '../logo.png';

const serviceLinks = [
  { label: 'Búsqueda de Personal', href: '/busqueda-de-personal' },
  { label: 'Tercerización de Personal', href: '/tercerizacion-personal-mendoza' },
  { label: 'Payroll y Gestión Contable', href: '/payroll-contable-mendoza' },
  { label: 'Automatizaciones con n8n', href: '/automatizaciones-n8n' },
  { label: 'Software a medida', href: '/software-a-medida' },
  { label: 'Desarrollo Web', href: '/desarrollo-web-profesional' },
];

export default function Footer() {
  return (
    <footer
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      className="pt-20 pb-10 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <Link to="/">
              <img
                src={logo}
                alt="Humantechia Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Unimos gestión de talento e innovación tecnológica local para
              resolver necesidades reales con rapidez y ejecución.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/humantechia_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Humantechia"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-indigo-600/20 text-neutral-400 hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/humantechia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Humantechia"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-indigo-600/20 text-neutral-400 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">
              Servicios
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-sm text-neutral-500 hover:text-indigo-400 transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">
              Compañía
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-sm text-neutral-500 hover:text-indigo-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-neutral-500 hover:text-indigo-400 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <span className="text-sm text-neutral-600 cursor-default">
                  Términos y Condiciones
                </span>
              </li>
              <li>
                <span className="text-sm text-neutral-600 cursor-default">
                  Política de Privacidad
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:soporte@humantechia.com"
                  className="flex items-center gap-2.5 text-sm text-neutral-500 hover:text-indigo-400 transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  soporte@humantechia.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-neutral-500">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Mendoza, Argentina
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-600 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p>© {new Date().getFullYear()} Humantechia. Todos los derechos reservados.</p>
          <p className="text-neutral-700">
            Tecnología cuando acelera. Criterio humano cuando importa decidir bien.
          </p>
        </div>
      </div>
    </footer>
  );
}
