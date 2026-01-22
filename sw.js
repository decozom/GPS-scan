const CACHE_NAME = "pingpon-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.PNG",
  "./icons/icon-512.PNG",
  "./fields/fields.json",
  "./fields/oasis.json",
  "./maps/oasis.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});