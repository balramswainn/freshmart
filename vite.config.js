import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base:command === 'build' ? '/freshmart/' : '/',
})

// problem after hard refresh url was http://localhost:5173/freshmart/  bcz of base:'/freshmart/'  so lagta tha humara base url ye hai

// fix:- 
// command === 'build' ? '/freshmart/' : '/',

// or

// process.env.NODE_ENV === 'production'
//   ? '/freshmart/'
//   : '/'

// usme process.env.NODE_ENV automatically Vite build time par set karta hai:

// npm run dev → "development"
// npm run build → "production"