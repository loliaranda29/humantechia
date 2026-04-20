import React from 'react';
import { Briefcase, Settings, TrendingUp } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

export default function TercerizacionPersonal() {
  return (
    <ServiceLayout
      title="Tercerización de Personal y Cuadrillas: Mano de obra especializada para tu rubro."
      subtitle="Nuestro equipo de selección experto se encarga de buscar el personal ideal para tu empresa. Operatividad garantizada desde el primer día."
      painTitle="Los picos de demanda y la temporada no esperan."
      painBody="Los picos de demanda, la temporada o la vendimia no esperan. Si tu equipo interno no da abasto con las altas, bajas y legajos, el caos administrativo está a un paso."
      agitationTitle="Un error documental en plena cosecha es un riesgo real."
      agitationBody="Un error documental o una vacante no cubierta en plena cosecha es un riesgo legal y operativo que no podés permitirte. No dejes que la burocracia frene tu producción."
      solutionTitle="Especialistas en Agro e Industria."
      solutionBody="Contamos con equipos de selección dedicados a encontrar mano de obra idónea. Somos líderes en la gestión de cuadrillas para el agro y personal de maquinaria pesada."
      ctaLabel="Necesito cubrir vacantes ahora"
      valueProps={[
        {
          icon: <Briefcase className="w-6 h-6" />,
          title: 'Mano de Obra Especializada',
          desc: 'Desde operarios calificados hasta técnicos de maquinaria. Nuestro equipo de selección busca y valida al personal idóneo para tu rubro específico.',
        },
        {
          icon: <Settings className="w-6 h-6" />,
          title: 'Servicios de Cuadrilla (Agro)',
          desc: 'Gestión completa de cuadrillas para el agro y la industria vitivinícola. Nos encargamos de la coordinación, el transporte y el cumplimiento legal total.',
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: 'Gestión de Maquinaria',
          desc: 'Provisión de personal capacitado para la operación de maquinaria. Garantizamos idoneidad técnica y seguridad operativa en cada puesto.',
        },
      ]}
      benefits={[
        'Personal ideal buscado por expertos en reclutamiento',
        'Especialización en cuadrillas para el agro y maquinaria',
        'Reducción de costos fijos y flexibilidad operativa',
        'Cumplimiento legal garantizado (ART, aportes, convenios)',
        'Seguimiento local y presencia física en el lugar de trabajo',
        'Mano de obra idónea para picos de demanda y cosecha',
      ]}
      defaultService="Tercerización de Personal"
      breadcrumb="Tercerización de Personal"
    />
  );
}
