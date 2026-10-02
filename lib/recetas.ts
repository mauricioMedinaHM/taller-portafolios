import { type Deck } from "./decks";

/* ==========================================================================
   El recetario.
   En el muestrario real, al dorso de cada ficha viene la fórmula de mezcla.
   Acá la fórmula es un prompt: lo copiás, lo pegás en tu agente y sale.
   Están escritos para pegarse tal cual, sin edición previa: cada uno le pide
   al agente que pregunte lo que le falta en vez de inventarlo, que es el
   único modo de que no te devuelva un portafolio de otra persona.
   ========================================================================== */

export type RecetaGroupId = "empezar" | "contenido" | "terminar";

export interface Receta {
  id: string;
  group: RecetaGroupId;
  /** Qué hace, en una línea. */
  title: string;
  /** Cuándo usarla. */
  when: string;
  /** El texto que se copia. */
  prompt: string;
}

export const recetaGroups: { id: RecetaGroupId; name: string; blurb: string }[] = [
  {
    id: "empezar",
    name: "Empezar",
    blurb:
      "Para salir de la pantalla en blanco. El orden importa: primero la estructura, después el estilo.",
  },
  {
    id: "contenido",
    name: "Contenido",
    blurb:
      "La parte que ningún agente puede inventar por vos, pero sí ayudarte a sacar.",
  },
  {
    id: "terminar",
    name: "Terminar",
    blurb:
      "Lo que separa un portafolio publicado de uno terminado. Casi nadie llega acá.",
  },
];

