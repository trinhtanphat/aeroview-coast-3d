# AEROVIEW — Coastal Metropolis 🌊

A polished, immersive 3D city demo inspired by coastal aerial flyover visuals. Powered by **Three.js**, **Vite**, and procedural real-time geometry. No paid APIs, Google tiles, external map data, logins, or secrets.

![Screenshot of the working Aeroview coastal city demo](preview.png)

![Real-world Cesium OpenStreetMap globe in Singapore — requires activating REAL EARTH](earth-atlas-preview.png)

## Features

- 🌇 Procedural coastal city with **1,077 buildings, 9,360 window instances, animated water and 375 cloud instances**
- 🌍 Optional **REAL EARTH** mode: Cesium globe + real OpenStreetMap street-map imagery on request (not photorealistic)
- 🏙️ Optional Google Photorealistic 3D Tiles mode for users who explicitly provide their own billable, restricted Map Tiles API key
- 🎬 Cinematic auto-flyover plus free orbit, pan and zoom
- ⚡ Batched ground geometry and instanced cloud / rooftop meshes (~48 WebGL draw calls in test view)
- 🎛️ Click QUALITY to cycle AUTO → ECO → BALANCED → ULTRA; AUTO reduces resolution on slow clients
- ☀️ Dawn / Day / Sunset / Night and volumetric-look atmospheric haze
- 🏙️ Camera presets: Skyline, Top Down, Coastline, Street
- ✨ Window lighting, palms, tidal waterways, boats, cloud layers
- 📱 Responsive UI with tested touch scrolling on 390 px and 768 px viewports
- 🔐 No third-party map data or API key; all geometry generated in the browser

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5188](http://localhost:5188). The development and preview servers bind to loopback only; the public production site is hosted separately on GitHub Pages.

```bash
npm test
npm run build
npm run test:browser  # Chrome automated WebGL interaction test
npm run test:mobile   # 390px and 768px simulated touch scrolling tests
npm run test:earth    # Real-world atlas/CDN, modal and no-key security checks
```

## Publish on GitHub Pages

```bash
npm run build:pages
```

Serve the repo's `/docs` directory from the `main` branch in GitHub Pages. The built asset base is `/aeroview-coast-3d/`. The deployment has no GitHub Actions workflow file by design.

## Performance notes

Three.js requires WebGL. On GPU-backed computers and mobile devices, performance depends on GPU. On WIN11-181, the desktop session reports **Microsoft Remote/Basic Display Adapter** (no confirmed hardware GPU), and the Chrome headless software renderer measured **~3 FPS** at 1440×900 while a typical GPU-backed client may be much faster. The 3D scene is original and illustrative — **not** a reconstruction of a real city or the original Facebook video's full assets.

## License

MIT


## REAL EARTH experience (optional)

Select **REAL EARTH** in the top bar. Two distinct providers are available:

1. **WORLD ATLAS** — real OpenStreetMap cartographic tiles draped on a Cesium 3D globe. **No user API key or billing required**. This provides *real-world geographic streets*, not 3D building geometry or Google aerial photos. Tiles load from `tile.openstreetmap.org` only on explicit activation, with visible © OpenStreetMap contributors attribution. Do not bulk-download or prefetch map tiles.
2. **PHOTOREAL 3D TILES** — real photogrammetric cities using Google's Map Tiles API with CesiumJS. You must have enabled the Map Tiles API and billing in your own Google Cloud project, configured daily quotas, and supplied your own **HTTP-referrer-restricted browser key**. The key is held only in page memory, not saved, uploaded, or committed to Git. Network requests to Google necessarily transmit the key (visible to the browser/devtools); never use an unrestricted key.

Cities available in either mode: Gold Coast, Ho Chi Minh City, Singapore, New York and Tokyo. Coverage for Photoreal 3D Tiles varies by region. The globe can be closed to return to the original coastal demo.

**Important:** Atlas mode was browser-tested with live OpenStreetMap tiles. Live Google 3D rendering cannot be end-to-end tested without an authorized billed key. The no-key and consent guards are tested. This application does not include or obtain an API key for you.

**Cesium runtime** is loaded from the version-pinned jsDelivr `cesium@1.145.0` CDN *only on activation*, so the default procedural experience remains lightweight and available even if the CDN is offline. CesiumJS is Apache-2.0 licensed.

References:
- https://cesium.com/learn/cesiumjs-learn/cesiumjs-quickstart/
- https://developers.google.com/maps/documentation/tile/usage-and-billing
- https://developers.google.com/maps/documentation/tile/3d-tiles
- https://operations.osmfoundation.org/policies/tiles/
