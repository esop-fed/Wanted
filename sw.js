const cacheName = 'wanted-sw'
const errorPath = '/ani-css/utils/404.jpeg'
const resource = [
  '/wanted/',
  '/wanted/index.html',
  '/wanted/src/index.js',
  errorPath
]

self.addEventListerner('install', e => {
  console.log('Service Worker Install')

  e.waitUnitl(
    caches.open(cacheName).then(cache => {
      console.log('Service Worker Caching all')

      return cache.addAll(resource)
    })
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => {
      console.log('Service Worker Fetching resource' + e.request.url)

      if (r !== undefined) {
        return r
      } else {
        return fetch(e.request).then(res => {
          const responseClone = res.clone()

          caches.open(cacheName).then(cache => {
            cache.put(e.request, responseClone)
          })

          return res
        })
      }
    })
  )
}).catch(err => {
  console.warn(err)

  return caches.match(errorPath)
})
