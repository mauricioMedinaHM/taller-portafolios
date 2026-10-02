"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent, ReactNode } from "react";
import type { Portfolio } from "@/lib/data";
import type { Deck } from "@/lib/decks";

/* ==========================================================================
   El visor: la ventana punzada en el tablero.

   Es un <dialog> nativo, así que el foco queda atrapado y Esc cierra por el
   camino del navegador; lo único que hacemos es interceptar `cancel` para que
   el estado de React se entere.

   Muchos sitios se niegan a ser embebidos con X-Frame-Options, y eso no se
   puede detectar desde JavaScript. La única salida honesta es un temporizador:
   si el `load` del iframe no llegó en 6 segundos, nombramos el problema y
   ofrecemos la puerta de salida.
   ========================================================================== */

const ESPERA_MS = 6000;
const TITULO_ID = "visor-titulo";

export interface VisorProps {
  item: Portfolio | null; // null = cerrado
  deck: Deck | null;
  siblings: Portfolio[]; // las fichas del mazo actual, en orden
  onClose: () => void;
  onNavigate: (item: Portfolio) => void;
}

function hostLabel(url: string): string {
  return url
    .replace(/^[a-z]+:\/\//i, "")
    .replace(/^www\./i, "")
    .replace(/\/+$/, "");
}

/** No secuestramos las flechas si la persona está escribiendo. */
function escribiendo(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
}

export function Visor({
  item,
  deck,
  siblings,
  onClose,
  onNavigate,
}: VisorProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const [cargado, setCargado] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);
  const [enVista, setEnVista] = useState<string | null>(null);

  const abierto = item !== null;

  /* Al cambiar de sitio, el estado de carga vuelve a cero durante el propio
     render: es la forma que recomienda React para derivar de un prop, sin
     pasar por un efecto que dispare un render en cascada. */
  if (item && item.url !== enVista) {
    setEnVista(item.url);
    setCargado(false);
    setBloqueado(false);
  }

  /* Abrir y cerrar el diálogo nativo desde el estado. */
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (abierto && !dialog.open) dialog.showModal();
    if (!abierto && dialog.open) dialog.close();
  }, [abierto]);

  /* El fondo no se scrollea mientras el visor está abierto. */
  useEffect(() => {
    if (!abierto) return;
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previo;
    };
  }, [abierto]);

  /* Cada sitio arranca su propia espera de 6 segundos. Si el `load` no llega,
     el sitio se está negando a ser embebido y hay que decirlo. */
  useEffect(() => {
    clearTimeout(timerRef.current);
    if (!enVista) return;
    timerRef.current = setTimeout(() => setBloqueado(true), ESPERA_MS);
    return () => clearTimeout(timerRef.current);
  }, [enVista]);

  const indice = item ? siblings.findIndex((s) => s.id === item.id) : -1;
  const anterior = indice > 0 ? siblings[indice - 1] : null;
  const siguiente =
    indice >= 0 && indice < siblings.length - 1 ? siblings[indice + 1] : null;

  const onKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLDialogElement>) => {
      if (escribiendo(event.target)) return;
      if (event.key === "ArrowLeft" && anterior) {
        event.preventDefault();
        onNavigate(anterior);
      }
      if (event.key === "ArrowRight" && siguiente) {
        event.preventDefault();
        onNavigate(siguiente);
      }
    },
    [anterior, siguiente, onNavigate]
  );

  const host = item ? hostLabel(item.url) : "";
  const tinta = deck?.ink ?? "var(--color-onboard-soft)";

  return (
    <>
      <VisorStyles />
      <dialog
        ref={dialogRef}
        aria-labelledby={TITULO_ID}
        onCancel={(event) => {
          event.preventDefault();
          onClose();
        }}
        onClose={() => {
          if (abierto) onClose();
        }}
        onKeyDown={onKeyDown}
        className="visor-dialog m-0 max-h-none max-w-none border-0 bg-[var(--color-board)] p-0 text-[var(--color-onboard)]"
      >
        {item && (
          <div className="flex h-full w-full flex-col">
            {/* ─────────── La barra: nombre, tinta, posición, controles ─────────── */}
            <div className="flex shrink-0 flex-col gap-2 bg-[var(--color-board-raised)] px-3 py-2 sm:flex-row sm:items-center sm:gap-3">
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className="block h-4 w-4 shrink-0"
                  style={{ background: tinta }}
                  aria-hidden="true"
                />
                <h2
                  id={TITULO_ID}
                  className="t-chip min-w-0 truncate text-[var(--color-onboard)]"
                >
                  {item.name}
                  <span className="sr"> — {host}</span>
                </h2>
                {indice >= 0 && (
                  <span className="t-code shrink-0 whitespace-nowrap text-[var(--color-onboard-soft)]">
                    {indice + 1} de {siblings.length}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-1.5 sm:ml-auto">
                <BotonBarra
                  onClick={() => anterior && onNavigate(anterior)}
                  disabled={!anterior}
                >
                  Anterior
                </BotonBarra>
                <BotonBarra
                  onClick={() => siguiente && onNavigate(siguiente)}
                  disabled={!siguiente}
                >
                  Siguiente
                </BotonBarra>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-label whitespace-nowrap px-2.5 py-1.5 text-[var(--color-onboard)] shadow-[inset_0_0_0_1px_var(--color-board-line)] hover:bg-[var(--color-board-deep)]"
                  style={{ borderRadius: "var(--radius-window)" }}
                >
                  Abrir en pestaña
                </a>
                <BotonBarra onClick={onClose}>Cerrar</BotonBarra>
              </div>
            </div>

            {/* ─────────── El sitio embebido ─────────── */}
            <div className="relative min-h-0 flex-1 bg-[var(--color-board-deep)]">
              {!cargado && !bloqueado && (
                <div
                  className="absolute inset-x-0 top-0 z-10 h-[2px] overflow-hidden"
                  role="status"
                  aria-label={`Cargando ${host}`}
                >
                  <span
                    className="visor-barra block h-full w-1/3"
                    style={{ background: tinta }}
                  />
                </div>
              )}

              <iframe
                key={item.url}
                src={item.url}
                title={`Vista embebida de ${host}`}
                className="h-full w-full border-0 bg-[var(--color-board-deep)]"
                referrerPolicy="no-referrer"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                onLoad={() => {
                  clearTimeout(timerRef.current);
                  setCargado(true);
                  setBloqueado(false);
                }}
              />

              {bloqueado && !cargado && (
                <div className="absolute inset-0 z-20 grid place-items-center bg-[var(--color-board-deep)] px-6">
                  <div className="max-w-[34rem] text-center">
                    <p className="t-label text-[var(--color-onboard-soft)]">
                      No se puede ver acá dentro
                    </p>
                    <p className="t-chip mt-2 text-[var(--color-onboard)]">
                      {host} está configurado para no mostrarse dentro de otra
                      página. No es un error del muestrario ni de tu conexión:
                      el sitio lo bloquea a propósito. Se ve completo en una
                      pestaña aparte.
                    </p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="t-label mt-4 inline-flex px-4 py-2.5"
                      style={{
                        background: tinta,
                        color:
                          deck?.onInk === "board"
                            ? "var(--color-board)"
                            : "var(--color-stock)",
                        borderRadius: "var(--radius-window)",
                      }}
                    >
                      Abrir {host} en una pestaña
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

function BotonBarra({
  children,
  onClick,
  disabled = false,
}: {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="t-label whitespace-nowrap px-2.5 py-1.5 text-[var(--color-onboard)] shadow-[inset_0_0_0_1px_var(--color-board-line)] hover:bg-[var(--color-board-deep)] disabled:cursor-default disabled:text-[var(--color-onboard-soft)] disabled:opacity-60 disabled:hover:bg-transparent"
      style={{ borderRadius: "var(--radius-window)" }}
    >
      {children}
    </button>
  );
}

/* --------------------------------------------------------------------------
   El diálogo a pantalla completa en chico y una ventana punzada en grande.
   La barra indeterminada es la otra única animación del sitio.
   -------------------------------------------------------------------------- */
function VisorStyles() {
  return (
    <style href="visor" precedence="component">{`
.visor-dialog {
  width: 100vw;
  height: 100dvh;
  max-width: 100vw;
  max-height: 100dvh;
  overflow: hidden;
}
.visor-dialog::backdrop {
  background: color-mix(in oklab, var(--color-board-deep) 88%, transparent);
}
@media (min-width: 640px) {
  .visor-dialog {
    width: min(94vw, 1400px);
    height: min(92dvh, 960px);
    margin: auto;
    border-radius: var(--radius-window);
    box-shadow: var(--shadow-window);
  }
}
@keyframes visor-barra {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}
.visor-barra { animation: visor-barra 1400ms var(--ease-fan) infinite; }
@media (prefers-reduced-motion: reduce) {
  .visor-barra { animation: none; width: 100%; opacity: 0.5; }
}
`}</style>
  );
}
