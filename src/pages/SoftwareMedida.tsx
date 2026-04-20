import React from 'react';
import { Code2, Layers, BarChart3 } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

export default function SoftwareMedida() {
  return (
    <ServiceLayout
      title="Desarrollo de Software a Medida: Sistemas que se adaptan a tu negocio."
      subtitle="Diseñamos y construimos el software que tu operación real necesita. Soluciones escalables, integradas y pensadas para resolver tu fricción operativa específica."
      painTitle="Las soluciones 'enlatadas' te obligan a cambiar tu forma de trabajar."
      painBody="Las soluciones enlatadas suelen ser rígidas y te obligan a cambiar tu forma de trabajar. Las planillas de Excel ya no alcanzan para sostener tu crecimiento."
      agitationTitle="Los parches tecnológicos generan deuda técnica y decisiones a ciegas."
      agitationBody="Usar parches tecnológicos genera deuda técnica y falta de visibilidad. Si no tenés datos claros en tiempo real, estás decidiendo a ciegas sobre el futuro de tu empresa."
      solutionTitle="Software diseñado para tu operación real, no para la de otro."
      solutionBody="Diseñamos y construimos el software que tu operación real necesita. Soluciones escalables, integradas y pensadas para resolver tu fricción operativa específica."
      ctaLabel="Consultar por un desarrollo"
      valueProps={[
        {
          icon: <Code2 className="w-6 h-6" />,
          title: 'Desarrollo a tu medida',
          desc: 'Construimos desde cero la solución exacta que necesitás: CRMs internos, portales de clientes, sistemas de gestión, plataformas de reportes y más.',
        },
        {
          icon: <Layers className="w-6 h-6" />,
          title: 'Integración con tus sistemas',
          desc: 'El software que desarrollamos se integra con tus sistemas existentes: contabilidad, RRHH, e-commerce, facturación electrónica AFIP.',
        },
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: 'Datos en tiempo real',
          desc: 'Dashboards y reportes que te dan visibilidad total sobre tu operación. Decisiones informadas, no intuiciones. Tuyo para siempre, sin licencias externas.',
        },
      ]}
      benefits={[
        'Diseño UX/UI centrado en el usuario final de tu empresa',
        'Desarrollo ágil con entregas parciales para validar en tiempo real',
        'Soporte técnico local en Mendoza post-lanzamiento',
        'Escalabilidad: el sistema crece a medida que tu negocio lo hace',
        'Código documentado y mantenible, sin vendor lock-in',
        'Integración con facturación AFIP y sistemas bancarios argentinos',
      ]}
      defaultService="Software a medida"
      breadcrumb="Software a medida"
    />
  );
}
