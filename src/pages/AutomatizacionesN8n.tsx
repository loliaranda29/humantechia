import React from 'react';
import { Zap, GitBranch, RefreshCw } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

export default function AutomatizacionesN8n() {
  return (
    <ServiceLayout
      title="Automatizaciones con n8n: Eliminá tareas manuales y ganá velocidad operativa."
      subtitle="Conectamos tus herramientas para que la información fluya sola. Sistemas que trabajan por vos las 24 horas."
      painTitle="¿Tu equipo pierde horas copiando datos entre planillas, mails y sistemas?"
      painBody="El trabajo repetitivo quema el talento de tu gente y genera errores humanos evitables. Cada hora en tareas manuales es una hora menos en lo que realmente importa."
      agitationTitle="Si tus procesos dependen de la memoria de alguien, no podés escalar."
      agitationBody="Si tus procesos dependen de la memoria de alguien o de recordatorios manuales, tu empresa no puede escalar. El desorden comercial y operativo te hace perder plata todos los días."
      solutionTitle="Tus herramientas conectadas, tu operación en piloto automático."
      solutionBody="Conectamos tus herramientas (CRM, WhatsApp, Mail, Excel) para que la información fluya sola. Creamos sistemas que trabajan por vos las 24 horas."
      ctaLabel="Quiero automatizar mis procesos"
      valueProps={[
        {
          icon: <Zap className="w-6 h-6" />,
          title: 'Flujos sin código',
          desc: 'Diseñamos automatizaciones visuales con n8n que conectan tus apps (Gmail, WhatsApp, Sheets, HubSpot, Mercado Libre y más) sin necesidad de programar.',
        },
        {
          icon: <GitBranch className="w-6 h-6" />,
          title: 'Integraciones a medida',
          desc: 'Conectamos cualquier sistema que tenga API o Webhook. Si tu herramienta envía datos, nosotros la conectamos al resto de tu ecosistema.',
        },
        {
          icon: <RefreshCw className="w-6 h-6" />,
          title: 'Automatización con IA',
          desc: 'Integramos modelos de lenguaje (GPT, Gemini) en tus flujos para clasificar emails, redactar respuestas y tomar decisiones automáticas.',
        },
      ]}
      benefits={[
        'Ahorro de entre 10 y 30 horas semanales por equipo',
        'Reducción de errores humanos en procesos repetitivos',
        'Notificaciones y alertas en tiempo real sin intervención manual',
        'Flujos que quedan 100% bajo tu control y propiedad',
        'Compatible con más de 400 apps y servicios',
        'Documentación y capacitación para tu equipo incluidas',
      ]}
      defaultService="Automatizaciones con n8n"
      breadcrumb="Automatizaciones con n8n"
    />
  );
}
