import React from 'react';
import { Calculator, FileCheck, Clock } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

export default function PayrollContable() {
  return (
    <ServiceLayout
      title="Payroll y Gestión de RRHH: Liquidación y acompañamiento integral."
      subtitle="Mucho más que liquidar sueldos. Desarrollamos herramientas de RRHH y gestionamos el ciclo completo de tus colaboradores (Onboarding & Offboarding)."
      painTitle="Los cierres de mes no deberían ser un momento de estrés."
      painBody="El exceso de carga administrativa y los errores manuales en los recibos generan fricción y desconfianza. Los cierres de mes no deberían ser así."
      agitationTitle="El desorden contable es un costo oculto."
      agitationBody="La falta de trazabilidad y los retrasos en las novedades salariales exponen a tu empresa ante inspecciones y conflictos internos. El desorden contable es un costo oculto que se paga caro."
      solutionTitle="Gestión de RRHH 360°."
      solutionBody="Ofrecemos un servicio de acompañamiento real. Desde la liquidación técnica hasta el desarrollo de herramientas personalizadas para que tu gestión de talento sea impecable."
      ctaLabel="Quiero un payroll sin errores"
      valueProps={[
        {
          icon: <Calculator className="w-6 h-6" />,
          title: 'Liquidación y Payroll Técnico',
          desc: 'Liquidación de sueldos con exactitud técnica. Gestión de convenios, F931 y cumplimiento total ante AFIP/ANSES con respaldo documental constante.',
        },
        {
          icon: <FileCheck className="w-6 h-6" />,
          title: 'Onboarding & Offboarding',
          desc: 'Gestionamos el ingreso y egreso de tu personal. Aseguramos que cada etapa del ciclo de vida del colaborador sea profesional y legalmente impecable.',
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: 'Herramientas de RRHH a Medida',
          desc: 'Desarrollamos herramientas digitales para facilitar tu gestión interna. Acompañamos tu crecimiento con tecnología aplicada a las personas.',
        },
      ]}
      benefits={[
        'Acompañamiento integral en la gestión de personas',
        'Gestión profesional de Onboarding y Offboarding',
        'Desarrollo de herramientas personalizadas de RRHH',
        'Liquidación de sueldos sin errores y 100% auditable',
        'Reducción de la carga administrativa en un 80%',
        'Soporte contable y legal permanente para tu empresa',
      ]}
      defaultService="Payroll y Gestión Contable"
      breadcrumb="Payroll y Gestión Contable"
    />
  );
}
