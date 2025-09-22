import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mulheres Rurais',
    short_name: 'Mulheres Rurais',
    description: 'Descubra as historias e produtos artesanais únicos feitos por mulheres agricultoras, artesãs rurais do interior de Sergipe',
    start_url: '/',
    display: 'standalone',
    background_color: '#F9CF61',
    theme_color: '#B776DA',
    icons: [
      {
        src: '/logo192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}