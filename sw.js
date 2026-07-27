const CACHE='workbench-v1';
const FILES=['/liujia-workbench/','/liujia-workbench/index.html','/liujia-workbench/manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
