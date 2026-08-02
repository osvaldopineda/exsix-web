# EXSIX — collective shrine

Sitio del colectivo **EXSIX** (música, film y ropa). Web-revival gótico: la estructura de un sitio personal de 1999 (cajas con borde, update log, guestbook, contador de visitas, badges 88×31, marquee) con una sola pieza de magia moderna: **la Niebla**, un shader WebGL de humo rojo ditherizado a 1-bit que respira detrás de las cajas y sigue el cursor.

## Stack

- **Astro 5** — HTML estático, SEO y velocidad; cero JS de framework en runtime.
- **WebGL crudo** para el shader (sin three.js: es un solo quad fullscreen, ~90 líneas).
- Google Fonts: **UnifrakturMaguntia** (display fraktur), **Jacquard 12** (blackletter de píxeles — la tesis "1999 + gótico" en una fuente), **Space Mono** (cuerpo).

## Correr

```sh
npm install
npm run dev        # desarrollo
npm run build      # build a dist/
npm run preview    # sirve dist/ en :4141 (host visible en LAN)
```

## Dirección visual

Negro `#050505`, hueso `#E8E4DF`, rojo sangre `#B3000C` (gráfica) / `#FF2E39` (texto, AA sobre negro). Referencias: Drop Dead, BMTH, abysswalker.jp, cyber-sigilism, web revival (Neocities). Reglas aprendidas:

- El wordmark nunca va en fraktur a secas (las capitales góticas se leen mal); los numerales romanos tampoco (I/V parecen J/B) — esos van en Jacquard 12.
- El shader renderiza a ⅓ de resolución a propósito (`image-rendering: pixelated`): el píxel gordo es el look.
- `prefers-reduced-motion`: la niebla congela un frame, marquee y blinks se apagan.

## Pendiente

- Links reales de Spotify / YouTube (slot en Rites)
- Fotos reales de merch y stills de video
- Nombres y roles de los seis
- Backend del guestbook (hoy vive en localStorage del visitante)
- Deploy (Cloudflare Pages) cuando Os dé luz verde
