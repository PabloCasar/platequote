// PlateQuote: primero la red (siempre la última versión); sin conexión, la copia guardada.
// Los datos no pasan por aquí: van a Google Drive y al navegador.
const CACHE = "platequote-20261125-224626";
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
  await self.clients.claim();
})()));
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  e.respondWith((async () => {
    try {
      const r = await fetch(e.request);
      if (r.ok) (await caches.open(CACHE)).put(e.request, r.clone());
      return r;
    } catch(err){
      const c = await caches.match(e.request, {ignoreSearch: true});
      if (c) return c;
      throw err;
    }
  })());
});
