"use client";

import { useMemo, useState } from "react";
import { allPortfolios, type Portfolio } from "@/lib/data";
import {
  chipCode,
  deckById,
  deckFor,
  groupByDeck,
  type Deck,
} from "@/lib/decks";
import { Chip } from "./Chip";
import { Visor } from "./Visor";

/** El único ícono del muestrario: una marca de verificación de trazo recto. */
function Marca({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
      className="mt-[0.3rem] shrink-0"
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="square"
    >
      <path d="M2.5 8.5 L6 12 L13.5 4" />
    </svg>
  );
}

function onInkColor(onInk: "stock" | "board"): string {
  return onInk === "stock" ? "var(--color-stock)" : "var(--color-board)";
}

export function Muestrario() {
  const [open, setOpen] = useState<Portfolio | null>(null);

  const groups = useMemo(
    () => groupByDeck(allPortfolios).filter((g) => g.items.length > 0),
    []
  );

  /** Hermanos del item abierto: su mazo, ya filtrado, en orden de pantalla. */
  const siblings = useMemo(() => {
    if (!open) return [];
    const id = deckFor(open);
    return groups.find((g) => g.deck.id === id)?.items ?? [open];
  }, [open, groups]);

  const openDeck: Deck | null = open ? deckById[deckFor(open)] : null;

  return (
    <section
      id="muestrario"
      className="scroll-mt-8"
      style={{ background: "var(--color-board)" }}
    >
      {groups.map(({ deck, items }) => {
        const fg = onInkColor(deck.onInk);
        return (
          <section key={deck.id} id={deck.id} className="scroll-mt-8 pb-16">
            {/* Banda de mazo: la tinta ocupa región. */}
            <div style={{ background: deck.ink, color: fg }}>
              <div className="mx-auto w-full max-w-[100rem] px-4 py-10 sm:px-6 sm:py-14">
                <p className="t-code" style={{ color: fg, opacity: 0.85 }}>
                  {deck.code} · {items.length} {items.length === 1 ? "ficha" : "fichas"}
                </p>
                <h2 className="t-deck mt-3 break-words" style={{ color: fg }}>
                  {deck.name}
                </h2>
                <p className="t-read mt-4 max-w-3xl" style={{ color: fg, opacity: 0.9 }}>
                  {deck.thesis}
                </p>
              </div>
            </div>

            {/* Material del taller, sobre el tablero. */}
            <div className="mx-auto w-full max-w-[100rem] px-4 sm:px-6">
              <div className="grid gap-x-12 gap-y-8 pt-10 lg:grid-cols-[minmax(0,34rem)_minmax(0,1fr)]">
                <p className="t-read" style={{ color: "var(--color-onboard-soft)" }}>
                  {deck.brief}
                </p>
                <div>
                  <h3 className="t-label" style={{ color: "var(--color-stock)" }}>
                    Cómo se reconoce
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {deck.tells.map((tell) => (
                      <li key={tell} className="flex gap-3">
                        <Marca color={deck.ink} />
                        <span
                          className="t-read min-w-0"
                          style={{ color: "var(--color-onboard-soft)" }}
                        >
                          {tell}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className="t-code mt-5 inline-block px-2.5 py-1.5"
                    style={{ background: deck.ink, color: fg }}
                  >
                    Esfuerzo: {deck.effort}
                  </p>
                </div>
              </div>

              {/* La grilla de fichas, apretada como el abanico apilado. */}
              <ul className="mt-12 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-4 min-[1600px]:grid-cols-5">
                {items.map((item, i) => (
                  <li key={item.id} className="min-w-0">
                    <Chip
                      item={item}
                      deck={deck}
                      code={chipCode(item, i)}
                      onOpen={setOpen}
                      isOpen={open?.id === item.id}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <Visor
        item={open}
        deck={openDeck}
        siblings={siblings}
        onClose={() => setOpen(null)}
        onNavigate={setOpen}
      />
    </section>
  );
}
