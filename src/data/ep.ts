// EP en grabación. Pistas DUMMY (dron + bombo sintetizados con ffmpeg, 30 s).
// Cuando llegue el EP real: reemplazar los mp3 en public/media/ep y esta lista.
export type Pista = { n: number; titulo: string; src: string; dur: number }; // dur en segundos

export const ep = {
  title: 'EXSIX DEMONS',
  tracks: [
    { n: 1, titulo: 'pista i',   src: '/media/ep/01.mp3', dur: 30 },
    { n: 2, titulo: 'pista ii',  src: '/media/ep/02.mp3', dur: 30 },
    { n: 3, titulo: 'pista iii', src: '/media/ep/03.mp3', dur: 30 },
    { n: 4, titulo: 'pista iv',  src: '/media/ep/04.mp3', dur: 30 },
    { n: 5, titulo: 'pista v',   src: '/media/ep/05.mp3', dur: 30 },
  ] as Pista[],
};