export const recetas: Receta[] = [
  {
    id: "esqueleto",
    group: "empezar",
    title: "Armar el esqueleto",
    when: "No tenés nada todavía y querés una base que no haya que tirar.",
    prompt: `Quiero armar mi portafolio personal desde cero. Antes de escribir código, hacéme estas preguntas de a una y esperá mi respuesta:

1. ¿A qué te dedicás y a quién le tiene que hablar el sitio (empleador, cliente, comunidad)?
2. ¿Cuántos trabajos tenés listos para mostrar, y de cada uno qué material hay (capturas, links, texto)?
3. ¿Qué querés que haga el visitante antes de irse?
4. ¿Con qué stack te sentís cómodo para mantenerlo, o preferís que decida yo?

Con eso armá:
- Una estructura de rutas mínima y una lista de secciones justificada: cada sección tiene que ganarse el lugar. Si sobra, decímelo.
- El contenido en archivos de datos separados del layout, para que agregar un trabajo sea editar un archivo y no tocar componentes.
- Tipografía y escala tipográfica definidas como tokens antes que cualquier componente.
- Sin librería de componentes ni framework de CSS pesado: quiero entender cada línea.

Reglas: no inventes proyectos, clientes, métricas ni testimonios. Donde falte contenido real dejá un marcador explícito y listámelo al final.`,
  },
  {
    id: "elegir-stack",
    group: "empezar",
    title: "Elegir el stack sin perder una semana",
    when: "Estás dando vueltas entre opciones en vez de escribir.",
    prompt: `Ayudame a cerrar la decisión de stack para mi portafolio. Mi situación: [contá tu experiencia, cuánto tiempo tenés y si vas a escribir en el sitio].

Dame exactamente dos opciones, no cinco:
1. La más rápida para publicar algo esta semana.
2. La que más me sirva si el sitio va a crecer durante un año.

Para cada una: qué tengo que aprender que todavía no sé, qué se rompe a los seis meses, cuánto cuesta el hosting y cuál es el camino de escape si me arrepiento. Terminá con una recomendación clara para MI caso y un primer comando concreto.

No hagas una tabla comparativa de features. Quiero una decisión, no un panorama.`,
  },
  {
    id: "clonar-referencia",
    group: "empezar",
    title: "Partir de una referencia sin copiarla",
    when: "Viste una ficha de este muestrario que te gustó y querés algo así.",
    prompt: `Esta es una referencia que me gusta: [pegá la URL].

Abrila y hacéme un análisis estructural, no una descripción:
- Cuál es la única decisión de diseño que hace que se vea así. Una sola.
- Qué está haciendo con la tipografía: familias, escala, cuántos pesos, medida de línea.
- Cómo usa el color: qué porcentaje de pantalla ocupa cada uno y cuál es el rol de cada uno.
- Qué está haciendo con el espacio y con la profundidad.
- Qué hace en el primer pantallazo y en qué orden se lee.

Después traducí ese sistema a MI contenido, que es: [describí tus trabajos]. No copies su layout ni su paleta: quiero el criterio aplicado a lo mío, con una decisión propia que la referencia no tiene. Dejá el análisis escrito en un archivo para que pueda revisarlo antes de que escribas código.`,
  },
  {
    id: "caso-estudio",
    group: "contenido",
    title: "Sacarme un caso de estudio con entrevista",
    when: "Tenés el proyecto hecho pero no sabés qué escribir sobre él.",
    prompt: `Quiero escribir el caso de estudio de un proyecto y necesito que me entrevistes primero. El proyecto es: [dos líneas de qué era].

Hacéme preguntas de a una, esperando mi respuesta, hasta tener: el problema real (no el pedido), la restricción más molesta, la decisión de la que dudaste, qué probaste que no funcionó, y cómo sabés que salió bien. Si contesto algo genérico, insistí con una pregunta más específica en vez de aceptarlo.

Cuando tengas material suficiente, escribí el caso en este orden: la situación, la tensión, lo que decidí, lo que resultó. Máximo 600 palabras. En mi voz, no en voz de agencia: sin "soluciones innovadoras", sin "experiencias memorables", sin adjetivos que no pueda probar.

Si un dato me falta, dejalo como pregunta abierta al final. No lo completes.`,
  },
  {
    id: "bio",
    group: "contenido",
    title: "Escribir el 'sobre mí' que nadie sabe escribir",
    when: "Tenés un párrafo vacío arriba de todo y lleva semanas así.",
    prompt: `Necesito el texto de presentación de mi portafolio. Entrevistame primero: preguntame de a una qué hago, hace cuánto, qué tipo de problema me gusta agarrar, qué me aburre, y qué quiero que me llegue después de que alguien lea esto.

Después escribí tres versiones distintas, no tres variantes de la misma:
- Una de una sola frase, para el encabezado.
- Una de tres frases, para la sección de presentación.
- Una de un párrafo, para cuando alguien ya decidió que le interesa.

Prohibido: "apasionado por", "entusiasta de", "amante del código", listas de tecnologías como personalidad, y cualquier frase que sirva igual para otras mil personas. Si una versión te sale genérica, tirala y escribila de nuevo con un detalle concreto que te di.`,
  },
  {
    id: "seleccion",
    group: "contenido",
    title: "Decidir qué trabajos dejar afuera",
    when: "Tenés doce proyectos y querés mostrarlos todos. No lo hagas.",
    prompt: `Te paso todos mis trabajos con una línea de cada uno: [listalos].

Quiero apuntar a este tipo de trabajo: [describilo]. Con eso:
- Elegí los tres o cuatro que tengo que mostrar, y decime por qué cada uno gana su lugar.
- Decime cuáles saco y sé directo sobre el motivo: repite algo que ya está, no muestra decisión mía, o el material visual no alcanza.
- Para los que quedan, decime en qué orden van y qué le falta a cada uno para estar presentable.

Si dos proyectos demuestran lo mismo, decime cuál es el más fuerte y saco el otro. No me digas que todos aportan algo.`,
  },
  {
    id: "auditoria",
    group: "terminar",
    title: "Auditar antes de publicar",
    when: "Ya está armado y querés saber qué se te pasó.",
    prompt: `Audita mi portafolio y reportá problemas concretos con el archivo y la línea. Revisá:

Accesibilidad: contraste real de cada texto sobre su fondo (cuerpo 4.5:1, texto grande 3:1) con el valor calculado; foco visible en todo lo navegable; orden de tabulación; alt en imágenes con contenido y alt vacío en las decorativas; jerarquía de encabezados sin saltos; que todo lo que se puede clickear se pueda usar con teclado.

Responsive: corré el contenido real a 360, 768, 1024 y 1440 px. Buscá texto que desborda, títulos que se parten mal y elementos que se tocan.

Movimiento: que todo lo animado respete prefers-reduced-motion.

Rendimiento: peso de las imágenes, si están en formato moderno y con dimensiones declaradas; fuentes subseteadas y autohospedadas; qué bloquea el primer render.

Contenido: enlaces roídos o al vacío, textos de relleno olvidados, y cualquier botón cuyo texto no diga qué hace.

Dame la lista ordenada por gravedad, con el arreglo para cada uno. No arregles nada todavía.`,
  },
  {
    id: "tipografia",
    group: "terminar",
    title: "Arreglar la tipografía",
    when: "Algo se ve amateur y no sabés qué es. Casi siempre es esto.",
    prompt: `Revisá la tipografía de mi sitio y arreglala. Concretamente:

- Definí una escala de tamaños con pasos evidentes: si dos niveles se parecen, no hay jerarquía. Menos niveles y más distintos.
- Medida de línea del cuerpo entre 65 y 75 caracteres. Si es más ancha, cuesta volver al renglón.
- Interlineado según el tamaño: los títulos grandes van más cerrados que el cuerpo, no igual.
- Tracking negativo sólo en títulos grandes, y nunca más allá de -0.04em.
- Máximo dos familias. Si hay tres, decime cuál sacar.
- Autohospedá las fuentes en woff2, subseteadas al alfabeto que uso, con font-display swap y el peso variable si existe.
- Equilibrá los títulos de dos líneas para que no quede una palabra sola abajo.

Mostrame los valores calculados antes y después, y corré el texto real en cada breakpoint para ver qué desborda.`,
  },
  {
    id: "publicar",
    group: "terminar",
    title: "Publicarlo de verdad",
    when: "Funciona en tu máquina. Eso no es estar publicado.",
    prompt: `Llevá mi portafolio a producción. Quiero que hagas y me expliques cada paso:

- Build de producción corriendo sin advertencias, y decime qué advertencias silenciaste y por qué.
- Despliegue con dominio propio y HTTPS. Decime qué registros DNS tengo que tocar, en palabras que pueda seguir en el panel de mi proveedor.
- Metadatos: título y descripción por página, y una imagen de previsualización real generada desde el sitio, no un placeholder.
- Favicon en los tamaños que hacen falta.
- Un sitemap y un robots.txt que no bloquee nada por accidente.
- Verificá el sitio publicado, no el local: que las fuentes carguen desde mi dominio, que las imágenes no den 404 y que los links externos funcionen.

Al final, dame la lista de lo que tengo que revisar yo a mano porque vos no podés verificarlo.`,
  },
];

