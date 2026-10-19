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

## El recorrido

El sitio tiene una misión: que el visitante **vea y escuche el EP**, conozca a EXSIX por sus fotos y sus palabras, y **pida la ropa** del EP. Nada suena ni se abre solo.

1. **Altar**: bajo el logo, "toca el sello para escuchar" y el botón "ver el EP" (→ cuarto manifestations).
2. **manifestations** es el cuarto del EP: un video de YouTube por pista (fachada, cero bytes antes de play) y "escuchar en el sello", que vuelve al Altar con esa pista sonando. Debajo, la película CYBERHELL.
3. Las puertas al pie de cada cuarto siguen el camino fijo **EP → sus palabras (curse) → las fotos (dark room) → la ropa del EP (clothes) → pedir la tuya (industries) → firma el libro**. Fuera del camino mandan el orden del DOM. Camino en `PATH`/`STEP` de `Veil.astro`.
4. **Pedir**: cada carta de Curse n Purse tiene "pedir X · $600 MXN" → WhatsApp con mensaje prellenado. El número vive en `.env` como `PUBLIC_WA` (ver `.env.example`; `.env` no va a git). Sin número, los botones caen a Instagram y lo dicen.
5. **Voces**: `src/data/voces.ts` tiene un hueco visible por cuarto (`[palabras de Sayan Syn]`). Los llenan ellos.

## El EP (dummy)

**El sello es el reproductor.** El logo es play/pause, el anillo interior del sigilo es el progreso, los cinco pentagramas sobre ese anillo son las pistas. Mientras suena, un `AnalyserNode` mide los graves y escribe `--kick`: el logo pega con el bombo y el shader cambia su latido sintético por el real, en cualquier cuarto. Media Session para la pantalla de bloqueo. Cero bytes de audio antes del primer click.

Hoy las pistas son **placeholder** (dron + bombo sintetizados con ffmpeg, 30 s, ~180 KB c/u) porque el EP se está grabando. Cuando llegue el real:

1. Reemplaza `public/media/ep/*.mp3`.
2. Actualiza `src/data/ep.ts` (título, nombres, duraciones en segundos; las duraciones reparten el anillo).
3. Si el bombo real no mueve la carne, ajusta ganancia/caída del kick en `Veil.astro` (comentario `ponytail`).

## Pendiente

- EP real del primo (mp3 + ids de YouTube por pista) para sustituir el dummy
- Número de WhatsApp en `.env` (`PUBLIC_WA`)
- Las voces de cada cuarto, escritas por ellos (`src/data/voces.ts`)
- Fotos reales de merch y stills de video
- Nombres y roles de los seis
- Backend del guestbook (hoy vive en localStorage del visitante)
- Deploy (Cloudflare Pages) cuando Os dé luz verde
