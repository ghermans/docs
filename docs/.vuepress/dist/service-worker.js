/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fe870eb945ca6b0e242765e7d0fd4fc4"
  },
  {
    "url": "assets/css/0.styles.78fcab50.css",
    "revision": "03e9f6db20a99d49950dc6a218bbfd88"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.54c82141.js",
    "revision": "3770823eedf843f31bfb816f4d0e778d"
  },
  {
    "url": "assets/js/11.381f9b07.js",
    "revision": "892bd74304779dcd1c1a922b241425fd"
  },
  {
    "url": "assets/js/12.e8bfdd93.js",
    "revision": "074aac7b39aff1ce4093a4bea9c64bc9"
  },
  {
    "url": "assets/js/13.7dac8c77.js",
    "revision": "9d0658219df8d8bebb668f1c12e2ebc3"
  },
  {
    "url": "assets/js/14.9228157f.js",
    "revision": "ad43839b09847fe4a874d5e9735b62f3"
  },
  {
    "url": "assets/js/15.f23d2a1d.js",
    "revision": "4e869e59c8a8278042131a23fe98b338"
  },
  {
    "url": "assets/js/2.6ecef43c.js",
    "revision": "8dccbfca93ccf857d76c49a6c72772fe"
  },
  {
    "url": "assets/js/3.53a811b4.js",
    "revision": "036901d6b39c70c4a5077231cccaafd2"
  },
  {
    "url": "assets/js/4.f7b82273.js",
    "revision": "8be32bae27dd02fba41d125e3817ae80"
  },
  {
    "url": "assets/js/5.1082bc8e.js",
    "revision": "73f95054523139c9d5ed908941abf958"
  },
  {
    "url": "assets/js/6.11dcca11.js",
    "revision": "a1c45f6643baafb37e69b402a1e295bc"
  },
  {
    "url": "assets/js/7.b57a760b.js",
    "revision": "6ea0abdd8a0dd59e18c61400bd887620"
  },
  {
    "url": "assets/js/8.24be85e6.js",
    "revision": "1dc36ae0850d27eda6b0f7478f0c36e2"
  },
  {
    "url": "assets/js/9.3e59ba7d.js",
    "revision": "5b525d48969408d993b85601cd517367"
  },
  {
    "url": "assets/js/app.3b30ccb2.js",
    "revision": "5f4f837203ef5504ef60e8eb99de90d1"
  },
  {
    "url": "events.html",
    "revision": "70dfa75da5aa1f2319824923086aa444"
  },
  {
    "url": "index.html",
    "revision": "989bcb178f0198e68387e75a6421137b"
  },
  {
    "url": "introduction/index.html",
    "revision": "4ab8a8f7adc41822583b1ce746afabfe"
  },
  {
    "url": "introduction/requirements.html",
    "revision": "eef5a867cb02cc5cb5d1521f8543e471"
  },
  {
    "url": "packages/backend_menu.html",
    "revision": "e7655135716f27144a89a4a92cd54614"
  },
  {
    "url": "packages/create.html",
    "revision": "f8971579582edaea94e12cfd23831e85"
  },
  {
    "url": "packages/index.html",
    "revision": "e06397c84ec60bac595f530be70d8a18"
  },
  {
    "url": "themes/backend.html",
    "revision": "4f461984e0d45f500df58c746e4fec69"
  },
  {
    "url": "themes/frontend.html",
    "revision": "64f6155162bbf539707e955494b0207c"
  },
  {
    "url": "themes/index.html",
    "revision": "a0147b4d67570b373fad5e93daae36e9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
