import { anfitriones } from "@/lib/arranque";

/* ==========================================================================
   La portada es el abanico todavía cerrado, colgado del remache.
   A la izquierda el nombre del taller; a la derecha las nueve lengüetas
   desplegadas desde un mismo punto, cada una con su tinta. Es la única
   pieza de la página donde el color se ve todo junto.
   ========================================================================== */

const sponsors = [
  { src: "/sponsors/cuyo-connect.png", alt: "CuyoConnect" },
  { src: "/sponsors/polo-tic.png", alt: "Polo TIC Mendoza" },
  { src: "/sponsors/bitget-wallet.svg", alt: "Bitget Wallet" },
] as const;

/* El primero es el retrato de quien da el taller; el segundo, el que
   mandaron para Chicatech. El recorte cuadrado se resuelve al mostrar. */
const retratos = [
  {
    ...anfitriones[0],
    src: "/anfitriones/cuyoconnect.jpg",
    alt: "Mauricio, de CuyoConnect",
    position: "center 16%",
  },
  {
    ...anfitriones[1],
    src: "/anfitriones/chicatech.jpg",
    alt: "Chicatech Mza",
    position: "center 18%",
  },
] as const;

export function Portada() {
  return (
    <section
      id="portada"
      className="relative z-1 mx-auto grid min-h-svh max-w-[104rem] items-center gap-x-16 gap-y-16 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:py-32 xl:grid-cols-[minmax(0,1fr)_minmax(0,32rem)]"
    >
      <div>
        <ul
          aria-label="Sponsors"
          className="mb-12 grid max-w-[34rem] grid-cols-3 gap-3"
        >
          {sponsors.map((logo) => (
            <li key={logo.alt} className="flex h-14 items-center justify-center px-2">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 w-full object-contain"
              />
            </li>
          ))}
        </ul>

        <h1 className="t-display t-nombre text-[var(--color-stock)]">
          ¿Cómo armar
          <br />
          mi portfolio
          <br />
          y no perder
          <br />
          el estilo en
          <br />
          el intento?
          <span className="nombre-emoji"> 💅🏼🧠</span>
        </h1>

      </div>

      {/* Los retratos completan la identidad del hero. */}
      <div className="relative">
        <ul className="grid grid-cols-2 gap-3">
          {retratos.map((persona) => (
            <li key={persona.handle}>
              <a href={persona.href} rel="noopener noreferrer" className="block">
                <img
                  src={persona.src}
                  alt={persona.alt}
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover"
                  style={{
                    objectPosition: persona.position,
                    borderRadius: "var(--radius-chip)",
                    boxShadow: "var(--shadow-chip)",
                  }}
                />
                <span className="credito t-read mt-2.5 block text-[0.9375rem] text-[var(--color-onboard)]">
                  {persona.handle}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
