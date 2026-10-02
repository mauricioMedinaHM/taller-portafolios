"use client";

import { useId, useState } from "react";
import Image from "next/image";
import type { Portfolio } from "@/lib/data";
import type { Deck } from "@/lib/decks";
import { promptForDeck } from "@/lib/recetas";
import { explainStyle } from "@/lib/style-lexicon";
import { CopyPrompt } from "./CopyPrompt";
import shotPlaceholders from "@/lib/shot-placeholders.json";

/* ==========================================================================
   La ficha del muestrario.

   Una ficha de cartón claro: captura arriba en 16:10, el cartón debajo y la
   banda de tinta del mazo al pie con la referencia impresa. El remache de
   latón arriba a la izquierda es el agujero por donde pasaría el tornillo del
   abanico real.

   El giro sobre el eje Y es la única animación de la ficha, y es literal: una
   ficha de pintura se da vuelta para leer la fórmula de mezcla. Acá el dorso
   es la receta.
   ========================================================================== */

const placeholders = shotPlaceholders as Record<string, string>;

export interface ChipProps {
  item: Portfolio;
  deck: Deck;
  code: string; // "OSC-04", ya calculado
  onOpen: (item: Portfolio) => void; // abre el visor
  /** La ficha que está abierta en el visor se marca en la grilla. */
  isOpen?: boolean;
}

