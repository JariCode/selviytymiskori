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
          },
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
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