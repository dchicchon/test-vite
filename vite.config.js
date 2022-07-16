import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log('test');
// https://vitejs.dev/config/
export default defineConfig({
  base: "/test-vite/",
  plugins: [react()]
})
