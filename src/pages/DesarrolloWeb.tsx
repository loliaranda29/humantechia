import React from 'react';
import { Globe, BarChart2, Smartphone } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

export default function DesarrolloWeb() {
  return (
    <ServiceLayout
      title="Páginas Web Profesionales: Tu base digital diseñada para convertir."
      subtitle="Creamos activos digitales alineados con tus objetivos comerciales. Webs rápidas, seguras y profesionales que comunican tu valor y captan leads reales."
      painTitle="Una web vieja o inexistente te hace perder credibilidad y oportunidades."
      painBody="Una web vieja o inexistente te hace perder credibilidad y oportunidades frente a competidores que ya se ven sólidos online. El boca a boca ya no es suficiente."
      agitationTitle="Si un cliente potencial no te encuentra, se va con el siguiente."
      agitationBody="Si un cliente potencial te busca y no te encuentra (o encuentra algo que no funciona), simplemente se va con el siguiente. Tu web debe trabajar para atraer reuniones, no solo para 'estar'."
      solutionTitle="Un activo digital que trabaja para vos las 24 horas."
      solutionBody="Creamos activos digitales alineados con tus objetivos comerciales. Webs rápidas, seguras y profesionales que comunican tu valor y captan leads reales."
      ctaLabel="Impulsar mi presencia digital"
      valueProps={[
        {
          icon: <Globe className="w-6 h-6" />,
          title: 'Diseño que convierte',
          desc: 'Sitios optimizados para conversión: CTAs estratégicos, estructura persuasiva, formularios que la gente completa. No solo diseño lindo.',
        },
        {
          icon: <BarChart2 className="w-6 h-6" />,
          title: 'SEO técnico incluido',
          desc: 'Cada sitio está optimizado desde la base: URLs amigables, velocidad de carga, Core Web Vitals, schema markup y meta tags para rankear en Google.',
        },
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: '100% Mobile-First',
          desc: 'El 70% de las búsquedas son desde el celular. Diseñamos para mobile primero, luego para desktop. Experiencia impecable en cualquier pantalla.',
        },
      ]}
      benefits={[
        'Posicionamiento en Google (SEO local para Mendoza y Argentina)',
        'Velocidad de carga optimizada – Core Web Vitals verde',
        'Google Analytics 4 y Tag Manager configurados desde el día 1',
        'Integración con Google Ads para campañas de conversión',
        'Diseño accesible (WCAG) y mobile-first',
        'Mantenimiento y actualizaciones de seguridad el primer año',
      ]}
      defaultService="Desarrollo Web"
      breadcrumb="Desarrollo Web Profesional"
    />
  );
}
