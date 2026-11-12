// Service worker mínimo: torna a página instalável como app. Não guarda cópia de nada (os dados vivem no app do Google).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
