import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
        alias: {
            "@app": "/src/app",
            "@entities": "/src/entities",
            "@public": "/src/public",
            "@shared": "/src/shared",
        },
    },
})
