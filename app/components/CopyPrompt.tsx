"use client";

import { useEffect, useRef, useState } from "react";

/* El único control que el taller usa de verdad: copiar la receta.
   Confirma en el propio botón, porque un aviso en otra parte de la pantalla
   no se ve cuando estás mirando el dedo que hizo clic. */

type State = "idle" | "ok" | "fail";

export interface CopyPromptProps {
  prompt: string;
  /** Texto en reposo. */
  label?: string;
  /** "solid" para acciones principales, "quiet" dentro de una ficha. */
  tone?: "solid" | "quiet";
  className?: string;
}

export function CopyPrompt({
  prompt,
  label = "Copiar receta",
  tone = "solid",
  className = "",
}: CopyPromptProps) {
  const [state, setState] = useState<State>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(prompt);
      setState("ok");
    } catch {
      setState("fail");
    }
    timer.current = setTimeout(() => setState("idle"), 2600);
  }

  const base =
    "t-label inline-flex items-center gap-2 px-3 py-2 cursor-pointer transition-colors duration-150 disabled:cursor-default";
  const tones = {
    solid:
      state === "ok"
        ? "bg-[var(--color-deck-terminal)] text-[var(--color-stock)]"
        : "bg-[var(--color-ink)] text-[var(--color-stock)] hover:bg-[var(--color-ink-soft)]",
    quiet:
      state === "ok"
        ? "bg-[var(--color-deck-terminal)] text-[var(--color-stock)]"
        : "bg-transparent text-[var(--color-ink)] shadow-[inset_0_0_0_1px_var(--color-stock-line)] hover:bg-[var(--color-stock-shade)]",
  } as const;

  return (
    <button
      type="button"
      onClick={copy}
      className={`${base} ${tones[tone]} ${className}`}
      style={{ borderRadius: "var(--radius-window)" }}
    >
      <CopyMark state={state} />
      <span>
        {state === "ok"
          ? "Copiada"
          : state === "fail"
            ? "Copiala a mano"
            : label}
      </span>
      {state === "fail" && (
        <span className="sr">
          El navegador bloqueó el portapapeles. Seleccioná el texto de la receta
          y copialo con el teclado.
        </span>
      )}
    </button>
  );
}

/* Ícono dibujado, un solo grosor de trazo, sin glifos prestados. */
function CopyMark({ state }: { state: State }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
      className="shrink-0"
    >
      {state === "ok" ? (
        <path d="M2 7.5 5.2 11 12 3.5" />
      ) : (
        <>
          <path d="M4.75 4.75V1.75h7.5v7.5h-3" />
          <path d="M1.75 4.75h7.5v7.5h-7.5z" />
        </>
      )}
    </svg>
  );
}
