import { CopyPrompt } from "./CopyPrompt";
import { lineaComandoTaller, promptArranque } from "@/lib/arranque";

/* ==========================================================================
   El arranque: el prompt con el que se abre el taller.
   Misma pieza que una banda del recetario —tinta a sangre, remache, y debajo
   una ventana punzada— porque es una fórmula más, solo que esta no se pliega:
   hay que leerla y copiarla antes de tocar el muestrario.
   ========================================================================== */

export function Arranque() {
  return (
    <section id="prompt" aria-labelledby="prompt-titulo" className="bg-board w-full pb-16 sm:pb-24">
      <div
        className="w-full px-5 pt-10 pb-8 sm:px-8"
        style={{ backgroundColor: "var(--color-deck-oscuro)" }}
      >
        <div className="mx-auto flex w-full max-w-[72ch] items-start gap-4">
          <span className="rivet-hole mt-2 inline-block h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <div>
            <h2 id="prompt-titulo" className="t-deck text-[var(--color-stock)]">
              Para empezar
            </h2>
            <p className="t-read mt-3 max-w-[60ch] text-[var(--color-stock)]">
              Copiá este prompt y pegalo en tu agente antes de escribir una
              línea. Instala las skills del taller y te lleva hasta el
              portafolio publicado.
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-8">
        <div
          className="punch mx-auto w-full max-w-[72ch] bg-[var(--color-stock)] px-5 py-6 text-[var(--color-ink)] shadow-chip sm:px-8 sm:py-8"
          style={{ borderRadius: "var(--radius-window)" }}
        >
          <CopyPrompt prompt={promptArranque} label="Copiar el prompt" tone="solid" />
          <div
            className="well mt-5 overflow-x-auto px-4 py-4 text-[var(--color-onboard)] sm:px-5 sm:py-5"
            style={{ borderRadius: "var(--radius-window)" }}
          >
            <p
              className="t-read max-w-[68ch] text-[0.9375rem]"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {promptArranque.split("\n").map((linea, i) => (
                <span key={i}>
                  {i > 0 && "\n"}
                  {linea === lineaComandoTaller ? (
                    <mark
                      className="prompt-marca -mx-1 px-1"
                      style={{
                        backgroundColor: "var(--color-rivet)",
                        color: "var(--color-board-deep)",
                      }}
                    >
                      {linea}
                    </mark>
                  ) : (
                    linea
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
