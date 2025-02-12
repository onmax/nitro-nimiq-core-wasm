//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  compatibilityDate: "2025-02-12",
  experimental: { wasm: true },
  wasm: {lazy:true, esmImport: true},
  preset: "cloudflare_pages",
});