/** El dominio como se lee en voz alta: sin protocolo, sin www, sin barra. */
function hostLabel(url: string): string {
  return url
    .replace(/^[a-z]+:\/\//i, "")
    .replace(/^www\./i, "")
    .replace(/\/+$/, "");
}

/** Los términos crudos del campo `style`, para las etiquetas del frente. */
function styleTags(style: string | null | undefined): string[] {
  if (!style) return [];
  return style
    .split(/[\s,+/·|]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 1)
    .slice(0, 4);
}

export function Chip({ item, deck, code, onOpen, isOpen = false }: ChipProps) {
  const [flipped, setFlipped] = useState(false);
  const [shotFailed, setShotFailed] = useState(false);

  const uid = useId();
  const host = hostLabel(item.url);
  const tags = styleTags(item.style);
  const terms = explainStyle(item.style ?? "");
  const blur = placeholders[item.id];

  // Sobre la tinta del mazo va la tinta de texto que le corresponde: los
  // mazos claros (limpio, playful) llevan texto de tablero.
  const onInk =
    deck.onInk === "stock" ? "var(--color-stock)" : "var(--color-board)";

  return (
    <>
      <ChipStyles />
      <div
        /* El canto del cartón: sin él, dos capturas oscuras contiguas se
           funden entre sí y la ficha deja de leerse como un objeto. */
        className="chip-shell relative overflow-hidden rounded-[var(--radius-chip)] bg-[var(--color-stock)] ring-1 ring-[var(--color-board-line)] shadow-[var(--shadow-chip)]"
        style={
          isOpen
            ? { outline: `2px solid ${deck.ink}`, outlineOffset: "2px" }
            : undefined
        }
      >
        <div className="chip-stage">
          <div className={`chip-flipper ${flipped ? "chip-flipped" : ""}`}>
            {/* ─────────────── EL FRENTE: la muestra ─────────────── */}
            <div
              className="chip-face relative flex flex-col"
              inert={flipped}
              aria-hidden={flipped}
            >
{/* El remache va abajo, sobre la banda de tinta: encima de la captura
                  quedaba como una mancha sobre el trabajo de otro. */}

              <button
                type="button"
                onClick={() => onOpen(item)}
                className="relative block w-full cursor-pointer text-left"
                aria-label={`Ver ${host} en el visor`}
              >
                <span className="relative block aspect-[16/10] w-full overflow-hidden bg-[var(--color-board-raised)]">
                  {shotFailed ? (
                    <ShotFallback host={host} />
                  ) : (
                    <Image
                      src={`/shots/${item.id}.webp`}
                      alt={`Captura de la pantalla principal de ${host}`}
                      width={1280}
                      height={800}
                      sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"
                      className="h-full w-full object-cover object-top"
                      onError={() => setShotFailed(true)}
                      {...(blur
                        ? ({ placeholder: "blur", blurDataURL: blur } as const)
                        : {})}
                    />
                  )}
                </span>
              </button>

              {/* El cartón. */}
              <div className="flex flex-1 flex-col gap-2 px-3 pb-3 pt-2.5">
                <p className="t-chip text-[var(--color-ink)]">{host}</p>
                {tags.length > 0 && (
                  <ul className="flex flex-wrap gap-1">
                    {tags.map((tag) => (
                      <li
                        key={tag}
                        className="t-code bg-[var(--color-stock-shade)] px-1.5 py-0.5 text-[var(--color-ink-soft)]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* La banda de tinta del mazo, con la referencia impresa. */}
              <div
                className="relative flex h-[2.25rem] items-center gap-2.5 pr-12 pl-3"
                style={{ background: deck.ink, color: onInk }}
              >
                {/* El agujero del remache: acá tiene un color plano detrás y
                    se lee como parte del cartón. */}
                <span
                  className="rivet-hole block h-[0.5rem] w-[0.5rem] shrink-0"
                  aria-hidden="true"
                />
                <span className="t-code">{code}</span>
              </div>

              {/* El control del giro: abajo a la derecha, sobre la banda. */}
              <button
                type="button"
                onClick={() => setFlipped(true)}
                aria-label={`Ver la receta de ${host}`}
                aria-expanded={flipped}
                aria-controls={`${uid}-dorso`}
                className="absolute bottom-[0.375rem] right-[0.5rem] z-20 grid h-8 w-8 cursor-pointer place-items-center rounded-full"
                style={{
                  background: "var(--color-stock)",
                  color: "var(--color-ink)",
                  boxShadow: "var(--shadow-chip)",
                }}
              >
                <FlipMark />
              </button>
            </div>

            {/* ─────────────── EL DORSO: la receta ─────────────── */}
            <div
              id={`${uid}-dorso`}
              className="chip-face chip-back flex flex-col overflow-hidden bg-[var(--color-stock)] text-[var(--color-ink)]"
              inert={!flipped}
              aria-hidden={!flipped}
            >
              {/* El dorso es texto para leer, así que va en la familia de
                  lectura y en caja baja. Archivo en versales queda para las
                  etiquetas: en un párrafo entero no se lee. */}
              <p className="t-label shrink-0 bg-[var(--color-stock)] px-3 pt-3 pb-2 text-[var(--color-ink)]">
                La receta
              </p>

              <div className="min-h-0 flex-1 overflow-y-auto px-3 [scrollbar-gutter:stable]">
                {terms.length > 0 ? (
                  <dl className="flex flex-col gap-2">
                    {terms.map((term) => (
                      <div key={term.term} className="text-[0.8125rem] leading-snug">
                        <dt className="t-chip inline text-[var(--color-ink)]">
                          {term.label}
                        </dt>{" "}
                        <dd className="inline text-[var(--color-ink-soft)]">
                          {term.blurb}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="text-[0.8125rem] leading-snug text-[var(--color-ink-soft)]">
                    Esta ficha no declara términos propios: lo que la define es la
                    tesis del mazo.
                  </p>
                )}

                <div className="mt-3.5 flex flex-col gap-2.5 border-t border-[var(--color-stock-line)] pt-3 pb-3">
                  <p className="text-[0.8125rem] leading-snug text-[var(--color-ink)]">
                    {deck.thesis}
                  </p>
                  <p className="text-[0.8125rem] leading-snug text-[var(--color-ink-soft)]">
                    <span className="t-chip text-[var(--color-ink)]">
                      El error típico.
                    </span>{" "}
                    {deck.pitfall}
                  </p>
                </div>
              </div>

              {/* Los controles quedan pegados al pie, fuera del scroll: si la
                  receta es larga, copiar el prompt sigue a la vista y no tapa
                  el texto. */}
              <div className="flex shrink-0 flex-wrap items-center gap-1.5 border-t border-[var(--color-stock-line)] bg-[var(--color-stock)] px-2.5 py-2">
                <CopyPrompt
                  prompt={promptForDeck(deck)}
                  label="Copiar el prompt"
                  tone="quiet"
                />
                <button
                  type="button"
                  onClick={() => onOpen(item)}
                  className="t-label cursor-pointer px-3 py-2 text-[var(--color-ink)] shadow-[inset_0_0_0_1px_var(--color-stock-line)] hover:bg-[var(--color-stock-shade)]"
                  style={{ borderRadius: "var(--radius-window)" }}
                >
                  Abrir el sitio
                </button>
                <button
                  type="button"
                  onClick={() => setFlipped(false)}
                  aria-label={`Volver al frente de ${host}`}
                  className="t-label ml-auto cursor-pointer px-3 py-2 text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
                >
                  Volver al frente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* --------------------------------------------------------------------------
   El reemplazo de la captura. Algunas capturas todavía no existen, y un hueco
   vacío se lee como error: acá se dibuja una muestra con el dominio impreso
   sobre una trama diagonal fina.
   -------------------------------------------------------------------------- */
function ShotFallback({ host }: { host: string }) {
  return (
    <span
      className="absolute inset-0 grid place-items-center bg-[var(--color-board-raised)]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, var(--color-board-deep) 0 1px, transparent 1px 7px)",
      }}
    >
      <span className="t-chip px-3 text-center text-[var(--color-onboard-soft)]">
        {host}
      </span>
    </span>
  );
}

/* Flecha curva de "dar vuelta". Un solo grosor, sin glifos prestados. */
function FlipMark() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M2.75 8a5.25 5.25 0 0 1 9-3.65l1.5 1.4" />
      <path d="M13.25 2.5v3.25H10" />
      <path d="M13.25 8a5.25 5.25 0 0 1-9 3.65l-1.5-1.4" />
    </svg>
  );
}

/* --------------------------------------------------------------------------
   El CSS del giro vive acá y no en globals.css: es propio de este componente.
   React 19 iza la hoja una sola vez por `href`.
   -------------------------------------------------------------------------- */
function ChipStyles() {
  return (
    <style href="chip-flip" precedence="component">{`
.chip-shell {
  transition: transform 150ms var(--ease-fan), box-shadow 150ms var(--ease-fan);
}
.chip-shell:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-chip-lift);
}
.chip-stage { perspective: 1400px; }
.chip-flipper {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 520ms var(--ease-fan);
}
.chip-flipped { transform: rotateY(180deg); }
.chip-face {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.chip-back {
  position: absolute;
  inset: 0;
  transform: rotateY(180deg);
}
/* Al girar, el dorso pasa a definir la altura. Si se queda clavado a la
   captura, en un teléfono los botones tapan la receta. */
.chip-flipped > .chip-face:not(.chip-back) {
  position: absolute;
  inset: 0;
  visibility: hidden;
}
.chip-flipped > .chip-back {
  position: relative;
  inset: auto;
  min-height: 22rem;
}
@media (prefers-reduced-motion: reduce) {
  .chip-shell, .chip-flipper { transition: none; }
}
`}</style>
  );
}
