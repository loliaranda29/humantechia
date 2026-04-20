import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Zap } from 'lucide-react';
import logo from '../logo.png';

const services = [
  { label: 'Búsqueda de Personal', href: '/busqueda-de-personal' },
  { label: 'Tercerización de Personal', href: '/tercerizacion-personal-mendoza' },
  { label: 'Payroll y Gestión Contable', href: '/payroll-contable-mendoza' },
  { label: 'Automatizaciones con n8n', href: '/automatizaciones-n8n' },
  { label: 'Software a medida', href: '/software-a-medida' },
  { label: 'Desarrollo Web', href: '/desarrollo-web-profesional' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className="fixed top-0 w-full z-50"
      style={{
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Humantechia – Talento y Tecnología en Mendoza"
            className="h-11 w-auto transition-opacity group-hover:opacity-90"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-indigo-400' : 'text-neutral-300 hover:text-white'}`}
          >
            Inicio
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              id="nav-servicios-dropdown"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Servicios
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {dropdownOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(15, 23, 42, 0.98)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                }}
              >
                {services.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className={`flex items-center gap-3 px-4 py-3 text-sm transition-all ${
                      isActive(s.href)
                        ? 'bg-indigo-600/20 text-indigo-300'
                        : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/blog"
            className={`text-sm font-medium transition-colors ${isActive('/blog') ? 'text-indigo-400' : 'text-neutral-300 hover:text-white'}`}
          >
            Blog
          </Link>

          <Link
            to="/contacto"
            id="nav-cta-contacto"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:scale-105"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="nav-mobile-toggle"
          className="md:hidden p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-white/5 transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: 'rgba(10, 15, 30, 0.98)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div className="px-6 py-6 space-y-1">
            <Link
              to="/"
              className="block px-4 py-3 rounded-xl text-sm font-medium text-neutral-300 hover:bg-white/5 hover:text-white transition-all"
            >
              Inicio
            </Link>

            <div className="pt-1">
              <p className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-500/80">
                Servicios
              </p>
              {services.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-all"
                >
                  <Zap className="w-3.5 h-3.5 text-indigo-500" />
                  {s.label}
                </Link>
              ))}
            </div>

            <Link
              to="/blog"
              className="block px-4 py-3 rounded-xl text-sm font-medium text-neutral-300 hover:bg-white/5 hover:text-white transition-all"
            >
              Blog
            </Link>

            <div className="pt-3">
              <Link
                to="/contacto"
                className="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3.5 rounded-full text-sm font-semibold transition-all"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
