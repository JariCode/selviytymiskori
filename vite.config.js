
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/selviytymiskori/',

  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['selviytymiskori.svg'],

      manifest: {
        id: '/selviytymiskori/',
        name: 'Selviytymiskori',
        short_name: 'Selviytymiskori',
        description:
          'Helppokäyttöinen ostoslista arkeen ja varautumiseen.',
        lang: 'fi',
        start_url: '/selviytymiskori/',
        scope: '/selviytymiskori/',
        display: 'standalone',
        background_color: '#10120f',
        theme_color: '#10120f',

        icons: [
          {
            src: 'selviytymiskori.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any'
          }
        ]
      },

      workbox: {
        globPatterns: [
          '**/*.{js,css,html,svg,ico,png,webp}'
        ]
      }
    })
  ]
})
