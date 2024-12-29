import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslintPlugin from "@nabla/vite-plugin-eslint";
import viteSvgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),eslintPlugin(), viteSvgr()],
    resolve: {
        alias: {
            "@app": "/src/app",
            "@entities": "/src/entities",
            "@public": "/src/public",
            "@shared": "/src/shared",
        },
    },
})
