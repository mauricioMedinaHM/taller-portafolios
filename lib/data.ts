import portfolios from "./portfolios.json";

export type Category = "Desarrollador" | "Creativos" | "Empresa" | "Otros";

export interface Portfolio {
  id: string;
  name: string;
  url: string;
  style?: string | null;
  source: string;
  notes?: string | null;
  context?: string | null;
  category: Category;
  category_probs: Record<string, number>;
  category_confidence?: number | null;
  repo?: string | null;
  stack?: string | null;
  libs?: string | null;
  confidence?: string | null;
  level?: string | null;
  profile?: string | null;
  /** Todas las listas del relevamiento en las que apareció este sitio. */
  sources?: string[];
}

/* --------------------------------------------------------------------------
   El listado crudo trae el mismo sitio más de una vez: los que se usaron de
   ejemplo también están en "Repos y stack", y varios de los creativos 3D
   aparecen en las tres listas. Son 168 registros para 135 sitios. Mostrar el
   mismo portafolio en tres mazos distintos no es exhaustividad, es ruido: el
   visitante cree que son sitios distintos.

   Se unifican por URL normalizada, y en lugar de descartar los repetidos se
   funden: el estilo acumula los términos de todas las apariciones (así el
   dorso de la ficha explica más), y el registro guarda de qué listas vino.
   -------------------------------------------------------------------------- */

function urlKey(url: string): string {
  return url
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/+$/, "");
}

/** El listado de origen de una ficha pesa menos que su estética: un sitio que
 *  además está en "Repos y stack" sigue siendo, antes que nada, un portafolio.
 *  Sólo lo que no aparece en ninguna otra lista se queda en el punto de partida. */
const SOURCE_LAST = new Set(["Repos y stack"]);

function mergeStyles(a?: string | null, b?: string | null): string | null {
  const terms = new Set(
    [a ?? "", b ?? ""]
      .join(" ")
      .split(/\s+/)
      .map((t) => t.trim())
      .filter((t) => t && t.toLowerCase() !== "no" && t.toLowerCase() !== "determinado")
  );
  const joined = [...terms].join(" ").trim();
  return joined || null;
}

function dedupe(items: Portfolio[]): Portfolio[] {
  const byUrl = new Map<string, Portfolio>();
  for (const item of items) {
    const key = urlKey(item.url);
    const seen = byUrl.get(key);
    if (!seen) {
      byUrl.set(key, { ...item, sources: [item.source] });
      continue;
    }
    const sources = [...(seen.sources ?? [seen.source]), item.source];
    const preferIncoming =
      SOURCE_LAST.has(seen.source) && !SOURCE_LAST.has(item.source);
    const base = preferIncoming ? item : seen;
    byUrl.set(key, {
      ...base,
      sources,
      style: mergeStyles(seen.style, item.style),
      notes: base.notes ?? seen.notes ?? item.notes,
      repo: seen.repo ?? item.repo ?? null,
      stack: seen.stack ?? item.stack ?? null,
      libs: seen.libs ?? item.libs ?? null,
      level: seen.level ?? item.level ?? null,
      profile: seen.profile ?? item.profile ?? null,
    });
  }
  return [...byUrl.values()];
}

export const allPortfolios: Portfolio[] = dedupe(portfolios as Portfolio[]);

/** Cuántos registros trae el listado crudo, antes de unificar repetidos. */
export const rawRecordCount: number = (portfolios as Portfolio[]).length;

export const categories: Category[] = [
  "Desarrollador",
  "Creativos",
  "Empresa",
  "Otros",
];

export const categoryOrder: Record<Category, number> = {
  Desarrollador: 0,
  Creativos: 1,
  Empresa: 2,
  Otros: 3,
};

export function normalizeSearchTerm(term: string) {
  return term
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function filterPortfolios(
  items: Portfolio[],
  query: string
): Portfolio[] {
  const q = normalizeSearchTerm(query);
  if (!q) return items;
  return items.filter((item) => {
    const haystack = normalizeSearchTerm(
      [
        item.name,
        item.url,
        item.style,
        item.notes,
        item.context,
        item.stack,
        item.libs,
        item.profile,
        item.source,
        item.category,
      ]
        .filter(Boolean)
        .join(" ")
    );
    return haystack.includes(q);
  });
}

export function groupByCategory(items: Portfolio[]) {
  const map: Record<string, Portfolio[]> = {};
  for (const c of categories) {
    map[c] = [];
  }
  for (const item of items) {
    const cat = item.category;
    if (!map[cat]) map[cat] = [];
    map[cat].push(item);
  }
  // sort by category order
  const entries = categories.map((c) => [c, map[c]] as const);
  return entries;
}
