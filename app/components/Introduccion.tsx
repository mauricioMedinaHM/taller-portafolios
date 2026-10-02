import { allPortfolios } from "@/lib/data";

/* La explicación vive después del hero para que la primera pantalla sea
   identidad pura: logos, nombre, personas y abanico. */
export function Introduccion() {
  return (
    <section
      aria-labelledby="como-se-usa"
      className="mx-auto grid max-w-[104rem] gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,38rem)] lg:items-start lg:gap-16 lg:pb-28"
    >
      <div>
        <p className="t-read text-[1.1875rem] text-[var(--color-onboard)] sm:text-[1.3125rem]">
          {allPortfolios.length} portafolios reales, agrupados por cómo se ven.
          No es una lista de links lindos: cada ficha se da vuelta y te dice qué
          técnica hace que ese sitio se vea así, cuál es el error típico de
          quien lo copia sin entenderlo, y el prompt exacto para pedirle ese
          estilo a un agente.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#prompt"
            className="t-label bg-[var(--color-stock)] px-5 py-3.5 text-[var(--color-board)] transition-colors duration-150 hover:bg-white"
            style={{ borderRadius: "var(--radius-window)" }}
          >
            Empezar el desarrollo
          </a>
          <a
            href="#muestrario"
            className="t-label px-5 py-3.5 text-[var(--color-onboard)] shadow-[inset_0_0_0_1px_var(--color-board-line)] transition-colors duration-150 hover:bg-[var(--color-board-raised)]"
            style={{ borderRadius: "var(--radius-window)" }}
          >
            Abrir el muestrario
          </a>
          <a
            href="#recetario"
            className="t-label px-5 py-3.5 text-[var(--color-onboard)] shadow-[inset_0_0_0_1px_var(--color-board-line)] transition-colors duration-150 hover:bg-[var(--color-board-raised)]"
            style={{ borderRadius: "var(--radius-window)" }}
          >
            Ver el recetario
          </a>
        </div>
      </div>

      <div className="punch px-6 py-6 shadow-[var(--shadow-chip)]">
        <h2 id="como-se-usa" className="t-label text-[var(--color-ink)]">
          Cómo se usa
        </h2>
        <dl className="mt-5 space-y-4">
          {[
            [
              "Elegí el mazo",
              "Cada color agrupa los sitios que se ven parecido. Empezá por el que se acerca a lo que querés.",
            ],
            [
              "Dá vuelta la ficha",
              "Al dorso está la receta: qué significa cada término de su estilo y qué hace que funcione.",
            ],
            [
              "Copiá y pedilo",
              "El botón te deja el prompt en el portapapeles, listo para pegar en tu agente.",
            ],
          ].map(([term, def], i) => (
            <div key={term} className="flex gap-4">
              <dt className="t-code w-7 shrink-0 pt-1 text-[var(--color-ink-soft)]">
                {i + 1}
              </dt>
              <div className="min-w-0">
                <dt className="t-chip text-[var(--color-ink)]">{term}</dt>
                <dd className="mt-1 text-[0.9375rem] leading-snug text-[var(--color-ink-soft)]">
                  {def}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
