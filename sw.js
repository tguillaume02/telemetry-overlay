// Service worker : rend l'application installable et utilisable hors ligne après une première visite.
// Réseau d'abord pour les fichiers du site (une publication est visible dès qu'elle est en ligne),
// copie en cache en secours. Les requêtes vers d'autres serveurs (tuiles satellite, relief, polices,
// statistiques) ne passent pas par le cache : elles restent soumises au réseau, comme avant.

const CACHE = 'telemetry-overlay-v4';
const SHELL = ['./', 'index.html', 'presentation.html', 'guide.html', 'style.css', 'js/app.js', 'js/guide.js', 'js/accueil.js', 'js/log-worker.js', 'manifest.webmanifest',
  'logo/telemetry-overlay-icon.svg', 'logo/telemetry-overlay-192.png', 'logo/favicon-32.png'];

self.addEventListener('install', e => {
  // allSettled : un fichier manquant (lancement local, autre chemin) ne bloque pas l'installation
  e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(SHELL.map(u => c.add(u)))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  // Lectures partielles (vidéos de présentation) : laissées au navigateur, le cache ne sait pas les servir
  if (req.headers.has('range')) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      // Toujours revalidé auprès du serveur (réponse 304 légère si rien n'a changé) : sans ça, le cache HTTP
      // du navigateur peut resservir pendant des jours un module JS ancien (chargé sans numéro de version)
      // alors que les autres sont à jour. Une navigation ne peut pas être recopiée avec d'autres options.
      const res = await fetch(req.mode === 'navigate' ? req : new Request(req, { cache: 'no-cache' }));
      // Copie en secours, sans attendre ni faire échouer la réponse si le stockage est plein
      if (res.ok && res.status === 200 && res.type === 'basic') cache.put(req, res.clone()).catch(() => {});
      return res;
    } catch (err) {
      // Hors ligne : même fichier, en ignorant le numéro de version (?v=…) des liens de index.html
      const hit = await cache.match(req) || await cache.match(req, { ignoreSearch: true })
        || (req.mode === 'navigate' ? await cache.match('index.html') : undefined);
      if (hit) return hit;
      throw err;
    }
  })());
});
