// EP en grabación. Pistas DUMMY (dron + bombo sintetizados con ffmpeg, 30 s).
// Cuando llegue el EP real: reemplazar los mp3 en public/media/ep, esta lista,
// y los ids/thumbs de YouTube (hoy apuntan a videos reales del canal como relleno).
export type Pista = { n: number; titulo: string; src: string; dur: number; yt: string; thumb: string }; // dur en segundos

export const ep = {
  title: 'EXSIX DEMONS',
  tracks: [
    { n: 1, titulo: 'pista i',   src: '/media/ep/01.mp3', dur: 30, yt: 'hGitY6U2s48', thumb: '/media/rites/cybernet.webp' },
    { n: 2, titulo: 'pista ii',  src: '/media/ep/02.mp3', dur: 30, yt: 'H03ffo0Cgxc', thumb: '/media/rites/mantra.webp' },
    { n: 3, titulo: 'pista iii', src: '/media/ep/03.mp3', dur: 30, yt: '_919AnnEeSo', thumb: '/media/rites/dusk.webp' },
    { n: 4, titulo: 'pista iv',  src: '/media/ep/04.mp3', dur: 30, yt: 'eWQtkiyGxUQ', thumb: '/media/rites/memoria.webp' },
    { n: 5, titulo: 'pista v',   src: '/media/ep/05.mp3', dur: 30, yt: 'hooNerfOMRU', thumb: '/media/rites/fck-love.webp' },
  ] as Pista[],
};
