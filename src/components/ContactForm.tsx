import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  defaultService?: string;
  compact?: boolean;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const services = [
  'Búsqueda de Personal',
  'Tercerización de Personal',
  'Payroll y Gestión Contable',
  'Automatizaciones con n8n',
  'Software a medida',
  'Desarrollo Web',
  'Otro',
];

export default function ContactForm({ defaultService = '', compact = false }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: defaultService, message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/XXXXXXXXXXXXXX', event_category: 'Contact', event_label: form.service || 'General' });
    }
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (res.ok) { setStatus('sent'); setForm({ name: '', company: '', email: '', phone: '', service: defaultService, message: '' }); }
      else setStatus('error');
    } catch {
      const subject = encodeURIComponent(`Consulta – ${form.service || 'Humantechia'}`);
      const body = encodeURIComponent(`Nombre: ${form.name}\nEmpresa: ${form.company}\nEmail: ${form.email}\nTeléfono: ${form.phone}\nServicio: ${form.service}\n\nMensaje:\n${form.message}`);
      window.open(`mailto:soporte@humantechia.com?subject=${subject}&body=${body}`, '_blank');
      setStatus('sent');
    }
  };

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <div className="p-4 rounded-full bg-emerald-500/10"><CheckCircle className="w-12 h-12 text-emerald-400" /></div>
        <h3 className="text-2xl font-bold text-white">¡Mensaje enviado!</h3>
        <p className="text-neutral-400 max-w-sm">Nos pondremos en contacto en menos de 24 horas hábiles.</p>
        <button onClick={() => setStatus('idle')} className="mt-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">Enviar otro mensaje</button>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm text-white placeholder-neutral-600 outline-none focus:ring-2 focus:ring-indigo-500 transition-all";
  const inputStyle = { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' };
  const labelClass = "block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wider";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="contact-name" className={labelClass}>Nombre *</label>
          <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Tu nombre" className={inputClass} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="contact-company" className={labelClass}>Empresa</label>
          <input id="contact-company" type="text" name="company" value={form.company} onChange={handleChange} placeholder="Nombre de tu empresa" className={inputClass} style={inputStyle} />
        </div>
      </div>
      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="contact-email" className={labelClass}>Email *</label>
          <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="tu@empresa.com" className={inputClass} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClass}>Teléfono</label>
          <input id="contact-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+54 261 xxx xxxx" className={inputClass} style={inputStyle} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-service" className={labelClass}>Servicio de interés</label>
        <select id="contact-service" name="service" value={form.service} onChange={handleChange} className={inputClass + " appearance-none"} style={inputStyle}>
          <option value="" className="bg-slate-900">Seleccionar servicio…</option>
          {services.map((s) => <option key={s} value={s} className="bg-slate-900">{s}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>Mensaje *</label>
        <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required rows={compact ? 3 : 5} placeholder="Contanos brevemente qué necesitás…" className={inputClass + " resize-none"} style={inputStyle} />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-400 text-center">Hubo un error. Escribinos a <a href="mailto:soporte@humantechia.com" className="underline">soporte@humantechia.com</a></p>
      )}
      <button id="contact-submit-btn" type="submit" disabled={status === 'sending'} className="w-full flex items-center justify-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-full transition-all hover:shadow-lg hover:shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98]">
        {status === 'sending' ? <><Loader2 className="w-5 h-5 animate-spin" />Enviando…</> : <><Send className="w-5 h-5" />Cuéntanos qué necesitas</>}
      </button>
      <p className="text-xs text-center text-neutral-600">Al enviar, aceptás nuestra política de privacidad. Sin spam, nunca.</p>
    </form>
  );
}
