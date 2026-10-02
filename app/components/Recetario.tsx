import { CopyPrompt } from "./CopyPrompt";
import { recetaGroups, recetas, type RecetaGroupId } from "@/lib/recetas";

/* ==========================================================================
   El recetario: la contratapa del abanico.
   Cada grupo abre con una banda de tinta a sangre, remachada como el resto
   del muestrario, y debajo cuelga una ventana punzada de stock claro con las
   fórmulas apiladas y separadas por un filete de 1px. Nada de grilla de
   cards: es texto largo, y el texto largo quiere una sola columna.
   ========================================================================== */

/** La tinta de cada grupo, tomada de los mazos. Las tres llevan texto stock. */
const groupInk: Record<RecetaGroupId, string> = {
  empezar: "var(--color-deck-editorial)",
  contenido: "var(--color-deck-terminal)",
  terminar: "var(--color-deck-craft)",
};

export function Recetario() {
  return (
    <section
      id="recetario"
      className="bg-board w-full pt-24 pb-24 sm:pt-32 sm:pb-28"
    >
      {/* Le saca el triángulo por defecto al <details> sin tocar globals.css. */}
      <style
        href="recetario-summary"
        precedence="default"
      >{`.receta-sum{list-style:none}.receta-sum::-webkit-details-marker{display:none}`}</style>

      <header className="mx-auto w-full max-w-[72ch] px-5 sm:px-8">
        <h2 className="t-deck text-[var(--color-stock)]">El recetario</h2>
        <p className="t-read mt-4 text-[var(--color-onboard-soft)]">
          Son prompts para pegar tal cual en tu agente —Claude, Cursor, ChatGPT,
          Devin— sin editarlos antes. Están escritos para que el agente te
          pregunte lo que falta en vez de completarlo por su cuenta.
        </p>
      </header>

      <div className="mt-16 sm:mt-20">
        {recetaGroups.map((group) => {
          const ink = groupInk[group.id];
          const delGrupo = recetas.filter((r) => r.group === group.id);

          return (
            <section key={group.id} aria-labelledby={`grupo-${group.id}`}>
              {/* La banda de tinta, a sangre y remachada. */}
              <div
                className="w-full px-5 pt-10 pb-8 sm:px-8"
                style={{ backgroundColor: ink }}
              >
                <div className="mx-auto flex w-full max-w-[72ch] items-start gap-4">
                  <span
                    className="rivet-hole mt-2 inline-block h-3.5 w-3.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h3
                      id={`grupo-${group.id}`}
                      className="t-deck text-[var(--color-stock)]"
                    >
                      {group.name}
                    </h3>
                    <p
                      className="t-read mt-3 max-w-[60ch]"
                      style={{
                        color: `color-mix(in oklab, var(--color-stock) 80%, ${ink})`,
                      }}
                    >
                      {group.blurb}
                    </p>
                  </div>
                </div>
              </div>

              {/* La ventana punzada: stock claro, fórmulas apiladas. */}
              <div className="px-5 sm:px-8">
                <div
                  className="punch mx-auto w-full max-w-[72ch] bg-[var(--color-stock)] text-[var(--color-ink)] shadow-chip"
                  style={{ borderRadius: "var(--radius-window)" }}
                >
                  {delGrupo.map((receta, i) => (
                    <details
                      key={receta.id}
                      className="group px-5 py-6 sm:px-8"
                      style={
                        i === 0
                          ? undefined
                          : {
                              borderTop: "1px solid var(--color-stock-line)",
                            }
                      }
                    >
                      <summary className="receta-sum flex cursor-pointer items-start gap-4">
                        <Indicador ink={ink} />
                        <span className="min-w-0">
                          <span className="t-chip block text-[var(--color-ink)]">
                            {receta.title}
                          </span>
                          <span
                            className="t-read mt-1 block text-[0.9375rem]"
                            style={{
                              color: `color-mix(in oklab, var(--color-ink) 80%, ${ink})`,
                            }}
                          >
                            {receta.when}
                          </span>
                        </span>
                      </summary>

                      <div className="mt-5 pl-0 sm:pl-[calc(1rem+18px)]">
                        <CopyPrompt prompt={receta.prompt} tone="quiet" />
                        <div
                          className="well mt-4 overflow-x-auto px-4 py-4 text-[var(--color-ink)]"
                          style={{ borderRadius: "var(--radius-window)" }}
                        >
                          <p
                            className="t-read max-w-[68ch]"
                            style={{ whiteSpace: "pre-wrap" }}
                          >
                            {receta.prompt}
                          </p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

/* Indicador de abierto/cerrado dibujado: la barra vertical desaparece al
   abrirse, así que el signo pasa de "más" a "menos" sin glifos prestados. */
function Indicador({ ink }: { ink: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke={ink}
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
      className="mt-[0.3em] shrink-0"
    >
      <path d="M2.5 9h13" />
      <path d="M9 2.5v13" className="group-open:hidden" />
    </svg>
  );
}
