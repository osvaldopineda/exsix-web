// CURSE N PURSE — transcrito palabra por palabra de las cartas de EXSIX INDUSTRIA.
// No editar el texto: es copy del colectivo, no nuestro.
export type Carta = {
  nombre: string;
  tipo: string;
  texto: string;
  stats: [string, string];
  pips: number;
  img: string;
};

export const curse: Carta[] = [
  {
    nombre: 'VIOLATOR',
    tipo: 'TRAMPA',
    texto:
      'Debes controlar los deseos oscuros y resistir las tentaciones del bolso. Si fallas la entidad del Violator comenzará a consumir tu alma, remplazando tu ser con una versión ultraviolenta.',
    stats: ['DEF/9999', 'CURSE/9999'],
    pips: 8,
    img: '/media/ropa/violator.webp',
  },
  {
    nombre: 'DIPROSOPRUS',
    tipo: 'MALDICIÓN',
    texto:
      'El portador escuchará voces como si las dos caras del bolso le tentaran a actos oscuros y violentos hasta que ya no pueda distinguir si está actuando por voluntad o si su alma ya reside en el Diprosoprus.',
    stats: ['ATK/8888', 'CURSE/6666'],
    pips: 8,
    img: '/media/ropa/diprosoprus.webp',
  },
  {
    nombre: 'MASAKRE',
    tipo: 'SLAYER',
    texto:
      'Debes ofrecer un acto de compasión que neutralice la violencia del bolso. Esto es imposible, ya que el bolso te incitará a la ira y a la violencia. Si fracasas, la entidad tomará control de tu cuerpo para dar inicio a una oleada de asesinatos y después sucumbir en suicidio.',
    stats: ['ATK/9999', 'CURSE/10000'],
    pips: 8,
    img: '/media/ropa/masakre.webp',
  },
];

export const PRECIO = '$600 MXN';
