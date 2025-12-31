import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: "/meu-portfolio-v2/",
  plugins: [react()],
})