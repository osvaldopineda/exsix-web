// Los seis videos del canal de EXSIX. Títulos tal como ellos los publicaron.
export type Rito = {
  id: string;      // id de YouTube
  titulo: string;
  autor: string;
  thumb: string;
};

export const ritos: Rito[] = [
  { id: 'hGitY6U2s48', titulo: 'CYBERNET',      autor: 'Sayan Syn × EXSIX', thumb: '/media/rites/cybernet.webp' },
  { id: 'H03ffo0Cgxc', titulo: 'EXSIX MANTRA',  autor: 'EXSIX',             thumb: '/media/rites/mantra.webp' },
  { id: '_919AnnEeSo', titulo: 'DUSK',          autor: 'Sayan Syn',         thumb: '/media/rites/dusk.webp' },
  { id: 'eWQtkiyGxUQ', titulo: 'MEMORIA',       autor: 'Sayan Syn',         thumb: '/media/rites/memoria.webp' },
  { id: 'hooNerfOMRU', titulo: 'FCK LOVE',      autor: 'Sayan Syn',         thumb: '/media/rites/fck-love.webp' },
  { id: 'iOe6UnVr3CE', titulo: 'S.A.S',         autor: 'SR-0619 · prod. Erik', thumb: '/media/rites/sas.webp' },
];