/* --------------------------------------------------------------------------
   La receta de cada mazo se deriva del mazo mismo: su tesis, sus señales y
   su error típico. Así el prompt que se copia dice exactamente lo que la
   página enseña, y cuando se corrija un mazo se corrige el prompt.
   -------------------------------------------------------------------------- */

export function promptForDeck(deck: Deck): string {
  return `Quiero que mi portafolio tenga este estilo: ${deck.name.toLowerCase()}.

Qué significa: ${deck.thesis}

Las señales por las que se reconoce, y quiero las cinco:
${deck.tells.map((t) => `- ${t}`).join("\n")}

El error que quiero evitar: ${deck.pitfall}

Antes de escribir código:
1. Proponéme la paleta completa con los valores exactos y qué porcentaje de pantalla ocupa cada color. Nada de acentos sueltos sobre un fondo neutro: el color tiene que ocupar regiones.
2. Proponéme dos familias tipográficas concretas, autohospedadas, y decime por qué esas y no las obvias del rubro.
3. Describime el primer pantallazo: qué hay, a qué escala y en qué orden se lee.

Después implementalo con el contenido real que te paso, definiendo primero los tokens y recién después los componentes. Verificá el contraste de cada texto contra su fondo y mostrame los valores. Si alguna señal de la lista no le sirve a mi contenido, decímelo en vez de forzarla.`;
}
