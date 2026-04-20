import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Calendar, Share2, ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const articlesContent: Record<string, any> = {
  'liquidacion-sueldos-argentina-2025': {
    title: '¿Cómo funciona la liquidación de sueldos en Argentina en 2025?',
    category: 'Payroll',
    date: 'Abril 2025',
    readTime: '8 min',
    content: (
      <>
        <p>La liquidación de sueldos en Argentina es uno de los procesos administrativos más complejos de la región. En 2025, esta complejidad se ve acentuada por la constante actualización de los topes impositivos, las paritarias mensuales y la digitalización total de los procesos ante AFIP.</p>
        <h2>El escenario normativo en 2025</h2>
        <p>Este año, el foco está puesto en la simplificación registral impulsada por la "Ley de Medidas Fiscales Paliativas y Relevantes". Sin embargo, para una PYME en Mendoza, los desafíos siguen siendo los mismos: exactitud técnica y puntualidad. Los cierres de mes suelen ser momentos de gran tensión, donde cualquier error en el cálculo de Ganancias (Impuesto a los Ingresos Personales) o en las retenciones de Seguridad Social puede derivar en conflictos gremiales o multas administrativas onerosas.</p>
        <h3>Desafíos específicos del mercado local</h3>
        <p>En nuestra región, sectores como el Vitivinícola (SOEVA) o el Comercio tienen dinámicas propias. Las paritarias ya no son anuales ni semestrales; son diálogos constantes que obligan al responsable de payroll a estar en alerta permanente. Un error en la aplicación de un retroactivo no solo afecta el bolsillo del empleado, sino que genera una deuda previsional que crece con intereses punitorios.</p>
        <h2>Puntos clave para una gestión de Payroll profesional:</h2>
        <ul>
          <li><strong>Automatización del Libro de Sueldos Digital:</strong> La integración con AFIP mediante archivos TXT o interfaces directas ya no es opcional. Un sistema que no hable directamente con el Libro de Sueldos Digital duplica el trabajo manual y aumenta el riesgo de error humano en un 40%.</li>
          <li><strong>Gestión de Novedades en Tiempo Real:</strong> Las horas extras, premios por productividad (comunes en la industria local) y licencias deben ser procesadas apenas ocurren. Esperar al día 25 del mes para cargar novedades es la receta perfecta para el caos.</li>
          <li><strong>Auditoría Preventiva:</strong> No basta con liquidar. Es necesario auditar periódicamente los conceptos no remunerativos y las retenciones de obra social para evitar contingencias en futuras inspecciones del Ministerio de Trabajo.</li>
        </ul>
        <p>En Humantechia, abordamos el payroll como un proceso de confianza. La transparencia en el recibo de sueldo es el primer paso para una cultura organizacional sana. Cuando el empleado confía en su liquidación, su energía se enfoca en producir, no en reclamar.</p>
      </>
    )
  },
  'n8n-automatizacion-pymes': {
    title: 'n8n para PYMEs: 5 flujos que podés activar esta semana',
    category: 'Automatización',
    date: 'Abril 2025',
    readTime: '10 min',
    content: (
      <>
        <p>La automatización ya no es un privilegio de las corporaciones del Fortune 500. Con la llegada de n8n, una herramienta de automatización de flujos de trabajo "fair-code", las PYMEs de Mendoza pueden competir en eficiencia con cualquier gigante global.</p>
        <h2>¿Por qué n8n es la elección inteligente?</h2>
        <p>A diferencia de Zapier o Make, n8n permite alojar los flujos en servidores propios. Esto significa dos cosas fundamentales para una empresa argentina: <strong>control total de los datos</strong> (privacidad) y <strong>ahorro de costos en dólares</strong>, ya que no pagás por cada "tarea" ejecutada de forma individual.</p>
        <h2>5 Flujos Estratégicos para tu Empresa</h2>
        <ol>
          <li><strong>Omnicanalidad en Ventas:</strong> Centralizá los pedidos que entran por Instagram, WhatsApp y Web en un solo Google Sheet o CRM (como HubSpot o Pipedrive). n8n detecta el mensaje y crea la oportunidad comercial automáticamente.</li>
          <li><strong>Alertas de Cobranza Inteligente:</strong> Conectá tu sistema de facturación. Si una factura vence hoy y no está marcada como pagada, n8n envía un recordatorio amigable por WhatsApp al cliente y un alerta al equipo de administración.</li>
          <li><strong>Onboarding de Personal:</strong> Cuando RRHH marca a un candidato como "Contratado", n8n crea automáticamente su email corporativo, lo suma a los canales de Slack/Teams correspondientes y le envía su kit de bienvenida digital.</li>
          <li><strong>Reportes de Gestión Automáticos:</strong> ¿Perdés los lunes armando Excels? n8n puede recolectar datos de tus redes sociales, anuncios de Google y ventas del fin de semana para enviarte un resumen ejecutivo a tu celular todos los lunes a las 8 AM.</li>
          <li><strong>Sincronización con IA:</strong> Usamos n8n para "leer" correos de soporte, resumirlos con GPT-4 y asignarles una prioridad antes de que un humano los abra.</li>
        </ol>
        <p>La automatización exitosa comienza por entender el proceso manual. En Humantechia, primero optimizamos tu proceso y luego dejamos que n8n lo ejecute a la velocidad de la luz.</p>
      </>
    )
  },
  'headhunting-mendoza': {
    title: 'Headhunting en Mendoza: cómo encontrar talento en mercados chicos',
    category: 'Talento',
    date: 'Marzo 2025',
    readTime: '9 min',
    content: (
      <>
        <p>Buscar un Gerente de Planta para una bodega o un Senior Developer en Mendoza requiere una técnica distinta a la de los grandes centros urbanos. En un mercado donde "todos nos conocemos", el headhunting se convierte en una labor de diplomacia y red de contactos.</p>
        <h2>El "Mercado Oculto" de vacantes y candidatos</h2>
        <p>Se estima que el 70% de las posiciones ejecutivas en Cuyo nunca llegan a publicarse en portales de empleo. ¿Por qué? Porque las empresas temen el impacto de un anuncio público y los mejores candidatos rara vez están buscando trabajo activamente. Están "cómodos" en sus puestos actuales, pero abiertos a una propuesta superadora si llega por el canal correcto.</p>
        <h3>La importancia del Fit Cultural local</h3>
        <p>No basta con que el candidato sepa de finanzas o logística. En Mendoza, el arraigo y el entendimiento de la idiosincrasia local son vitales. Un profesional que no entiende los tiempos de la industria regional o que no tiene red de contactos local suele fracasar en menos de 12 meses.</p>
        <h2>Nuestra Metodología de Selección</h2>
        <ul>
          <li><strong>Mapeo de Talento Silencioso:</strong> Identificamos quiénes están liderando los proyectos exitosos en tu competencia y nos acercamos con discreción total.</li>
          <li><strong>Entrevistas por Competencias y Valores:</strong> Validamos el "saber hacer", pero sobre todo el "querer hacer" y la alineación con la cultura de tu empresa.</li>
          <li><strong>Garantía de Adaptación:</strong> No nos retiramos cuando el contrato se firma. Acompañamos los primeros 90 días para asegurar que la integración sea exitosa.</li>
        </ul>
        <p>En Humantechia, somos embajadores de tu marca empleadora. Cuando contactamos a un candidato, le vendemos tu visión de futuro, no solo un puesto de trabajo.</p>
      </>
    )
  },
  'tercerizar-personal-pros-contras': {
    title: 'Tercerizar personal: ¿cuándo conviene y cuándo no?',
    category: 'Talento',
    date: 'Marzo 2025',
    readTime: '8 min',
    content: (
      <>
        <p>La tercerización de personal (Outsourcing) es una decisión estratégica que puede catapultar tu crecimiento o convertirse en una pesadilla legal. En Humantechia creemos en la tercerización con responsabilidad y transparencia.</p>
        <h2>¿Cuándo es el momento de tercerizar?</h2>
        <p>La regla de oro es: <strong>Tercerizá lo operativo, conservá lo estratégico.</strong> Si tu empresa se dedica a producir vino, tu "core" es la enología y la calidad del producto. La logística de despacho o el personal eventual de cosecha son áreas candidatas ideales para el outsourcing.</p>
        <h3>Ventajas tácticas:</h3>
        <ul>
          <li><strong>Variabilización de Costos:</strong> Transformás sueldos fijos en facturas de servicio que suben o bajan según tu producción real.</li>
          <li><strong>Eliminación de la Carga Administrativa:</strong> Olvidate de las ART, los seguros de vida obligatorios y las liquidaciones individuales. Recibís un solo servicio integral.</li>
          <li><strong>Flexibilidad ante la Estacionalidad:</strong> En Mendoza, esto es vital. Podés pasar de 50 a 500 personas en una semana y volver a 50 al finalizar la temporada sin las fricciones de las altas y bajas masivas.</li>
        </ul>
        <h2>Riesgos que nadie te cuenta (y cómo evitarlos)</h2>
        <p>El mayor riesgo es la <strong>Responsabilidad Solidaria</strong>. Si la empresa tercerizadora no paga sus aportes, la ley argentina dice que vos sos el responsable. Por eso, en Humantechia entregamos mensualmente el respaldo documental de cada centavo pagado en cargas sociales de nuestro personal.</p>
        <p>La tercerización no debe ser una forma de precarizar, sino de profesionalizar una función que hoy te quita tiempo y foco.</p>
      </>
    )
  },
  'software-a-medida-vs-saas': {
    title: 'Software a medida vs. SaaS: ¿cuál le conviene a tu empresa?',
    category: 'Tecnología',
    date: 'Febrero 2025',
    readTime: '11 min',
    content: (
      <>
        <p>Esta es la "decisión de los 5 años". Lo que elijas hoy determinará la agilidad de tu empresa durante la próxima media década. ¿Conviene pagar una suscripción mensual (SaaS) o invertir en un desarrollo propio?</p>
        <h2>Software as a Service (SaaS): El traje alquilado</h2>
        <p>Herramientas como Salesforce, SAP o HubSpot son potentes y rápidas de implementar. Pero tienen una trampa: <strong>tu empresa debe adaptarse al software</strong>. Si tus procesos de fabricación son únicos en el mercado, el SaaS te obligará a cambiarlos o a pagar consultorías de personalización que suelen ser más caras que el software mismo.</p>
        <h2>Software a Medida: El activo propio</h2>
        <p>Un sistema desarrollado desde cero es como un traje a medida. Resuelve exactamente tu fricción operativa. Además, es un activo de tu empresa: no pagás licencias por usuario. Si crecés de 10 a 100 empleados, tu costo de software no se multiplica por 10.</p>
        <h3>Cuadro Comparativo:</h3>
        <table>
          <thead>
            <tr>
              <th>Criterio</th>
              <th>SaaS (Enlatado)</th>
              <th>A Medida</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inversión Inicial</td>
              <td>Baja / Media</td>
              <td>Alta</td>
            </tr>
            <tr>
              <td>Tiempo de salida</td>
              <td>Inmediato</td>
              <td>3 a 6 meses</td>
            </tr>
            <tr>
              <td>Adaptabilidad</td>
              <td>Rígida</td>
              <td>Total</td>
            </tr>
            <tr>
              <td>Costo a largo plazo</td>
              <td>Creciente (por usuario)</td>
              <td>Mantenimiento fijo</td>
            </tr>
          </tbody>
        </table>
        <p>Nuestra recomendación en Humantechia: Si el proceso es genérico (contabilidad, email), usá SaaS. Si el proceso es tu ventaja competitiva (tu logística, tu producción, tu atención al cliente), <strong>desarrollá a medida</strong>. No alquiles tu corazón operativo.</p>
      </>
    )
  },
  'seo-local-mendoza-2025': {
    title: 'SEO Local en Mendoza: cómo aparecer primero en Google en 2025',
    category: 'SEO & Web',
    date: 'Febrero 2025',
    readTime: '10 min',
    content: (
      <>
        <p>En 2025, no basta con "tener una web". Si alguien busca "Contador en Mendoza" o "Servicios de limpieza en Luján de Cuyo" y tu empresa no aparece en el mapa, estás perdiendo el 80% de tus oportunidades de negocio digital.</p>
        <h2>El nuevo algoritmo de Google Local</h2>
        <p>Google ya no solo mira tus palabras clave. Ahora mira la <strong>proximidad, la relevancia y la prominencia</strong>. Pero sobre todo, mira la confianza. ¿Cómo se construye confianza para Google?</p>
        <ul>
          <li><strong>Ficha de Google Maps (GBP) impecable:</strong> Fotos reales de tu equipo y oficina en Mendoza. Las fotos de stock penalizan.</li>
          <li><strong>Reseñas con texto y fotos:</strong> Una reseña de 5 estrellas vacía vale poco. Una reseña que dice "Excelente servicio de automatización en mi bodega de Maipú" y adjunta una foto, vale oro.</li>
          <li><strong>NAP Consistency:</strong> Tu Nombre, Dirección y Teléfono deben ser idénticos en tu web, en Maps, en Instagram y en los directorios locales. Cualquier discrepancia genera desconfianza en el algoritmo.</li>
        </ul>
        <h3>Keywords Locales vs. Genéricas</h3>
        <p>No intentes competir con gigantes nacionales por la palabra "Software". Competí y ganá por "Desarrollo de software en Mendoza". La intención de búsqueda local convierte 3 veces más que la genérica.</p>
        <p>En Humantechia, optimizamos tu sitio desde la base técnica para que Google entienda no solo qué hacés, sino <strong>dónde</strong> sos el mejor.</p>
      </>
    )
  },
  'ia-seleccion-personal': {
    title: 'IA en selección de personal: ¿aliada o amenaza?',
    category: 'Tecnología',
    date: 'Enero 2025',
    readTime: '8 min',
    content: (
      <>
        <p>La Inteligencia Artificial ha llegado a los departamentos de RRHH para quedarse. Pero en Humantechia sostenemos una visión clara: la IA es un copiloto extraordinario, pero nunca debe estar al volante de la decisión final.</p>
        <h2>¿Dónde brilla la IA en el reclutamiento?</h2>
        <p>Principalmente en la etapa de <strong>Screening</strong>. Analizar 500 CVs para una posición de analista contable llevaría días a un humano. Una IA bien entrenada puede identificar en segundos quiénes cumplen con los requisitos técnicos mínimos, analizando incluso la semántica de la experiencia descrita, no solo las palabras clave.</p>
        <h3>El peligro del sesgo algorítmico</h3>
        <p>Si la IA se entrena con datos de contrataciones pasadas que fueron sesgadas (por género, edad o universidad), la IA repetirá y potenciará esos sesgos. Por eso, el control humano y la auditoría de los prompts de búsqueda son fundamentales para garantizar la diversidad y el talento real.</p>
        <h2>Lo que la IA nunca podrá evaluar:</h2>
        <ul>
          <li><strong>La chispa en los ojos:</strong> Esa pasión por un proyecto que solo se percibe en una charla cara a cara.</li>
          <li><strong>El Fit Cultural:</strong> ¿Esta persona se llevará bien con el equipo actual en Mendoza? ¿Comparte nuestros valores de transparencia?</li>
          <li><strong>La Resiliencia:</strong> La capacidad de sobreponerse a un fracaso contada en primera persona tiene matices que ningún algoritmo puede decodificar aún.</li>
        </ul>
        <p>Usamos IA para ser rápidos, usamos humanidad para ser precisos. Ese es el estándar Humantechia.</p>
      </>
    )
  },
  'google-ads-servicios-profesionales': {
    title: 'Google Ads para servicios profesionales en Argentina: guía 2025',
    category: 'SEO & Web',
    date: 'Enero 2025',
    readTime: '12 min',
    content: (
      <>
        <p>Invertir en Google Ads en Argentina hoy es un desafío de rentabilidad. Con el aumento del costo por clic (CPC) y la competencia agresiva en el sector B2B, quemar presupuesto es muy fácil. Ganar dinero es lo difícil.</p>
        <h2>La Estructura de Campaña Ganadora</h2>
        <p>En 2025, las campañas de "Búsqueda" deben ser quirúrgicas. Olvidate de las concordancias amplias que traen tráfico curioso pero no comprador. Usamos <strong>Concordancia de Frase</strong> y <strong>Palabras Clave Negativas</strong> a diario para filtrar a quien busca "gratis" o "curso de".</p>
        <h3>Calidad sobre Cantidad</h3>
        <p>Es preferible tener 10 clics de dueños de empresas buscando "tercerización de personal" que 1.000 clics de estudiantes buscando "qué es la tercerización". El secreto está en el <strong>Nivel de Calidad (Quality Score)</strong>: si tu anuncio es relevante y tu landing page carga rápido, Google te cobra menos por estar primero.</p>
        <h2>3 Pilares de tu Estrategia de Ads:</h2>
        <ol>
          <li><strong>Landing Pages de Conversión:</strong> El anuncio es solo el 20% del éxito. El 80% restante es qué pasa cuando el usuario llega a tu web. ¿Hay un formulario claro? ¿Resuelve el dolor del cliente?</li>
          <li><strong>Seguimiento de Conversiones con IA:</strong> Configuramos Google Tag Manager para que el algoritmo aprenda qué tipo de usuario es el que realmente completa el formulario.</li>
          <li><strong>Remarketing B2B:</strong> El ciclo de decisión en servicios profesionales es largo (15 a 60 días). Tu marca debe aparecer sutilmente en YouTube y sitios de noticias para recordar que sos la mejor opción.</li>
        </ol>
        <p>No pautamos por vanidad, pautamos por retorno de inversión. En Humantechia medimos el costo por lead calificado, no solo los clics.</p>
      </>
    )
  },
  'outsourcing-comercial-mendoza': {
    title: 'Outsourcing comercial: cómo escalar ventas sin contratar un equipo fijo',
    category: 'Talento',
    date: 'Diciembre 2024',
    readTime: '8 min',
    content: (
      <>
        <p>Escalar las ventas es el objetivo de todo dueño de empresa, pero contratar vendedores es uno de los procesos con mayor tasa de fracaso. El Outsourcing Comercial nace para mitigar este riesgo.</p>
        <h2>El modelo SDR / Account Executive externo</h2>
        <p>En lugar de contratar un "vendedor estrella" que haga todo el proceso, implementamos una célula comercial externa. Un equipo se encarga de la prospección en frío y generación de reuniones (SDRs) para que tus gerentes o dueños solo se ocupen de cerrar las ventas.</p>
        <h3>¿Por qué conviene en el mercado regional?</h3>
        <p>Permite abrir mercados (como San Juan, San Luis o el NOA) sin necesidad de abrir oficinas físicas ni contratar personal local de entrada. Validás el mercado con una fuerza de ventas ágil y, si los números cierran, entonces escalás tu estructura fija.</p>
        <h2>Beneficios Clave:</h2>
        <ul>
          <li><strong>Procesos, no Personas:</strong> Te entregamos un sistema de ventas documentado, no dependés del humor o la agenda de un individuo.</li>
          <li><strong>Entrenamiento Continuo:</strong> Nosotros nos encargamos de la capacitación en técnicas de cierre y manejo de objeciones.</li>
          <li><strong>Costo Variable:</strong> Una parte importante del servicio está atada al éxito y a la generación de oportunidades reales.</li>
        </ul>
        <p>Vender es una ciencia, no un arte. En Humantechia aplicamos procesos de ingeniería comercial para que tu embudo de ventas nunca esté vacío.</p>
      </>
    )
  },
  'automatizar-seguimiento-clientes': {
    title: 'Automatizá el seguimiento de clientes con n8n y WhatsApp',
    category: 'Automatización',
    date: 'Diciembre 2024',
    readTime: '13 min',
    content: (
      <>
        <p>¿Sabías que el 80% de las ventas se cierran entre el 5to y el 12vo contacto? Sin embargo, el vendedor promedio abandona después del 2do intento. La brecha entre esos números es dinero que estás dejando sobre la mesa.</p>
        <h2>El "Fantasma" del Seguimiento Manual</h2>
        <p>Llevar el seguimiento en la cabeza o en una agenda de papel es imposible cuando manejás más de 10 leads por semana. Siempre algo se olvida, un mail no se responde o un WhatsApp queda en "visto".</p>
        <h3>El Flujo de Oro con n8n y WhatsApp:</h3>
        <ol>
          <li><strong>Reunión Finalizada:</strong> El comercial marca en el CRM "Propuesta enviada".</li>
          <li><strong>Acción Inmediata:</strong> n8n envía un WhatsApp automático con el resumen de lo hablado y el link a la propuesta.</li>
          <li><strong>Día 3:</strong> Si el link de la propuesta no fue abierto (podemos trackear esto), el sistema envía un email suave con un caso de éxito similar al del cliente.</li>
          <li><strong>Día 7:</strong> n8n envía un WhatsApp preguntando si hubo oportunidad de revisar dudas, ofreciendo una breve llamada de 10 min.</li>
          <li><strong>Día 15:</strong> Si no hay respuesta, el sistema pone el lead en "pausa" y avisa al comercial para un último contacto manual.</li>
        </ol>
        <p>Este nivel de persistencia profesional es imposible de lograr manualmente sin quemar al equipo de ventas. Con n8n, sucede mientras dormís.</p>
      </>
    )
  },
  'desarrollo-web-conversion-mendoza': {
    title: 'Qué hace que un sitio web convierta en Mendoza (y en Argentina)',
    category: 'SEO & Web',
    date: 'Noviembre 2024',
    readTime: '9 min',
    content: (
      <>
        <p>La mayoría de los sitios web de empresas en Mendoza son "lindos", pero son inútiles desde el punto de vista comercial. Son folletos digitales que nadie lee. Una web que convierte es una máquina de captación de leads.</p>
        <h2>Los 4 jinetes de la conversión web</h2>
        <ol>
          <li><strong>Velocidad de Carga (Core Web Vitals):</strong> En Argentina, el 4G/5G es inestable. Si tu web tarda más de 3 segundos en cargar en un celular, perdiste al 50% de los visitantes antes de que vean tu logo.</li>
          <li><strong>Propuesta de Valor en el Hero:</strong> Tenés 3 segundos para responder: ¿Qué hacés? ¿Para quién? ¿Por qué sos mejor? Si tu primer texto es "Bienvenidos a nuestra empresa", tu tasa de rebote será altísima.</li>
          <li><strong>Prueba Social Local:</strong> En nuestra provincia, la confianza es la moneda de cambio. Ver logos de empresas locales reconocidas y testimonios con nombre y apellido de personas reales es el factor N°1 de decisión.</li>
          <li><strong>Fricción Cero:</strong> Un formulario de 15 campos mata la venta. Pedí solo lo indispensable y ofrecé un botón de WhatsApp directo.</li>
        </ol>
        <p>Diseñamos webs pensando en el usuario de Mendoza: práctico, desconfiado por naturaleza y que valora el tiempo. Tu web debe ser la solución, no otro problema.</p>
      </>
    )
  },
  'cultura-organizacional-pymes': {
    title: 'Cultura organizacional en PYMEs: más allá del "somos una familia"',
    category: 'Talento',
    date: 'Noviembre 2024',
    readTime: '7 min',
    content: (
      <>
        <p>El cliché de "somos una familia" ha hecho mucho daño a la profesionalización de las PYMEs. Una empresa no es una familia; es un equipo de alto rendimiento con un objetivo común. Y la cultura es el pegamento que mantiene ese equipo unido cuando las cosas se ponen difíciles.</p>
        <h2>La Cultura se diseña o se padece</h2>
        <p>Si no diseñás activamente tu cultura, tendrás una por defecto, y suele ser una de chismes, falta de compromiso o miedo al error. Una cultura sana se basa en <strong>Valores Vividos</strong>, no escritos en un cuadro.</p>
        <h3>Pilares de una Cultura Pyme profesional:</h3>
        <ul>
          <li><strong>Transparencia Radical:</strong> Que todos sepan hacia dónde va el barco y cómo están los números (en la medida de lo posible). La incertidumbre genera ansiedad y baja la productividad.</li>
          <li><strong>Feedback como hábito:</strong> El error debe ser una oportunidad de aprendizaje, no un motivo de castigo. Pero el bajo desempeño persistente no debe ser tolerado, por respeto al resto del equipo que sí rinde.</li>
          <li><strong>Autonomía con Responsabilidad:</strong> Dejá de micro-gestionar. Definí el "qué" y el "para cuándo", y dejá que tu equipo defina el "cómo".</li>
        </ul>
        <p>Invertir en cultura es la forma más barata de retener talento. Los mejores no se van solo por sueldo; se van cuando sienten que su entorno de trabajo es tóxico o mediocre.</p>
      </>
    )
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const article = articlesContent[slug || ''];

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-main">
      <Navbar />

      <main className="pt-28 pb-24">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <nav className="flex items-center gap-2 text-xs text-neutral-500">
            <Link to="/" className="hover:text-indigo-400">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-indigo-400">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-neutral-300 truncate">{article.title}</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold text-indigo-400 bg-indigo-400/10">
                {article.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              {article.title}
            </h1>
          </motion.div>
        </header>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-6 mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-indigo max-w-none 
              prose-headings:text-white prose-headings:font-bold 
              prose-p:text-neutral-400 prose-p:leading-relaxed prose-p:text-lg
              prose-li:text-neutral-400 prose-li:text-lg
              prose-strong:text-indigo-300"
          >
            {article.content}
          </motion.div>

          {/* Action Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> Volver al blog
            </Link>
            <button className="inline-flex items-center gap-2 text-neutral-400 hover:text-indigo-400 transition-colors font-semibold">
              <Share2 className="w-4 h-4" /> Compartir
            </button>
          </div>
        </section>

        {/* Next Step / CTA */}
        <section className="max-w-4xl mx-auto px-6">
          <div className="p-10 rounded-3xl relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">¿Te interesa aplicar esto en tu empresa?</h3>
                <p className="text-neutral-400 mb-6">
                  Nuestros especialistas pueden ayudarte a implementar soluciones de {article.category.toLowerCase()} diseñadas a tu medida.
                </p>
                <Link to="/contacto" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-full transition-all">
                  Consultar ahora <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="hidden md:block">
                <ContactForm defaultService={article.category} />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[80px] rounded-full -mr-20 -mt-20" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
