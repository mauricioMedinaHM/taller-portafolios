"use client";

import { decks, type DeckId } from "@/lib/decks";

export interface DeckRailProps {
  /** Cuántas fichas tiene cada mazo con el filtro actual. */
  counts: Record<DeckId, number>;
  /** Mazo seleccionado; null = todos. */
  activeDeck: DeckId | null;
  onPick: (deck: DeckId | null) => void;
}

/** El texto que va encima de la tinta del mazo. */
function onInkColor(onInk: "stock" | "board"): string {
  return onInk === "stock" ? "var(--color-stock)" : "var(--color-board)";
}

export function DeckRail({ counts, activeDeck, onPick }: DeckRailProps) {
  const total = decks.reduce((sum, deck) => sum + (counts[deck.id] ?? 0), 0);

  return (
    <div
      role="group"
      aria-label="Filtrar por mazo"
      className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{ scrollSnapType: "x proximity" }}
      tabIndex={0}
    >
      <ul className="flex w-max items-stretch gap-1.5 pt-1 pb-2 pl-1">
        {/* Lengüeta inicial: todos los mazos. */}
        <li
          className="relative shrink-0"
          /* Siempre debajo: es la lengüeta de más a la izquierda y nada la
             solapa, mientras que levantarla le tapaba el código del mazo
             siguiente. Que esté activa ya se ve porque sale del riel. */
          style={{ zIndex: 1, scrollSnapAlign: "start" }}
        >
          <button
            type="button"
            onClick={() => onPick(null)}
            aria-pressed={activeDeck === null}
            className="flex h-full w-[7.5rem] flex-col justify-between gap-3 rounded-[2px] px-3 py-3 text-left outline-offset-2 transition-transform sm:w-[8.5rem]"
            style={{
              background: "var(--color-board-raised)",
              color: "var(--color-stock)",
              boxShadow:
                activeDeck === null ? "var(--shadow-chip-lift)" : "var(--shadow-chip)",
              transform: activeDeck === null ? "translateY(-4px)" : undefined,
              border: "1px solid var(--color-board-line)",
            }}
          >
            <span className="t-code block">TODO</span>
            <span className="min-w-0">
              <span className="t-label block break-words">Todos los mazos</span>
              <span className="t-code mt-1 block opacity-80">
                {total} {total === 1 ? "ficha" : "fichas"}
              </span>
            </span>
          </button>
        </li>

        {decks.map((deck, i) => {
          const count = counts[deck.id] ?? 0;
          const empty = count === 0;
          const active = activeDeck === deck.id;
          const fg = onInkColor(deck.onInk);

          return (
            <li
              key={deck.id}
              className="relative shrink-0"
              style={{
                zIndex: active ? 20 : i + 2,
                scrollSnapAlign: "start",
              }}
            >
              <button
                type="button"
                disabled={empty}
                onClick={() => onPick(active ? null : deck.id)}
                aria-pressed={active}
                title={
                  empty
                    ? `${deck.name}: sin fichas en esta búsqueda`
                    : `Ver el mazo ${deck.name}`
                }
                className="flex h-full w-[8.75rem] flex-col justify-between gap-3 rounded-[2px] px-3 py-3 text-left outline-offset-2 transition-transform disabled:cursor-not-allowed sm:w-[10rem]"
                style={{
                  background: deck.ink,
                  color: fg,
                  opacity: empty ? 0.35 : 1,
                  boxShadow: active ? "var(--shadow-chip-lift)" : "var(--shadow-chip)",
                  transform: active ? "translateY(-6px)" : undefined,
                }}
              >
                <span className="t-code block">{deck.code}</span>
                <span className="min-w-0">
                  <span className="t-label block break-words">{deck.name}</span>
                  <span className="t-code mt-1 block" style={{ color: fg, opacity: 0.85 }}>
                    {empty ? "sin fichas" : `${count} ${count === 1 ? "ficha" : "fichas"}`}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
