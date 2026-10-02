import { Portada } from "./components/Portada";
import { PaletaEstilos } from "./components/PaletaEstilos";
import { Introduccion } from "./components/Introduccion";
import { Arranque } from "./components/Arranque";
import { Muestrario } from "./components/Muestrario";
import { Librerias } from "./components/Librerias";
import { Recetario } from "./components/Recetario";
import { allPortfolios } from "@/lib/data";
import { anfitriones } from "@/lib/arranque";

export default function Home() {
  return (
    <>
      <a className="skip" href="#muestrario">
        Saltar al muestrario
      </a>

      <main className="relative z-1">
        <Portada />
        <PaletaEstilos />
        <Introduccion />
        <Arranque />
        <Muestrario />
        <Librerias />
        <Recetario />
      </main>

      <footer className="relative z-1 border-t border-[var(--color-board-line)] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-[104rem]">
          <p className="credito t-read text-[0.9375rem] text-[var(--color-onboard)]">
            <a href={anfitriones[0].href} rel="noopener noreferrer">
              {anfitriones[0].handle}
            </a>
            <span aria-hidden="true"> {"<>"} </span>
            <span className="sr"> y </span>
            <a href={anfitriones[1].href} rel="noopener noreferrer">
              {anfitriones[1].handle}
            </a>
          </p>
          <p className="t-read mt-4 text-[0.9375rem] text-[var(--color-onboard-soft)]">
            Las capturas se tomaron del sitio publicado de cada portafolio y son
            de sus autores. Si un sitio se abre en blanco dentro del visor es
            porque no permite verse embebido: el botón de abrir en pestaña lo
            muestra igual. Los {allPortfolios.length} enlaces se verificaron uno
            por uno y los caídos se sacaron del listado.
          </p>
        </div>
      </footer>
    </>
  );
}
