// Pedidos: WhatsApp con mensaje prellenado (PUBLIC_WA en .env, fuera de git); sin número cae a Instagram.
// Vive en .ts porque el compilador de Astro se atraganta con "https://" dentro del frontmatter.
export const WA: string | undefined = import.meta.env.PUBLIC_WA || undefined;
export const IG = 'https://instagram.com/x6.exsix.x6';
export const canal = WA ? 'whatsapp' : 'instagram';
export const pedir = (q: string) => (WA ? `https://wa.me/${WA}?text=${encodeURIComponent(q)}` : IG);
