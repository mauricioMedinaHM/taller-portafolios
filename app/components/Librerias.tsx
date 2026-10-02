import { librerias } from "@/lib/librerias";

/* ==========================================================================
   Las librerías de componentes: fichas de cartón, no una grilla de
   productos. La captura es el preview del sitio; debajo, qué se encuentra.
   ========================================================================== */

function codeOf(rank: number): string {
  return rank === 0 ? "CMD-01" : `LIB-${String(rank).padStart(2, "0")}`;
}

function onInkColor(onInk: "stock" | "board"): string {
  return onInk === "stock" ? "var(--color-stock)" : "var(--color-board)";
}

export function Librerias() {
  return (
    <section
      id="librerias"
      aria-labelledby="librerias-titulo"
      className="bg-board w-full pt-24 pb-8 sm:pt-32 sm:pb-12"
    >
      <header className="mx-auto w-full max-w-[104rem] px-5 sm:px-8">
        <h2 id="librerias-titulo" className="t-deck text-[var(--color-stock)]">
          Librerías de componentes
        </h2>
        <p className="t-read mt-4 max-w-[68ch] text-[var(--color-onboard-soft)]">
          El comando /research-ui-component es la pieza que hay que explicar
          en el taller: busca un componente ya hecho antes de inventarlo.
          Después, diez sitios de React con animación. Arrancá con React
          Bits, Magic UI y Aceternity. Si querés animar por tu cuenta, sumá
          Motion o GSAP.
        </p>
      </header>

      <ul className="mx-auto mt-12 grid w-full max-w-[104rem] grid-cols-1 gap-1.5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 xl:grid-cols-4">
        {librerias.map((lib) => {
          const fg = onInkColor(lib.onInk);
          return (
            <li
              key={lib.id}
              className={lib.destacada ? "min-w-0 sm:col-span-2" : "min-w-0"}
            >
              <a
                href={lib.href}
                rel="noopener noreferrer"
                target="_blank"
                className="lib-ficha relative flex h-full flex-col overflow-hidden bg-[var(--color-stock)] text-[var(--color-ink)] ring-1 ring-[var(--color-board-line)] shadow-[var(--shadow-chip)]"
                style={{ borderRadius: "var(--radius-chip)" }}
              >
                <span className="relative block aspect-[16/10] w-full overflow-hidden bg-[var(--color-board-raised)]">
                  <img
                    src={`/lib-shots/${lib.id}.webp`}
                    alt={`Captura de la pantalla principal de ${lib.host}`}
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover object-top"
                  />
                </span>

                <div className="flex flex-1 flex-col gap-2.5 px-3.5 pt-3 pb-4">
                  <p className="t-chip text-[var(--color-ink)]">{lib.name}</p>
                  <p className="t-read text-[0.9375rem] leading-snug text-[var(--color-ink-soft)]">
                    {lib.blurb}
                  </p>
                  <p className="t-label pt-1 text-[var(--color-ink)]">Encontrás</p>
                  <ul className="flex flex-col gap-1">
                    {lib.finds.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-[0.875rem] leading-snug text-[var(--color-ink)]"
                      >
                        <span
                          className="mt-[0.45em] size-1.5 shrink-0 rounded-full"
                          style={{
                            background:
                              lib.onInk === "board"
                                ? "var(--color-ink)"
                                : lib.ink,
                          }}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-auto flex flex-wrap gap-1 pt-1">
                    {lib.tags.map((tag) => (
                      <li
                        key={tag}
                        className="t-code bg-[var(--color-stock-shade)] px-1.5 py-0.5 text-[var(--color-ink-soft)]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <span
                  className="relative flex h-[2.25rem] items-center gap-2.5 pr-3 pl-3"
                  style={{ background: lib.ink, color: fg }}
                >
                  <span
                    className="rivet-hole block h-[0.5rem] w-[0.5rem] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="t-code">{codeOf(lib.rank)}</span>
                  {lib.taller ? (
                    <span className="t-code ml-auto opacity-80">Taller</span>
                  ) : (
                    <span className="t-code ml-auto truncate opacity-80">
                      {lib.host}
                    </span>
                  )}
                  <span className="sr">, abre en una pestaña</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <style href="lib-ficha" precedence="component">{`
.lib-ficha {
  transition: transform 150ms var(--ease-fan), box-shadow 150ms var(--ease-fan);
}
.lib-ficha:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-chip-lift);
}
@media (prefers-reduced-motion: reduce) {
  .lib-ficha { transition: none; }
}
`}</style>
    </section>
  );
}
