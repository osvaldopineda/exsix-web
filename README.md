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
- El shader (`src/components/Veil.astro`) es carne: un campo de altura con latido, venas y brillo húmedo que sigue al cursor, a ½ de resolución. Un solo shader parametrizado con un tejido por habitación (tabla `T`: víscera, estómago, bilis, cartílago, hueso, sangre, nervio, grasa, músculo, entraña, membrana).
- El sitio son **habitaciones**: el Altar es el vestíbulo y cada sección es un cuarto al que se entra por el sello (la página se hunde en el centro y emerge en el nuevo tejido). Puertas al pie de cada cuarto, `#hash` por cuarto, botón atrás funciona.
- `prefers-reduced-motion`: carne congelada, cambio de cuarto sin animación, el EP suena pero no sacude nada.

## El EP (dummy)

**El sello es el reproductor.** El logo es play/pause, el anillo interior del sigilo es el progreso, los cinco pentagramas sobre ese anillo son las pistas. Mientras suena, un `AnalyserNode` mide los graves y escribe `--kick`: el logo pega con el bombo y el shader cambia su latido sintético por el real, en cualquier cuarto. Media Session para la pantalla de bloqueo. Cero bytes de audio antes del primer click.

Hoy las pistas son **placeholder** (dron + bombo sintetizados con ffmpeg, 30 s, ~180 KB c/u) porque el EP se está grabando. Cuando llegue el real:

1. Reemplaza `public/media/ep/*.mp3`.
2. Actualiza `src/data/ep.ts` (título, nombres, duraciones en segundos; las duraciones reparten el anillo).
3. Si el bombo real no mueve la carne, ajusta ganancia/caída del kick en `Veil.astro` (comentario `ponytail`).

## Pendiente

- EP real del primo (archivos o links de streaming) para sustituir el dummy
- Fotos reales de merch y stills de video
- Nombres y roles de los seis
- Backend del guestbook (hoy vive en localStorage del visitante)
- Deploy (Cloudflare Pages) cuando Os dé luz verde
