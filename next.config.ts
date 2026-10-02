import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    // Las capturas ya se generan en WebP a 1280x800 por `scripts/shoot.mjs`,
    // así que no hay nada que optimizar en tiempo de pedido. Además el
    // optimizador por defecto no existe en una exportación estática.
    unoptimized: true,
  },
};

export default nextConfig;
