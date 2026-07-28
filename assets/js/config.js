// ─── Configuración del Torneo ────────────────────────────────────────────────
//
//  INSTRUCCIONES:
//  1. Ve a https://dashboard.ngrok.com/cloud-edge/domains
//  2. Copia tu dominio estático gratuito (ej: lucky-iguana-freely.ngrok-free.app)
//  3. Reemplaza el valor de NGROK_DOMAIN abajo y haz push a GitHub.
//
const NGROK_DOMAIN = 'unfixed-overact-doubling.ngrok-free.dev';

window.TOURNAMENT_API_BASE =
  (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
    ? `${location.origin}/api`                        // Desarrollo local
    : `https://${NGROK_DOMAIN}/api`;                  // GitHub Pages → PC via ngrok
