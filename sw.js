const CACHE='workbench-v1';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(clients.claim())});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{let r2=res.clone();caches.open(CACHE).then(c=>c.put(e.request,r2));return res})))})
