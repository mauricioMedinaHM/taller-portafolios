import { decks, deckCounts } from "@/lib/decks";

/* En reposo el abanico está casi cerrado: cada lengüeta asoma la punta
   con su nombre. La separación grande aparece solo al elegir una. */
const SPREAD = 3.5;

/* El abanico vive en su propia escena: ya no compite con el nombre del
   taller. La lengüeta señalada pasa al frente sin desplegar todas las demás. */
export function PaletaEstilos() {
  const middle = (decks.length - 1) / 2;

  return (
    <section
      aria-labelledby="paleta-titulo"
      className="mx-auto grid max-w-[104rem] overflow-hidden gap-10 px-5 pt-20 pb-20 sm:px-8 sm:pt-24 lg:grid-cols-[minmax(18rem,1fr)_minmax(0,44rem)] lg:items-center lg:gap-16 lg:pt-28 lg:pb-28"
    >
      <div>
        <h2 id="paleta-titulo" className="t-deck text-[var(--color-stock)]">
          Paleta de estilos
        </h2>
        <p className="t-read mt-4 text-[var(--color-onboard-soft)]">
          Acercá el mouse a una paleta para verla completa. Elegí el estilo que
          más se parece al portafolio que querés construir.
        </p>
      </div>

      <div className="fan">
        <span
          aria-hidden="true"
          className="absolute top-[calc(50%-0.5rem)] left-[0.75rem] z-50 hidden size-4 rounded-full lg:block"
          style={{
            backgroundColor: "var(--color-rivet)",
            boxShadow:
              "inset 0 -1px 2px rgb(6 10 8 / 0.5), 0 2px 7px rgb(6 10 8 / 0.8)",
          }}
        />
        <ul className="flex flex-col gap-1.5 lg:contents">
          {decks.map((deck, i) => {
            const count = deckCounts[deck.id];
            const angle = (i - middle) * SPREAD;

            return (
              <li
                key={deck.id}
                className="fan-tab"
                style={{
                  ["--angle" as string]: `${angle}deg`,
                  ["--z" as string]: decks.length - i,
                }}
              >
                <a
                  href={`#${deck.id}`}
                  className="flex h-11 items-center gap-3 px-4 lg:pr-6 lg:pl-9"
                  style={{
                    backgroundColor: deck.ink,
                    color:
                      deck.onInk === "stock"
                        ? "var(--color-stock)"
                        : "var(--color-board)",
                    borderRadius: "var(--radius-chip)",
                    boxShadow: "var(--shadow-chip)",
                  }}
                >
                  <span className="t-code opacity-70 lg:hidden">{deck.code}</span>
                  <span className="t-label min-w-0 flex-1 truncate lg:text-right">
                    {deck.name}
                  </span>
                  <span className="t-code shrink-0 opacity-70">{count}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
