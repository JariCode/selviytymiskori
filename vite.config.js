import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['selviytymiskori.svg'],
      manifest: {
        name: 'Selviytymiskori',
        short_name: 'Selviytymiskori',
        description: 'Pidä tärkeimmät tarvikkeet järjestyksessä.',
        lang: 'fi',
        theme_color: '#101310',
        background_color: '#101310',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/selviytymiskori.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}']
      }
    })
  ]
})