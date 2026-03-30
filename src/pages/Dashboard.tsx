import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Send, Users, CheckCircle, BarChart3, Settings, LogOut, ExternalLink, RefreshCw } from 'lucide-react';
import logo from '../logo.png';

const stats = [
  { label: 'Campañas Activas', value: '12', icon: <Send className="w-5 h-5" />, color: 'bg-primary' },
  { label: 'Total Contactos', value: '1,420', icon: <Users className="w-5 h-5" />, color: 'bg-blueAccent' },
  { label: 'Entregados', value: '94%', icon: <CheckCircle className="w-5 h-5" />, color: 'bg-secondary' },
  { label: 'Aperturas', value: '42%', icon: <BarChart3 className="w-5 h-5" />, color: 'bg-yellow-500' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-darker flex">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 bg-dark flex flex-col p-8 space-y-10">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Humantechia Logo" className="h-8 w-auto px-1" />
        </div>
        
        <nav className="flex-1 space-y-2">
          {[
            { name: 'Dashboard', icon: <LayoutDashboard size={20} />, active: true },
            { name: 'Campañas', icon: <Send size={20} /> },
            { name: 'Contactos (Sheets)', icon: <Users size={20} /> },
            { name: 'Configuración', icon: <Settings size={20} /> },
          ].map((item, i) => (
            <button 
              key={i}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                item.active ? 'bg-primary/10 text-primary shadow-sm' : 'text-neutral-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>

        <a href="/" className="flex items-center gap-3 text-neutral-500 hover:text-red-400 p-4 transition-colors">
          <LogOut size={20} />
          Cerrar Sesión
        </a>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">Resumen de Campaña</h1>
            <p className="text-neutral-500 text-sm flex items-center gap-2">
              <RefreshCw className="w-4 h-4 animate-[spin_4s_linear_infinity]" /> Actualizado hace 5 minutos (Datos de Google Sheets)
            </p>
          </div>
          <a 
            href="https://docs.google.com/spreadsheets/d/1-ZiUdSOnhR6BrlcMvQi6dAJZ_NahCR5N2mwvD28lHpQ/edit" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-sm font-bold transition-all"
          >
            Abrir Planilla <ExternalLink size={16} />
          </a>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-3xl border-white/5 flex items-center gap-4"
            >
              <div className={`p-4 rounded-2xl ${stat.color} text-white`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-medium tracking-wider uppercase mb-1">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chart / List Placeholder */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass p-8 rounded-[2.5rem] border-white/5">
            <h3 className="text-lg font-bold mb-6">Envíos Recientes (n8n Engine)</h3>
            <div className="space-y-4">
              {[ 'PepsiCo', 'Mercado Libre', 'Globant', 'Arcor' ].map((client, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-neutral-400">
                      {client[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{client}</p>
                      <p className="text-xs text-neutral-500">contacto@ejemplo.com</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary border border-secondary/20">Exitoso</span>
                    <p className="text-[10px] text-neutral-500 mt-1">Hoy 14:20</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-8 rounded-[2.5rem] border-white/5">
            <h3 className="text-lg font-bold mb-6">Configuración n8n</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Intervalo de Envío</label>
                <select className="w-full bg-darker border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary">
                  <option>Cada 5 minutos</option>
                  <option>Cada 30 minutos</option>
                  <option>Cada 1 hora</option>
                </select>
              </div>
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 space-y-3">
                <p className="text-xs text-primary font-bold tracking-widest uppercase">Estatus del Motor</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-sm font-bold text-secondary">Conectado y Corriendo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
