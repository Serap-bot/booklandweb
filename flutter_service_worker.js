'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5e528cf95007395bcba9eaccb4e4f125",
".git/config": "578a4901eb94a2ea334b52787e58f376",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b16696f339e1ad0b291ba00ed5c1d2bb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0866d270d8a15e64d04dafa392d45c5c",
".git/logs/refs/heads/master": "0866d270d8a15e64d04dafa392d45c5c",
".git/logs/refs/remotes/origin/master": "755c534e1fb5898d4e18aade506451e8",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2f/749e9f934d6d7353bf6baa7865b127e3926e7e": "729f0fd867a54027a8523fec275e7d79",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/54/91bb78dfd1c0eca79b6f84ba4ad90c9c397763": "798264b94d95d78ce12d5e503b703b95",
".git/objects/59/3a42c8d7d7fd2d178237693e9083f262ff1af2": "4c8fec1e9c2bf85053d4fe078c0c692b",
".git/objects/66/9259e7873c9cf10234ac7941d78f10d1a80250": "b97bd837e08469b403abcf968cad22d8",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/70/41b523a5e4fc1ff9eab3eee8201be3c44b3263": "c8255e02eaf90157fdea2336bbd6e59e",
".git/objects/71/336a53257cc36984e5547414007fda65b0020e": "3030731c151edb8fa0c3dbb37a11fda3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/a3589aae58641f2475c85949c2f3fd4f83a013": "72a9d397b1ceade9b9be3564353f0274",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/056b2b23458cbe1200c6250116043bce32fd43": "2472709ad059bd4c6ee8021ceb7bd5ec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9b/060b5ee8314ca53c34e893815e19a15d718a44": "19fa352ab36cee0c22c076dc0ec26096",
".git/objects/9d/08f212fa7c4a996a548231b70e8a8933f22514": "c8b1505d6bd8374cba107366c451e325",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/82745c787cee19887c2e0daecf2157a7eb80e5": "4568c2378532005bc53296a5f6c1c11e",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/c050baa8db53adaad5c08d413576757c55eb2c": "1ac3ba77996f8196720ea84bcf41793c",
".git/objects/c6/119789488ce4893a277b856526967468938714": "4da1177df466149bef8b6dbb9015f67a",
".git/objects/d0/f7f5741658e618558e43159f397d85b3757cbc": "c3898f31eb1aab9cb802343984dd1b5e",
".git/objects/d3/f932b759f0d0d523c0d48cf8a54018f42cdd23": "4681ef1be94cfcb9def8d7104d059766",
".git/objects/d4/32d6edaea462eb89dd51c7df369bc76ed9c5f3": "bb52ee5680219cf3befc160d0a9e5779",
".git/objects/d6/dd3a6b1fe72291cfb7a811d99947d01f47ffb6": "ffd342f0b44472aa644d9d68625aca36",
".git/objects/da/85376664be779ebc35f6fc18b6121deb55d3c8": "8203bd5cecfabb5ee4f56b7bfeab8305",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/4beb98808486d08ca8736e20263c96c654c264": "8fc1fa65e615a2d7bbe313d29a477a8a",
".git/objects/eb/abbf26101005364533b54cbfef7ca7e23fefcc": "1c0247e8456ede6a475776dad84e51bc",
".git/objects/f0/35339702a9cb271624e3356c38f058851d466a": "ce3f7999bfcf478f6f4eba71bb74974f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/refs/heads/master": "afa937c5ce6063db7763a36467cb941e",
".git/refs/remotes/origin/master": "afa937c5ce6063db7763a36467cb941e",
"assets/AssetManifest.json": "a2d3a697847f18b9b34303dfaaec428b",
"assets/assets/images/babalar.jpg": "87921103eebc8f835251f8d0216c72b3",
"assets/assets/images/birdelinin.jpg": "d4ae66fb5322fe73d046ca15f3e749dd",
"assets/assets/images/bozk%25C4%25B1rkurdu.jpg": "677e63aecf405a54340fe0b64cf3fdc5",
"assets/assets/images/devlet.jpg": "f2a7e63e513a18fd48da36c2be7128a3",
"assets/assets/images/HomoDeus.jpg": "797abdb8a83ac0ac50891a4ea326db66",
"assets/assets/images/kategoriler.jpeg": "104367fa9922eb02308740095194fc7b",
"assets/assets/images/kategoriler1.jpg": "ebef8addc891722845ea282c0d6d2b80",
"assets/assets/images/nitche.jpg": "fee17a3d2d06821569e744c0aa1b27fb",
"assets/assets/images/notre.jpg": "62684ed06ed8b46a9258c4b81d5da42f",
"assets/assets/images/romeo.jpg": "0150a3160ce4a074627ce0df5ce96b8e",
"assets/assets/images/sapiens.jpg": "f5a0b65c4afa9f39d8182c82243cc99c",
"assets/assets/images/savassanati.jpg": "71f930948f8fd72c4a6815f4015892be",
"assets/assets/images/Siyasetname.jpg": "c6dafbd43b576b80ad9c6502eed339da",
"assets/assets/images/sofie.jpg": "1a230bb7bea584adf28b7f7078d22e35",
"assets/assets/images/sokratesin.jpg": "2218a850c5845c31fc24b9bb5385a455",
"assets/assets/images/sucveceza.jpg": "36602d5ba87ebf9564f8920a796c4663",
"assets/assets/images/T%25C3%25BCketim.jpg": "54a0eed7ce68de04ed3d8ce959ccbdc9",
"assets/assets/images/VarM%25C4%25B1s%25C4%25B1nKi.jpg": "f9b09d24e6f0676a9bac96a82a766484",
"assets/assets/images/yabanci.jpg": "edfc5f91fe27aca67259126a6ae0e090",
"assets/assets/images/yeralt%25C4%25B1ndan.jpg": "781ae55b5f91e5728b1db6ee0cf2f425",
"assets/assets/images/zerd%25C3%25BC%25C5%259Ft.jpg": "e98edffa73276b9c06831f03998ab885",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "d0db3f3de084f98df02cdb2ab8f103ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d84a88ed6df2ba36bdb29d6ab2ca06a8",
"/": "d84a88ed6df2ba36bdb29d6ab2ca06a8",
"main.dart.js": "7d2d41c38e65e99abf1ab92bba5e1778",
"manifest.json": "77b89e8748feffcc00616b07e1e37ecf",
"version.json": "d78b00f2092d2e9991a7d5bcaaed0c77"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
