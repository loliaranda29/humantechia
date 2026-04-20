import React from 'react';
import { Users, Search, Star } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

export default function BusquedaPersonal() {
  return (
    <ServiceLayout
      title="Búsqueda y Selección de Personal en Mendoza: Encontrá el talento que impulsa tu negocio."
      subtitle="Búsqueda con tecnología de punta. Selección con criterio humanizado. Te entregamos la terna ideal para mandos medios y cargos jerárquicos."
      painTitle="¿Cansado de entrevistar candidatos que no encajan?"
      painBody="¿Cansado de entrevistar candidatos que no encajan o de perder tiempo revisando cientos de CVs sin calidad? Una vacante abierta frena tu operación y te quita foco."
      agitationTitle="Contratar por 'corazonada' sale caro."
      agitationBody="El costo de una mala elección no es solo el sueldo, es el tiempo perdido y el mal clima que genera una rotación evitable. Cada semana con la posición abierta es dinero que se va."
      solutionTitle="Búsqueda es tecnología. Selección es humano."
      solutionBody="En Humantechia usamos tecnología para filtrar con precisión y criterio humano para elegir. Nos especializamos en mandos medios y posiciones jerárquicas que definen el rumbo de tu empresa."
      ctaLabel="Quiero contratar mejor"
      valueProps={[
        {
          icon: <Search className="w-6 h-6" />,
          title: 'Búsqueda tecnológica activa',
          desc: 'Usamos algoritmos de matching y IA para rastrear el mercado oculto. No esperamos: salimos a buscar al talento que no está en los portales tradicionales.',
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: 'Selección Humanizada',
          desc: 'Cada candidato pasa por una evaluación de criterio humano. Validamos el fit cultural, los valores y el potencial real más allá de lo que dice el CV.',
        },
        {
          icon: <Star className="w-6 h-6" />,
          title: 'Mandos Medios y Jerárquicos',
          desc: 'Somos expertos en encontrar líderes. Conocemos el mercado de Mendoza y Cuyo para identificar a los directivos que tu empresa necesita para escalar.',
        },
      ]}
      benefits={[
        'Reducción del 60% en tiempo de contratación',
        'Especialización en mandos medios y cargos jerárquicos',
        'Búsqueda es tecnología, Selección es criterio humano',
        'Acceso a candidatos pasivos mediante headhunting estratégico',
        'Evaluación psicotécnica y de competencias incluida',
        'Garantía de reposición ante desvinculaciones tempranas',
      ]}
      defaultService="Búsqueda de Personal"
      breadcrumb="Búsqueda de Personal"
    />
  );
}
