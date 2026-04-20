import React from 'react';

interface WhatsAppButtonProps {
  service?: string;
}

export default function WhatsAppButton({ service = '' }: WhatsAppButtonProps) {
  // Oculto por ahora según requerimiento del usuario
  return null;

  const message = encodeURIComponent(
    `Hola Humantechia, vengo de la web y me interesa el servicio de ${service || '[Nombre del Servicio]'}.`
  );
  const whatsappUrl = `https://wa.me/5492614000000?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-floating-btn"
      aria-label={`Contactar por WhatsApp${service ? ` sobre ${service}` : ''}`}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      style={{ filter: 'drop-shadow(0 8px 24px rgba(37,211,102,0.4))' }}
    >
      {/* Tooltip */}
      <span
        className="opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 text-sm font-semibold text-white px-4 py-2 rounded-xl whitespace-nowrap"
        style={{ background: 'rgba(15,23,42,0.95)', border: '1px solid rgba(37,211,102,0.3)' }}
      >
        {service ? `Consultar sobre ${service}` : '¡Hablemos por WhatsApp!'}
      </span>

      {/* Button */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
      >
        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
          aria-hidden="true"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.734 5.46 2.014 7.754L0 32l8.525-2.236A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.774-1.854l-.485-.29-5.063 1.328 1.352-4.928-.315-.506A13.248 13.248 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.88c-.398-.199-2.355-1.162-2.72-1.294-.364-.133-.629-.199-.894.199-.265.397-1.027 1.294-1.259 1.56-.232.265-.464.299-.862.1-.398-.199-1.68-.619-3.2-1.974-1.183-1.055-1.982-2.358-2.213-2.756-.232-.398-.025-.613.174-.812.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.132-.265.066-.497-.033-.696-.1-.199-.894-2.154-1.225-2.95-.322-.775-.65-.67-.894-.682-.23-.011-.497-.013-.762-.013s-.696.1-.1061.497c-.365.398-1.39 1.358-1.39 3.313 0 1.955 1.424 3.844 1.622 4.109.199.265 2.8 4.277 6.786 5.996.948.41 1.688.654 2.265.838.952.303 1.818.26 2.502.158.763-.114 2.355-.963 2.687-1.893.332-.929.332-1.726.232-1.893-.1-.165-.364-.265-.762-.464z" />
        </svg>
      </div>

      {/* Ping animation */}
      <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping" style={{ opacity: 0.75 }} />
      <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400" />
    </a>
  );
}
